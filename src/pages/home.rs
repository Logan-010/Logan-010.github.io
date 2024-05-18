use super::Nav;
use leptos::*;

#[component]
pub fn Home() -> impl IntoView {
    view! {
        <div class="flex flex-col min-h-[100dvh]">
            <Nav/>

            <br/>
            <br/>
            <br/>

            <main class="flex-1">
                <section class="w-full py-12 md:py-24 lg:py-32 xl:py-40">
                    <div class="container px-4 md:px-6 grid gap-6 md:gap-10 lg:grid-cols-2 items-center">
                        <div class="space-y-4 md:space-y-6">
                            <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                {"Logan Briesemeister"}
                            </h1>
                            <h2 class="text-2xl font-semibold sm:text-3xl">
                                {"Backend & frontend developer"}
                            </h2>
                            <p class="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                                {r#"I'm a student at LHS who's excited to learn new things. I love working on new projects."#}
                            </p>
                            <div class="flex gap-4">
                                <a
                                    class="bg-[#262626] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
                                    href="https://github.com/Logan-010"
                                    target="_blank"
                                >
                                    {"View my github"}
                                </a>
                                <a
                                    class="bg-[#262626] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2"
                                    href="https://github.com/Logan-010/Logan-010.github.io"
                                    target="_blank"
                                >
                                    {"View site source"}
                                </a>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <img
                                src="./seedse.jpg"
                                width="400"
                                height="400"
                                alt="Logan Briesemeister"
                                class="rounded-full w-64 h-64 object-cover"
                                style="aspect-ratio: 400 / 400; object-fit: cover;"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    }
}
