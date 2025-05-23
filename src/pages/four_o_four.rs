use leptos::prelude::*;

#[component]
pub fn Error404() -> impl IntoView {
    view! {
        <div class="flex flex-col min-h-[100dvh]">
            <section class="w-full py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20">
                <div class="text-center space-y-4">
                    <h1 class="text-gray-100 py-5 text-5xl font-bold tracking-tighter">404</h1>
                    <p class="text-gray-500">{"Oops! Page not found."}</p>
                    <a
                        class="border-gray-800 border-gray-800 bg-gray-950 hover:bg-gray-900 hover:text-white focus-visible:ring-gray-300 hover:underline inline-flex items-center rounded-md border border-gray-200 px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
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
    }
}
