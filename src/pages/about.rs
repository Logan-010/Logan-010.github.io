use super::Nav;
use leptos::*;
use chrono::{NaiveDate, Utc};

fn years_since(start_date: NaiveDate) -> i64 {
    let today = Utc::now().date_naive();
    let duration = today.signed_duration_since(start_date);
    duration.num_days() / 365
}

#[component]
pub fn About() -> impl IntoView {
    let age = years_since(NaiveDate::from_ymd_opt(2008, 6, 16).unwrap());

    view! {
        <div class="flex flex-col min-h-[100dvh]">
            <Nav/>

            <section class="w-full py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 flex flex-col items-center">
                <div class="container items-center justify-center gap-6 px-4 md:px-6">
                    <div class="flex flex-col items-center space-y-4">
                        <div class="space-y-1 text-center">
                            <h1 class="text-gray-100 text-3xl font-bold tracking-tighter md:text-4xl/tight py-2">
                                {"Logan Briesemeister"}
                            </h1>

                            <p class="text-gray-500 dark:text-gray-400">
                                {"Backend & frontend developer"}
                            </p>
                        </div>
                        <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            {format!(
                                "I\'m currently a {} year old high school student with a passion for computers. I love being able to code up whatever is possible, and learning as a whole. I\'m well familiar with the Rust and Golang programming languages. Along with Zig, Python, OCaml, and C as runner-ups.",
                                age,
                            )}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    }
}
