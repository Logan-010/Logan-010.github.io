import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import blog from './build/blog.ts';

export default defineConfig({
	plugins: [
		blog(),
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
