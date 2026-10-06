export default function Home() {
    return (
        <div class="flex flex-1 flex-col">
            <div class="flex flex-1 flex-col">
                <section class="page-shell page-section flex flex-1 items-center">
                    <div class="grid w-full items-center gap-10 sm:gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">

                        <div class="order-1 flex justify-center lg:order-2 lg:justify-end">
                            <img
                                src="./logan.jpg"
                                width="400"
                                height="400"
                                alt="Logan Briesemeister"
                                class="aspect-square h-48 w-48 rounded-full object-cover ring-1 ring-line ring-offset-8 ring-offset-canvas sm:h-64 sm:w-64 lg:h-auto lg:w-full lg:max-w-80"
                            />
                        </div>

                        <div class="order-2 space-y-5 text-center lg:order-1 lg:text-left">
                            <h1 class="text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl xl:text-6xl">
                                {"Logan Briesemeister"}
                            </h1>
                            <h2 class="text-xl leading-snug font-medium text-balance sm:text-2xl">
                                {"\"Jack of All Trades\" Developer"}
                            </h2>
                            <h3 class="text-base leading-relaxed text-muted sm:text-lg">
                                {"Backend, Frontend, Microcontroller, & More"}
                            </h3>
                            <p class="body-copy mx-auto max-w-xl lg:mx-0">
                                {"I'm Logan, a graduate from LHS and freshman at Mizzou who greatly enjoys computers and programming, along with playing bass, guitar, skateboarding, music (bit of a metalhead), and cooking."}
                            </p>

                            <div class="flex flex-col justify-center gap-3 pt-3 sm:flex-row lg:justify-start">
                                <a
                                    class="button button-primary"
                                    href="https://github.com/Logan-010"
                                    target="_blank"
                                >
                                    {"View my github"}
                                </a>
                                <a
                                    class="button"
                                    href="https://github.com/Logan-010/Logan-010.github.io"
                                    target="_blank"
                                >
                                    {"View site source"}
                                </a>
                                <a
                                    class="button"
                                    href="/Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {"View Resume"}
                                </a>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}
