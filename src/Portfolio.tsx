function Project({
  name,
  image,
  description,
  link,
}) {
  return (
    <a class="project-card group" target="_blank" href={link}>
        {image && (
          <div class="project-image">
            <img
              src={image}
              height="300"
              alt="A Project"
              class="h-full w-full rounded-lg object-contain"
              loading="lazy"
            />
          </div>
        )}

        <div class="flex flex-1 flex-col gap-2 p-6">
          <h3 class="text-lg font-semibold tracking-tight group-hover:underline underline-offset-4">{name}</h3>
          <p class="text-sm leading-6 text-muted">{description}</p>
        </div>
    </a>
  )
}

export default function Portfolio() {
  return (
    <div class="page-shell page-section">
      <section class="w-full">
        <h1 class="page-title">
          {"Portfolio"}
        </h1>

        <p class="body-copy mt-5 max-w-2xl">
          {"Listed here are some projects I am (more) proud of. The rest can be found on my github."}
        </p>

        <div class="mt-10 sm:mt-12">
          <div class="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <Project
              name="This site"
              image="./projects/portfolio.png"
              description="A portfolio page"
              link="https://github.com/Logan-010/Logan-010.github.io"
            />
            <Project
              name="Mini.nz"
              image="./projects/mini-nz.png"
              description="Lightweight file upload service written in Go"
              link="https://github.com/Logan-010/mini.nz"
            />
            <Project
              name="(Re)cycle"
              image="./projects/re-cycle.png"
              description="A simple 2d game about recycling built in bevy"
              link="https://github.com/Logan-010/re-cycle"
            />
            <Project
              name="mbrot"
              image="./projects/mbrot.png"
              description="Simple to use CLI mandelbrot fractal generator."
              link="https://github.com/Logan-010/mbrot"
            />
            <Project
              name="gshare"
              image={null}
              description="P2P file share across the globe"
              link="https://github.com/Logan-010/gshare"
            />
            <Project
              name="Shaman"
              image="./projects/shaman.png"
              description="P2P on/offline password manager"
              link="https://github.com/Logan-010/shaman"
            />
            <Project
              name="zcrpt"
              image={null}
              description="Fast encryption in your terminal"
              link="https://github.com/Logan-010/zcrpt"
            />
            <Project
              name="diary"
              image={null}
              description="A private, encrypted diary for your thoughts in your command line"
              link="https://github.com/Logan-010/diary"
            />
            <Project
              name="Glerp"
              image="./projects/glerp.png"
              description="Dead simple audio recorder"
              link="https://github.com/Logan-010/glerp"
            />
            <Project
              name="ihnet2"
              image={null}
              description="Simple & secure CLI port forwarding to any computer in the world."
              link="https://github.com/Logan-010/ihnet2"
            />
            <Project
              name="thetachat"
              image="./projects/thetachat.png"
              description="Secure decentralized chat protocol"
              link="https://github.com/Logan-010/thetachat"
            />
            <Project
              name="oaks"
              image={null}
              description="Secure LAN file sharing in OCaml"
              link="https://github.com/Logan-010/oaks"
            />
            <Project
              name="vobos"
              image="./projects/vobos.png"
              description="Smart and interactive desktop AI assistant"
              link="https://github.com/Logan-010/vobos"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
