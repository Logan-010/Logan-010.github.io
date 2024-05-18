# Portfolio page
Still in WIP.

# Built with
- Leptos
- Rust
- Tailwindcss

# Building 
If you want to build this yourself (I don't see why you would),
Be sure to have rust installed via `rustup` and `npm` (for tailwindcss).

Then run the following to build the app
```sh
npm install -D tailwindcss
cargo install --locked trunk
rustup target add wasm32-unknown-unknown
trunk build --release
#This prevents weird 404 errors with the SPA
cp dist/index.html dist/404.html
```