use leptos::{component, mount_to_body, view, IntoView};

fn main() {
    mount_to_body(App);
}

#[component]
fn App() -> impl IntoView {
    view! { <h1>WIP Portfolio page</h1> }
}

