import type { ComponentType } from 'preact';

export interface BlogEntry {
  id: number;
  title: string;
  description: string;
  Content: ComponentType;
}

export const posts: BlogEntry[] = [
  // Hey future me--a blog post entry will look like this!
  // {
  //   id: 1,
  //   title: 'Hello, world!',
  //   description: 'Welcome to the blog.',
  //   Content: () => (
  //     <p>Welcome to my blog!</p>
  //   ),
  // },
];
