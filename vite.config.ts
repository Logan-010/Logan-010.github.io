import { createServer, defineConfig, type ViteDevServer } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import { h } from 'preact';
import renderToString from 'preact-render-to-string';

function escapeXml(value: string): string {
	return value.replace(/[<>&"']/g, (character) => ({
		'<': '&lt;',
		'>': '&gt;',
		'&': '&amp;',
		'"': '&quot;',
		"'": '&apos;',
	})[character]!);
}

async function generateRss(server: ViteDevServer): Promise<string> {
	const { default: posts } = await server.ssrLoadModule('/src/posts.json');
	const items = await Promise.all([...posts]
		.sort((a, b) => b.date.localeCompare(a.date))
		.map(async (post) => {
			const link = `https://logan-010.github.io/blog/${post.id}/`;
			const date = new Date(`${post.date}T00:00:00Z`);
			if (Number.isNaN(date.getTime())) {
				throw new Error(`Invalid publication date for blog post ${post.id}: ${post.date}`);
			}
			const { default: Content } = await server.ssrLoadModule(`/src/posts/${post.slug}.tsx`);
			const content = renderToString(h(Content, {})).replace(
				/\b(href|src)="\/(?!\/)([^"]*)"/g,
				'$1="https://logan-010.github.io/$2"',
			);
			return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${date.toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
      <content:encoded>${escapeXml(content)}</content:encoded>
    </item>`;
		}));

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Logan's Blog</title>
    <link>https://logan-010.github.io/blog/</link>
    <description>A tech blog about computing, math, cybersecurity, and more.</description>
    <language>en-us</language>
    <atom:link href="https://logan-010.github.io/rss.xml" rel="self" type="application/rss+xml"/>
${items.join('\n')}
  </channel>
</rss>
`;
}

export default defineConfig({
	plugins: [
		{
			name: 'blog-rss',
			configureServer(server) {
				server.middlewares.use(async (request, response, next) => {
					if (request.originalUrl?.split('?')[0] !== '/rss.xml') return next();
					try {
						const rss = await generateRss(server);
						response.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
						response.end(rss);
					} catch (error) {
						next(error);
					}
				});
			},
			async generateBundle() {
				const server = await createServer({
					configFile: false,
					plugins: [preact()],
					server: { middlewareMode: true },
					appType: 'custom',
				});
				try {
					this.emitFile({ type: 'asset', fileName: 'rss.xml', source: await generateRss(server) });
				} finally {
					await server.close();
				}
			},
		},
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
				previewMiddlewareEnabled: true,
				previewMiddlewareFallback: '/404',
			},
		}),
		tailwindcss(),
	],
});
