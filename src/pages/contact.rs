use super::Nav;
use leptos::*;

#[component]
pub fn Contact() -> impl IntoView {
    view! {
        <div class="flex flex-col min-h-[100dvh]">
            <Nav/>

            <section class="w-full py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 flex flex-col items-center">
                <h1 class="text-gray-100 text-3xl font-bold tracking-tighter md:text-4xl/tight py-2 space-y-1 text-center">
                    {"Contact"}
                </h1>

                <div class="container items-center justify-center gap-6 px-4 md:px-6">
                    <div class="flex flex-col items-center space-y-4">
                        <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            {r#"I currently have NO BUISNESS EMAIL! And I don't feel like leaking my personal one. If you wish to contact me, please do so via the Linkedin profile linked below."#}

                        </p>
                        <h3>
                            <a
                                class="border-gray-800 border-gray-800 bg-gray-950 hover:bg-gray-900 hover:text-white focus-visible:ring-gray-300 hover:underline inline-flex items-center rounded-md border border-gray-200 px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                                target="_blank"
                                href="https://www.linkedin.com/in/logan-briesemeister-a57b842aa"
                            >
                                {"Linkedin"}
                            </a>
                        </h3>
                    </div>
                </div>
            </section>

        </div>
    }
}
