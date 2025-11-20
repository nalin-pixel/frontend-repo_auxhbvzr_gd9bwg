import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-10">
        <div className="py-24">
          <div className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Tech Educator • Full‑Stack Developer • Storyteller
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Building playful, interactive learning experiences
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl">
            I blend code, design, and narrative to teach modern web development. From 3D interactions to backend fundamentals, I craft stories that stick.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:opacity-95 transition">See my work</a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Get in touch</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900" />
    </section>
  )
}
