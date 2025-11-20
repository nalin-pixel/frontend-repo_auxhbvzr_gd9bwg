import { motion } from 'framer-motion'
import { GraduationCap, Users, Sparkles } from 'lucide-react'

const items = [
  {
    title: 'Live Workshops',
    desc: 'High‑energy sessions where we build something fun together and learn by doing.',
    icon: Users,
  },
  {
    title: 'Curriculum Design',
    desc: 'Designing learning arcs that feel like stories, not lectures. From intro to mastery.',
    icon: GraduationCap,
  },
  {
    title: 'Creative Tech Labs',
    desc: 'Experiments in 3D, realtime, and AI to explore what teaching can feel like.',
    icon: Sparkles,
  },
]

export default function Teaching() {
  return (
    <section id="teaching" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Teaching</h2>
        <p className="text-slate-300 mt-3 max-w-2xl">How I teach and where I can help your team level up.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg hover:bg-white/10 transition"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 grid place-items-center text-white shadow-md shadow-indigo-500/25">
                <it.icon size={22} />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{it.title}</h3>
              <p className="text-slate-300 mt-3 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
