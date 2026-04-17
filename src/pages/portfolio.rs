use leptos::prelude::*;

#[component]
fn Project(
    name: &'static str,
    image: Option<&'static str>,
    description: &'static str,
    link: &'static str,
) -> impl IntoView {
    view! {
        <a target="_blank" href=link>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                {
                    match image {
                        Some(url) => view!{
                            <div class="flex justify-center items-center">
                                <img
                                    src=url
                                    height="300"
                                    alt="A Project"
                                    class="h-100 rounded-xl object-cover"
                                    style="object-fit: fit;"
                                    loading="lazy"
                                />
                            </div>
                        }.into_any(),
                        None => view!{}.into_any()
                    }
                }
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
            <section class="w-full py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 flex flex-col items-center">
                <h1 class="text-gray-100 text-3xl font-bold tracking-tighter md:text-4xl/tight py-2 space-y-1 text-center">
                    {"Portfolio"}
                </h1>

                <p class="text-gray-500 text-md md:text-xl dark:text-gray-400 px-9 py-3">
                    {"Listed here are some projects I am (more) proud of. The rest can be found on my github."}
                </p>

                <div class="container px-4 md:px-6">
                    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        // Add entry for every big project.
                        <Project
                            name="This site"
                            image=Some("./projects/portfolio.png")
                            description="A portfolio page"
                            link="https://github.com/Logan-010/Logan-010.github.io"
                        />
                        <Project
                            name="Mini.nz"
                            image=Some("./projects/mini-nz.png")
                            description="Lightweight file upload service written in Go"
                            link="https://github.com/Logan-010/mini.nz"
                        />
                        <Project
                            name="(Re)cycle"
                            image=Some("./projects/re-cycle.png")
                            description="A simple 2d game about recycling built in bevy"
                            link="https://github.com/Logan-010/re-cycle"
                        />
                        <Project
                            name="mbrot"
                            image=Some("./projects/mbrot.png")
                            description="Simple to use CLI mandelbrot fractal generator."
                            link="https://github.com/Logan-010/mbrot"
                        />
                        <Project
                            name="gshare"
                            image=None
                            description="P2P file share across the globe"
                            link="https://github.com/Logan-010/gshare"
                        />
                        <Project
                            name="Shaman"
                            image=Some("./projects/shaman.png")
                            description="P2P on/offline password manager"
                            link="https://github.com/Logan-010/shaman"
                        />
                        <Project
                            name="zcrpt"
                            image=None
                            description="Fast encryption in your terminal"
                            link="https://github.com/Logan-010/zcrpt"
                        />
                        <Project
                            name="diary"
                            image=None
                            description="A private, encrypted diary for your thoughts in your command line"
                            link="https://github.com/Logan-010/diary"
                        />
                        <Project
                            name="Glerp"
                            image=Some("./projects/glerp.png")
                            description="Dead simple audio recorder"
                            link="https://github.com/Logan-010/glerp"
                        />
                    </div>
                </div>
            </section>
        </div>
    }
}
