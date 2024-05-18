use leptos::*;

pub mod about;
pub mod contact;
pub mod four_o_four;
pub mod home;
pub mod portfolio;

#[component]
pub fn Nav() -> impl IntoView {
    view! {
        <header class="w-full fixed bg-black px-4 lg:px-6 h-14 flex items-center justify-between">
            <a class="flex items-center" href="./" rel="ugc">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        stroke-width="4"
                        fill="none"
                    ></circle>
                </svg>
                <span class="sr-only">{"Logan Briesemeister (Logan-010)"}</span>
            </a>
            <nav class=" lg:flex gap-4 sm:gap-6">
                <a
                    class="text-sm font-medium hover:underline underline-offset-4"
                    href="./"
                    rel="ugc"
                >
                    {" Home 🏠 "}
                </a>
                <a
                    class="text-sm font-medium hover:underline underline-offset-4"
                    href="./portfolio"
                    rel="ugc"
                >
                    {" Portfolio 📕 "}
                </a>
                <a
                    class="text-sm font-medium hover:underline underline-offset-4"
                    href="./about"
                    rel="ugc"
                >
                    {" About ℹ️  "}
                </a>
                <a
                    class="text-sm font-medium hover:underline underline-offset-4"
                    href="./contact"
                    rel="ugc"
                >
                    {" Contact 📖 "}
                </a>
            </nav>
        </header>
    }
}
