use super::Nav;
use leptos::*;

#[component]
pub fn About() -> impl IntoView {
    view! {
        <div class="flex flex-col min-h-[100dvh]">
            <Nav/>

            <br/>
            <br/>
            <br/>

            <div class="container items-center justify-center gap-6 px-4 md:px-6 ">
                <div class="flex flex-col items-center space-y-4">
                    <div class="space-y-1 text-center">
                        <h1 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            {"Logan Briesemeister"}
                        </h1>
                        <h3 class="text-2xl font-bold tracking-tighter md:text-3xl/tight">
                            {"(Logan-010, seedse, etc.)"}
                        </h3>

                        <p class="text-gray-500 dark:text-gray-400">
                            {"Backend & frontend developer"}
                        </p>
                    </div>
                    <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        {r#"I'm currently a 15 year old high school student with a passion for computers. I love being able to code up whatever is possible, and learning as a whole. I'm well familiar with the Rust and Golang programming languages. Along with C, Python, & OCaml as runner-ups."#}
                    </p>
                </div>
            </div>
        </div>
    }
}
