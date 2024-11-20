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
            <br/>
            <nav class=" lg:flex gap-4 sm:gap-6">
                <a
                    class="text-sm font-medium hover:underline underline-offset-4"
                    href="./"
                    rel="ugc"
                >
                    {" Home \u{1F3E0} "}
                </a>
                <a
                    class="text-sm font-medium hover:underline underline-offset-4"
                    href="./portfolio"
                    rel="ugc"
                >
                    {" Portfolio \u{1F4BB} "}
                </a>
                <a
                    class="text-sm font-medium hover:underline underline-offset-4"
                    href="./about"
                    rel="ugc"
                >
                    {" About \u{2728} "}
                </a>
                <a
                    class="text-sm font-medium hover:underline underline-offset-4"
                    href="./contact"
                    rel="ugc"
                >
                    {" Contact \u{1F4D6} "}
                </a>
            </nav>
        </header>
    }
}
