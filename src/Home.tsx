export default function Home() {
    return (
        <div class="flex flex-col min-h-[100dvh]">
            <main class="flex-1">
                <section class="w-full flex justify-center h-auto lg:h-screen">
                    <div class="container mx-auto px-4 md:px-6 grid gap-10 md:gap-12 lg:grid-cols-2 items-center justify-center py-16 lg:py-0">

                        <div class="flex justify-center order-1 lg:order-2">
                            <img
                                src="./logan.jpg"
                                width="400"
                                height="400"
                                alt="Logan Briesemeister"
                                class="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover"
                                style="aspect-ratio: 1 / 1; object-fit: cover;"
                            />
                        </div>

                        <div class="space-y-4 md:space-y-6 order-2 lg:order-1 text-center lg:text-left">
                            <h1 class="text-gray-100 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                {"Logan Briesemeister"}
                            </h1>
                            <h2 class="text-2xl font-semibold sm:text-3xl">
                                {"\"Jack of All Trades\" Developer"}
                            </h2>
                            <h3 class="text-gray-200 text-lg sm:text-xl">
                                {"Backend, Frontend, Microcontroller, & More"}
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
                                {"I'm Logan, a graduate from LHS and freshman at Mizzou who greatly enjoys computers and programming, along with playing bass, guitar, skateboarding, music (bit of a metalhead), and cooking."}
                            </p>

                            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a
                                    class="bg-gray-950 hover:bg-gray-900 hover:text-white inline-flex items-center rounded-md border border-gray-800 px-4 py-2 text-sm font-medium shadow-sm transition-colors"
                                    href="https://github.com/Logan-010"
                                    target="_blank"
                                >
                                    {"View my github"}
                                </a>
                                <a
                                    class="bg-gray-950 hover:bg-gray-900 hover:text-white inline-flex items-center rounded-md border border-gray-800 px-4 py-2 text-sm font-medium shadow-sm transition-colors"
                                    href="https://github.com/Logan-010/Logan-010.github.io"
                                    target="_blank"
                                >
                                    {"View site source"}
                                </a>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}
