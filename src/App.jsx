import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Content from './components/Content'
import Teaching from './components/Teaching'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Content />
        <Teaching />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>© {new Date().getFullYear()} Avery Blaze — Innovative storytelling in tech</p>
          <div className="text-sm">Built with love, motion, and lots of curiosity.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
