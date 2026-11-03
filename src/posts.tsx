import type { ComponentType } from 'preact';
import { lazy } from 'preact-iso';
import postMetadata from './posts.json';

export interface BlogEntry {
  id: number;
  title: string;
  description: string;
  date: string;
  Content: ComponentType;
}

export const posts: BlogEntry[] = postMetadata.map((post) => ({
  ...post,
  Content: lazy(() => import(`./posts/${post.slug}.tsx`)),
}));
