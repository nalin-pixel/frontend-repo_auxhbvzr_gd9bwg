import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-slate-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 ring-1 ring-white/20 shadow-lg"></div>
          <span className="text-white font-semibold tracking-tight group-hover:opacity-90">Avery Blaze</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#content">Content</NavLink>
          <NavLink href="#teaching">Teaching</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Github size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Linkedin size={20} /></a>
            <a href="#contact" className="text-slate-300 hover:text-white"><Mail size={20} /></a>
          </div>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-4">
            <NavLink href="#work" onClick={close}>Work</NavLink>
            <NavLink href="#content" onClick={close}>Content</NavLink>
            <NavLink href="#teaching" onClick={close}>Teaching</NavLink>
            <NavLink href="#contact" onClick={close}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
