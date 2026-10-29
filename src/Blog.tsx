import { posts } from './posts';

export default function Blog() {
  return (
    <div class="page-shell page-section flex max-w-4xl flex-col gap-10 sm:gap-12">
      <h1 class="page-title">Blog</h1>

      {posts.length > 0 ? (
        <ul class="space-y-5">
          {[...posts].reverse().map((post) => (
            <li key={post.id}>
              <a class="project-card group gap-3 p-6 sm:p-8" href={`/blog/${post.id}`}>
                <h2 class="text-xl font-semibold tracking-tight group-hover:underline underline-offset-4">
                  {post.title}
                </h2>
                <time class="text-sm text-muted" dateTime={post.date}>
                  {new Date(`${post.date}T00:00:00Z`).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timeZone: 'UTC',
                  })}
                </time>
                <p class="body-copy">{post.description}</p>
                <span class="text-sm font-medium">Read post <span aria-hidden="true">→</span></span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p class="body-copy">No posts yet. Check back soon!</p>
      )}
    </div>
  );
}
