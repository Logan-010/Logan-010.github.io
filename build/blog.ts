import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import matter from 'gray-matter';
import { Marked } from 'marked';
import type { Plugin } from 'vite';
import type { BlogEntry } from '../src/posts.ts';

function escapeXml(value: string): string {
	return value.replace(/[<>&"']/g, (character) => ({
		'<': '&lt;',
		'>': '&gt;',
		'&': '&amp;',
		'"': '&quot;',
		"'": '&apos;',
	})[character]!);
}

const markdown = new Marked({
	renderer: {
		code({ text }) {
			return `<pre class="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto text-sm font-mono"><code>${escapeXml(text)}</code></pre>\n`;
		},
	},
});

export function parsePost(source: string, filename: string): BlogEntry {
	const { data, content } = matter(source);
	if (!Number.isSafeInteger(data.id) || data.id < 1) {
		throw new Error(`Invalid blog post ID in ${filename}`);
	}
	for (const field of ['title', 'description', 'date']) {
		if (typeof data[field] !== 'string' || !data[field].trim()) {
			throw new Error(`Invalid blog post ${field} in ${filename}`);
		}
	}
	const date = new Date(`${data.date}T00:00:00Z`);
	if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date) || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== data.date) {
		throw new Error(`Invalid publication date for blog post ${data.id}: ${data.date}`);
	}
	return {
		id: data.id,
		title: data.title,
		description: data.description,
		date: data.date,
		html: markdown.parse(content, { async: false }),
	};
}

async function generateRss(directory: string): Promise<string> {
	const filenames = (await readdir(directory)).filter((filename) => filename.endsWith('.md'));
	const posts = await Promise.all(filenames.map(async (filename) =>
		parsePost(await readFile(resolve(directory, filename), 'utf8'), filename),
	));
	if (new Set(posts.map((post) => post.id)).size !== posts.length) {
		throw new Error('Duplicate blog post IDs');
	}
	const items = posts
		.sort((a, b) => b.date.localeCompare(a.date))
		.map((post) => {
			const link = `https://logan-010.github.io/blog/${post.id}/`;
			const date = new Date(`${post.date}T00:00:00Z`);
			const content = post.html.replace(
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
		});

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

export default function blog(): Plugin {
	let directory: string;
	return {
		name: 'markdown-blog',
		configResolved(config) {
			directory = resolve(config.root, 'src/posts');
		},
		transform(source, id) {
			if (!id.endsWith('.md')) return;
			return { code: `export default ${JSON.stringify(parsePost(source, id))};`, map: null };
		},
		configureServer(server) {
			server.middlewares.use(async (request, response, next) => {
				if (request.originalUrl?.split('?')[0] !== '/rss.xml') return next();
				try {
					response.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
					response.end(await generateRss(directory));
				} catch (error) {
					next(error);
				}
			});
		},
		async generateBundle() {
			this.emitFile({ type: 'asset', fileName: 'rss.xml', source: await generateRss(directory) });
		},
	};
}
