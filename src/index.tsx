import { hydrate, prerender as renderToHtml, LocationProvider, Router, Route } from 'preact-iso';
import { locationStub } from 'preact-iso/prerender';

import Nav from './Nav';
import Home from './Home';
import NotFound from './NotFound';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import BlogPost from './BlogPost';
import Metadata, { getPageMetadata } from './Metadata';
import { posts } from './posts';

import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Metadata />
			<Nav />
			<main class="flex flex-1 flex-col">
				<Router>
					<Route path="/" component={Home} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/blog" component={Blog} />
					<Route path="/blog/:n" component={BlogPost} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	const app = document.getElementById('app');
	if (app) hydrate(<App />, app);
}

export async function prerender(data: { url: string }) {
	locationStub(data.url);

	const path = new URL(data.url, 'https://Logan-010.github.io').pathname;
	const metadata = getPageMetadata(path);
	const { html } = await renderToHtml(<App />);
	const elements: { type: string; props: Record<string, string> }[] = [
		{ type: 'meta', props: { name: 'description', content: metadata.description } },
		{ type: 'meta', props: { name: 'robots', content: metadata.robots } },
		{ type: 'meta', props: { property: 'og:title', content: metadata.title } },
		{ type: 'meta', props: { property: 'og:description', content: metadata.description } },
		{ type: 'meta', props: { property: 'og:type', content: metadata.type } },
	];

	if (metadata.canonical) {
		elements.push(
			{ type: 'link', props: { rel: 'canonical', href: metadata.canonical } },
			{ type: 'meta', props: { property: 'og:url', content: metadata.canonical } },
		);
	}

	return {
		html,
		links: new Set([
			'/',
			'/portfolio',
			'/blog',
			'/about',
			'/contact',
			'/404',
			...posts.map((post) => `/blog/${post.id}`),
		]),
		head: {
			lang: 'en',
			title: metadata.title,
			elements: new Set(elements),
		},
	};
}
