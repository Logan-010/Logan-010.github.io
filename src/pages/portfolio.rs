use super::Nav;
use leptos::*;

#[component]
fn Project(
    name: &'static str,
    image: &'static str,
    description: &'static str,
    link: &'static str,
) -> impl IntoView {
    view! {
        <a target="_blank" href=link>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <div class="flex justify-center items-center">
                    <img
                        class="h-100 "
                        src=image
                        width="300"
                        alt="A Project"
                        class="rounded-xl object-cover"
                        style="object-fit: fit;"
                        loading="lazy"
                    />
                </div>
                <div class="p-4">
                    <h3 class="hover:underline text-lg font-semibold">{name}</h3>
                    <p class="text-gray-500 dark:text-gray-400">{description}</p>
                </div>
            </div>
        </a>
    }
}

#[component]
pub fn Portfolio() -> impl IntoView {
    view! {
        <div class="flex flex-col min-h-[100dvh]">
            <Nav/>

            <br/>
            <br/>
            <br/>

            <p class="text-gray-500 text-md md:text-xl dark:text-gray-400 p-4">
                {"Listed here are some projects I am (more) proud of. The rest can be found on my github."}
            </p>

            <div class="container px-4 md:px-6">
                <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    // Add entry for every big project.
                    <Project
                        name="This site"
                        image="./projects/1.png"
                        description="A portfolio page"
                        link="https://github.com/Logan-010/Logan-010.github.io"
                    />
                    <Project
                        name="Liberated-chat"
                        image="./projects/2.png"
                        description="Simple & fast chatroom"
                        link="https://github.com/Logan-010/liberated-chat"
                    />
                    <Project
                        name="Mini.nz"
                        image="./projects/3.png"
                        description="Lightweight file upload service written in Go"
                        link="https://github.com/Logan-010/mini.nz"
                    />
                    <Project
                        name="Loccount"
                        image="./projects/4.png"
                        description="Simple utility to count total LOC in a project"
                        link="https://github.com/Logan-010/loccount"
                    />
                    <Project
                        name="Rusterv"
                        image="./projects/5.png"
                        description="A simple program to serve a directory over http."
                        link="https://github.com/Logan-010/rusterv"
                    />
                    <Project
                        name="Optimize"
                        image="./projects/6.png"
                        description="Adds the max optimization for a rust project by appending to Cargo.toml"
                        link="https://github.com/Logan-010/optimize"
                    />
                </div>
            </div>
        </div>
    }
}
