export default function TheMandelbrotFractal() {
  return <>
    <img src="/blog/the-mandelbrot-fractal/brot-1.jpg" loading="lazy"/>
    <p>The mandelbrot fractal is an extremely interesting little mathmatical wonder. It's a simple formula, defined as:</p>
    <p>f<sub>c</sub>(z)=z<sup>2</sup>+c</p>
    <p>Okay, but what does this actually mean in simple words us humans can understand? Okay--so c is a complex number (re + im). That's any
      number, including imaginary numbers. Now, z is part of the function's <i>iteration</i>. So the function is pretty much a for loop. Here's
      some pseudocode to demonstrate:</p>
    <pre class="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
      <code>{`def is_in_mandelbrot_set(c):
    z = 0
    for 0..infinity:
        z = pow(z, 2) + c

        if (z == infinity):
            return False
        else:
            return True`}</code>
    </pre>
    <p>If you've noticed, the 'function' mentions a 'set'. This is what we know as the mandelbrot fractal. The mandelbrot is a set of all complex
      numbers that don't escape to infinity when passed through this function.</p>
    <p>Okay... so the mandelbrot set is just a bunch of numbers that don't escape to infinity... but how do we get these incredible visualizations?
      Well, these renderings are based off of the real and complex portions of all the numbers in the set.</p>
    <p>Genearlly, renderings derive the (x, y) for image cordinates are derived from the (re, im) portions of each complex number in the set.</p>
    <p>But then if we just plot the image we get a really generic black and white photo... what gives?</p>
    <img src="/blog/the-mandelbrot-fractal/brot-2.jpg" loading="lazy"/>
    <p>Well yeah, but this is all still theoretical. After all our function cannot possibly actually iterate to infinity.</p>
    <p>In reality we escape the function after z escapes some arbitrary 'bailout' number we (the programmer) get to decide. Then we can use the
      number of iterations it took to sample colors from a colormap.</p>
    <p>This spices up rendering quite a bit, and also makes it actually possible to render since we're not going all the way to inifnity!</p>
    <img src="/blog/the-mandelbrot-fractal/brot-3.jpg" loading="lazy"/>
    <p>Great... now we have colorful renderings of the mandelbrot fractal! It's worth noting that any value outside the range of Re [-2.5, 1] and Im [-1, 1]
      all escape to infinity, so for all the visualizations I've shown, the numbers all lie within this range</p>
    <p>Now it gets really intersting. We can 'zoom in' on the fractal on any given point where there's 'activity' and start to see some truly incredible patterns
      emmerge.</p>
    <p>Calculating 'activity' and 'zoom' is outside the scope of this blog post--but still worth looking into.</p>
    <p>All of my visualizations are made with my own rendering program, <a href="https://github.com/Logan-010/mbrot" target="_blank">mbrot</a>. Go check
      it out! The code is all open source so feel free to inspect the actual real rendering algorithom</p>
    <p>Anyway, as a send off, here's some cool fractals.</p>
    <img src="/blog/the-mandelbrot-fractal/brot-4.jpg" loading="lazy"/>
    <img src="/blog/the-mandelbrot-fractal/brot-5.jpg" loading="lazy"/>
    <img src="/blog/the-mandelbrot-fractal/brot-6.jpg" loading="lazy"/>
  </>
}
