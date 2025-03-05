mod pages;

use leptos::prelude::*;
use leptos_router::{components::*, path};

fn main() {
    mount_to_body(App);
}

#[component]
fn App() -> impl IntoView {
    view! {
        <div id="root">
            <Router>
                <pages::Nav/>
                <main>
                    <Routes fallback=pages::four_o_four::Error404>
                        <Route path=path!("/") view=pages::home::Home/>
                        <Route path=path!("/portfolio") view=pages::portfolio::Portfolio/>
                        <Route path=path!("/about") view=pages::about::About/>
                        <Route path=path!("/contact") view=pages::contact::Contact/>
                    </Routes>
                </main>
            </Router>
        </div>
    }
}
