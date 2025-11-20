import { motion } from 'framer-motion'
import { Play, Youtube, Mic2 } from 'lucide-react'

const items = [
  {
    title: 'YouTube Channel',
    desc: 'Weekly videos on full‑stack web dev and creative coding, told through cinematic micro‑stories.',
    cta: 'Watch on YouTube',
    icon: Youtube,
    href: '#',
  },
  {
    title: 'Podcast',
    desc: 'Conversations with devs and designers about teaching through play, constraints, and narrative.',
    cta: 'Listen to episodes',
    icon: Mic2,
    href: '#',
  },
  {
    title: 'Courses',
    desc: 'Project‑based courses that use 3D, APIs, and real‑world constraints to make concepts stick.',
    cta: 'Explore courses',
    icon: Play,
    href: '#',
  },
]

export default function Content() {
  return (
    <section id="content" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Content</h2>
        <p className="text-slate-300 mt-3 max-w-2xl">Education that entertains. Content designed to teach by sparking curiosity and delight.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.a
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              href={it.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition shadow-lg"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 grid place-items-center text-white shadow-md shadow-indigo-500/25">
                <it.icon size={22} />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{it.title}</h3>
              <p className="text-slate-300 mt-3 text-sm">{it.desc}</p>
              <span className="inline-flex items-center gap-2 text-sky-300 mt-4">
                {it.cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
