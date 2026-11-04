export interface BlogEntry {
  id: number;
  title: string;
  description: string;
  date: string;
  html: string;
}

export const posts = Object.values(import.meta.glob<BlogEntry>('./posts/*.md', {
  eager: true,
  import: 'default',
})).sort((a, b) => a.id - b.id);

if (new Set(posts.map((post) => post.id)).size !== posts.length) {
  throw new Error('Duplicate blog post IDs');
}
