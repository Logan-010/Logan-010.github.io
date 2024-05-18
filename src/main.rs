mod pages;

use leptos::*;
use leptos_router::*;

use pages::about::About;
use pages::contact::Contact;
use pages::four_o_four::Error404;
use pages::home::Home;
use pages::portfolio::Portfolio;

fn main() {
    mount_to_body(App);
}

#[component]
fn App() -> impl IntoView {
    view! {
        <Router>
            <Routes>
                <Route path="/" view=Home/>
                <Route path="/portfolio" view=Portfolio/>
                <Route path="/about" view=About/>
                <Route path="/contact" view=Contact/>
                <Route path="/*any" view=Error404/>
            </Routes>
        </Router>
    }
}
