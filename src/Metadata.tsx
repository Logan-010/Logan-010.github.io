import { useEffect } from 'preact/hooks';
import { useLocation } from 'preact-iso';
import { posts } from './posts';

const origin = 'https://Logan-010.github.io';

const pages = {
  '/': {
    title: 'Logan Briesemeister',
    description: 'Explore my developer portfolio',
  },
  '/portfolio': {
    title: 'Portfolio | Logan Briesemeister',
    description: 'See various projects and apps I’ve created',
  },
  '/blog': {
    title: 'Blog | Logan Briesemeister',
    description: 'Read tech/software/computing blog posts by Logan Briesemeister.',
  },
  '/about': {
    title: 'About | Logan Briesemeister',
    description: 'Learn about my background, skills, and work experience.',
  },
  '/contact': {
    title: 'Contact | Logan Briesemeister',
    description: 'Connect with me on social platforms.',
  },
};

export function getPageMetadata(path: string) {
  const pathname = path.replace(/\/+$/, '') || '/';
  const page = pages[pathname as keyof typeof pages];
  const post = posts.find((entry) => pathname === `/blog/${entry.id}`);

  return {
    title: page?.title ?? (post ? `${post.title} | Logan Briesemeister` : 'Page Not Found | Logan Briesemeister'),
    description: page?.description ?? post?.description ?? 'The requested page could not be found.',
    canonical: page || post ? `${origin}${pathname}` : null,
    type: post ? 'article' : 'website',
    robots: page || post ? 'index, follow' : 'noindex, follow',
  };
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = content;
}

export default function Metadata() {
  const { path } = useLocation();

  useEffect(() => {
    const metadata = getPageMetadata(path);
    document.title = metadata.title;
    setMeta('name', 'description', metadata.description);
    setMeta('name', 'robots', metadata.robots);
    setMeta('property', 'og:title', metadata.title);
    setMeta('property', 'og:description', metadata.description);
    setMeta('property', 'og:type', metadata.type);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (metadata.canonical) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.append(canonical);
      }
      canonical.href = metadata.canonical;
      setMeta('property', 'og:url', metadata.canonical);
    } else {
      canonical?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }
  }, [path]);

  return null;
}
