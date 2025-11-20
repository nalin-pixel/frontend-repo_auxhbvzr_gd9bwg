import { motion } from 'framer-motion'
import { Code, Film, PenTool } from 'lucide-react'

const items = [
  {
    title: 'Interactive Course Platform',
    tag: 'Full‑Stack • React • FastAPI • MongoDB',
    desc: 'A platform where lessons are interactive narratives. Features live coding, branching paths, and progress tracking.',
    icon: Code,
  },
  {
    title: 'Short‑form Tech Stories',
    tag: 'Content • Editing • Story',
    desc: 'Bite‑sized videos that teach one concept through a memorable story arc and motion design.',
    icon: Film,
  },
  {
    title: 'Workshop Series',
    tag: 'Education • Community',
    desc: 'Hands‑on workshops turning complex ideas into playful experiments people can feel and build.',
    icon: PenTool,
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
        <p className="text-slate-300 mt-3 max-w-2xl">A mix of dev projects and storytelling formats designed to make learning irresistible.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg hover:shadow-xl hover:bg-white/10 transition"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 grid place-items-center text-white shadow-md shadow-indigo-500/25">
                <it.icon size={22} />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{it.title}</h3>
              <p className="text-xs text-slate-300/80 mt-1">{it.tag}</p>
              <p className="text-slate-300 mt-3 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
