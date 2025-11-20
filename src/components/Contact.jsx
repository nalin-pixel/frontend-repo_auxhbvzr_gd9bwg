import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Failed to send')
      const data = await res.json()
      setStatus({ state: 'success', message: data.message || 'Sent!' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let's build something</h2>
            <p className="text-slate-300 mt-3 max-w-2xl">Have a project, workshop, or collaboration in mind? Tell me a bit about it and I'll get back to you.</p>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input name="name" required className="w-full rounded-lg bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" name="email" required className="w-full rounded-lg bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300 mb-1">Subject</label>
              <input name="subject" required className="w-full rounded-lg bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="What's this about?" />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea name="message" rows="5" required className="w-full rounded-lg bg-slate-900/60 border border-white/10 p-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Tell me more..." />
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button disabled={status.state==='loading'} className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:opacity-95 transition disabled:opacity-60">
                {status.state === 'loading' ? 'Sending...' : 'Send message'}
              </button>
              {status.message && (
                <p className={`text-sm ${status.state==='error' ? 'text-rose-300' : 'text-sky-300'}`}>{status.message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
