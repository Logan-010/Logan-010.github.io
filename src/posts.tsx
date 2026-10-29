import type { ComponentType } from 'preact';
import { lazy } from 'preact-iso';

export interface BlogEntry {
  id: number;
  title: string;
  description: string;
  date: string;
  Content: ComponentType;
}

export const posts: BlogEntry[] = [
  // Hey future me--a blog post entry will look like this!
  //
  // ./posts/hello-world.tsx:
  //
  // export default function HelloWorld() {
  //    return <p>Hello, world!</p>
  // }
  // 
  // {
  //   id: 1,
  //   title: 'Hello, world!',
  //   description: 'Welcome to the blog.',
  //   date: '2026-10-29',
  //   Content: lazy(() => import('./posts/hello-world')),
  // },
  {
    id: 1,
    title: 'The Mandelbrot Fractal',
    description: 'A facinating and beautiful formula',
    date: '2026-10-29',
    Content: lazy(() => import('./posts/the-mandelbrot-fractal')),
  }
];
