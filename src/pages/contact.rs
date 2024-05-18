use super::Nav;
use leptos::*;

#[component]
pub fn Contact() -> impl IntoView {
    view! {
        <div class="flex flex-col min-h-[100dvh]">
            <Nav/>

            <br/>
            <br/>
            <br/>

            <div class="container items-center justify-center gap-6 px-4 md:px-6 ">
                <div class="flex flex-col items-center space-y-4">
                    <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        {r#"I currently have NO BUISNESS EMAIL! And I don't feel like leaking my personal one. If you wish to contact me, please do so via the Linkedin profile linked below."#}

                    </p>
                    <h3>
                        <a
                            class="hover:underline"
                            target="_blank"
                            href="https://www.linkedin.com/in/logan-briesemeister-a57b842aa"
                        >
                            {"Linkedin"}
                        </a>
                    </h3>
                </div>
            </div>

        </div>
    }
}
