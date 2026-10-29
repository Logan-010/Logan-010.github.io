import { useRoute } from 'preact-iso';
import NotFound from './NotFound';
import { posts } from './posts';

export default function BlogPost() {
  const { params } = useRoute();
  const post = posts.find((entry) => String(entry.id) === params.n);

  if (!post) return <NotFound />;

  const { Content } = post;

  return (
    <div class="page-shell page-section max-w-4xl">
      <a class="inline-block text-sm font-medium text-muted underline underline-offset-4 hover:text-ink" href="/blog">
        <span aria-hidden="true">← </span>Back to blog
      </a>
      <article class="mt-8 sm:mt-10">
        <header class="mb-8 sm:mb-10">
          <h1 class="page-title">{post.title}</h1>
          <p class="body-copy mt-5">{post.description}</p>
        </header>
        <div class="blog-content body-copy">
          <Content />
        </div>
      </article>
    </div>
  );
}
