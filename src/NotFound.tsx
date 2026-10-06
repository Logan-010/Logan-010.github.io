export default function NotFound() {
    return (
        <div class="page-shell page-section flex flex-1 items-center justify-center">
            <section class="w-full">
                <div class="space-y-6 text-center">
                    <h1 class="text-6xl font-semibold tracking-tight sm:text-8xl">404</h1>
                    <p class="body-copy">{"Oops! Page not found."}</p>
                    <a
                        class="button"
                        href="./"
                    >
                        {"Go home"}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="w-4 h-4 ml-2"
                        >
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    )
}
