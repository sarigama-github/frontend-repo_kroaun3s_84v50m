export default function CTA(){
  return (
    <section className="relative bg-black py-20" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(239,68,68,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-12 overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 blur-2xl" />
          <div className="relative grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Partner with Grid Tech</h3>
              <p className="mt-2 text-white/70">Tell us about your project and we’ll craft a premium solution tailored to your brand.</p>
            </div>
            <form className="grid gap-3">
              <input className="px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/50" placeholder="Your name" />
              <input className="px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/50" placeholder="Work email" />
              <button className="px-4 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-500">Request Consultation</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
