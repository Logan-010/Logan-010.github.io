function yearsSince(start: Date): number {
  const today = new Date();
  const diff = today.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
}

export default function About() {
  // June 16, 2008.
  const age = yearsSince(new Date(2008, 5, 16));

  return (
    <div class="flex flex-col min-h-[100dvh]">
      {/* About Me */}
      <section class="w-full py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 flex flex-col items-center">
        <div class="container items-center justify-center gap-6 px-4 md:px-6">
          <div class="flex flex-col items-center space-y-4">
            <div class="space-y-1 text-center">
              <h1 class="text-gray-100 text-3xl font-bold tracking-tighter md:text-4xl/tight py-2">
                {`About Me`}
              </h1>
            </div>

            <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {`I'm currently a ${age} year old student with a passion for computers. I love details. I always have and always will. Specifically, I love the small and intricate details that have a larger impact than they seem. Coding lets me express my love for details by changing little piece by little piece. I'm well versed in a variety of programming languages (Rust, Zig, Go, Js, Html, C, etc) and frameworks (axum, tokio, tauri, preact, libp2p, etc). Additionally, I'm a huge extrovert and love working with people.`}
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section class="w-full py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 flex flex-col items-center">
        <div class="container items-center justify-center gap-6 px-4 md:px-6">
          <div class="flex flex-col items-center space-y-4">
            <div class="space-y-1 text-center">
              <h1 class="text-gray-100 text-3xl font-bold tracking-tighter md:text-4xl/tight py-2">
                {`Work Experience`}
              </h1>
            </div>

            <div class="max-w-[600px] space-y-6 text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">

              {/* Grant's farm */}
              <div class="space-y-1">
                <h3 class="text-gray-300 text-xl font-semibold">
                  Brat Haus Grill Cook - Grant's Farm
                </h3>
                <p class="text-gray-400 text-sm">
                  2023 — 2025
                </p>
                <p>
                  Work with a team under pressure to provide quality food to thousands of customers in a timely manner.
                </p>
              </div>

              {/* Zumiez */}
              <div class="space-y-1">
                <h3 class="text-gray-300 text-xl font-semibold">
                  Sales Associate - Zumiez
                </h3>
                <p class="text-gray-400 text-sm">
                  2025 — Present
                </p>
                <p>
                  Competitive sales role intended to effectively market to customers and promote teamwork among coworkers.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
