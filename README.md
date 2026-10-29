# Portfolio

This is a professional (ish) portfolio for me & my work.

Built with Preact, Vite, Tailwindcss, & love.

## Blog

The navbar links to `/blog`; each post has a stable URL at `/blob/{n}`.
Add entries to `src/posts.tsx` with a unique numeric `id`, `title`,
`description`, and a `Content` component containing your post's JSX.
Keep entries oldest first (the listing displays them in reverse order), and
don't change published IDs. Replace the included starter post with your writing.
Use root-relative URLs for local images and links, such as `/projects/heft.jpg`.

`npm run build` also generates the GitHub Pages `404.html` fallback so direct
links and refreshes on nested routes load the app. The deployment workflow
builds the site before publishing.

# License

This project itself is licensed under the MIT license, however my own assets,
those under `./public`, are copyrighted and my own intellectual property.
