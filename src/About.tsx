function yearsSince(start: Date): number {
  const today = new Date();
  const diff = today.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
}

export default function About() {
  // June 16, 2008.
  const age = yearsSince(new Date(2008, 5, 16));

  return (
    <div class="page-shell page-section flex max-w-4xl flex-col gap-12 sm:gap-16">
      {/* About Me */}
      <section class="w-full">
        <div class="w-full">
          <div class="space-y-6">
            <div>
              <h1 class="page-title">
                {`About Me`}
              </h1>
            </div>

            <p class="body-copy">
              {`I'm currently a ${age} year old student with a passion for computers. I love details. I always have and always will. Specifically, I love the small and intricate details that have a larger impact than they seem. Coding lets me express my love for details by changing little piece by little piece. I'm well versed in a variety of programming languages (Rust, Zig, Go, Js, Html, C, etc) and frameworks (axum, tokio, tauri, preact, libp2p, etc). Additionally, I'm a huge extrovert and love working with people.`}
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section class="w-full border-t border-line pt-10 sm:pt-12">
        <div class="w-full">
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-semibold tracking-tight sm:text-3xl">
                {`Work Experience`}
              </h2>
            </div>

            <div class="body-copy space-y-8">

              {/* Grant's farm */}
              <div class="experience">
                <h3 class="text-lg leading-snug font-semibold text-ink sm:text-xl">
                  Brat Haus Grill Cook - Grant's Farm
                </h3>
                <p class="text-sm font-medium text-muted">
                  2023 — 2025
                </p>
                <p>
                  Work with a team under pressure to provide quality food to thousands of customers in a timely manner.
                </p>
              </div>

              {/* Zumiez */}
              <div class="experience">
                <h3 class="text-lg leading-snug font-semibold text-ink sm:text-xl">
                  Sales Associate - Zumiez
                </h3>
                <p class="text-sm font-medium text-muted">
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
