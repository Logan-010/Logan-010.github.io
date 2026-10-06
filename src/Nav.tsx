import { useLocation } from 'preact-iso';

export default function Nav() {
    const { path } = useLocation();

    return (
        <header class="sticky top-0 z-20 border-b border-line bg-canvas/95 backdrop-blur-md">
            <nav class="page-shell flex items-center justify-center gap-1 py-3 sm:justify-end sm:gap-2">
                <a
                    class="nav-link"
                    aria-current={path === '/' ? 'page' : undefined}
                    href="./"
                    rel="ugc"
                >
                    {" Home \u{1F3E0} "}
                </a>
                <a
                    class="nav-link"
                    aria-current={path === '/portfolio' ? 'page' : undefined}
                    href="./portfolio"
                    rel="ugc"
                >
                    {" Portfolio \u{1F4BB} "}
                </a>
                <a
                    class="nav-link"
                    aria-current={path === '/about' ? 'page' : undefined}
                    href="./about"
                    rel="ugc"
                >
                    {" About \u{2728} "}
                </a>
                <a
                    class="nav-link"
                    aria-current={path === '/contact' ? 'page' : undefined}
                    href="./contact"
                    rel="ugc"
                >
                    {" Contact \u{1F4D6} "}
                </a>
            </nav>
        </header>
    )
}
