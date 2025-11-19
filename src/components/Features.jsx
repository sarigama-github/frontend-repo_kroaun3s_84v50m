import { Shield, Zap, Gauge, Sparkles } from 'lucide-react'

export default function Features(){
  const feats = [
    { icon: Shield, title: 'Enterprise-grade Security', desc: 'Hardened architectures, end-to-end encryption, rigorous audits.'},
    { icon: Zap, title: 'Lightning Performance', desc: 'Optimized pipelines and edge delivery for sub-second interactions.'},
    { icon: Gauge, title: 'Scalable by Design', desc: 'From startup to global enterprise — seamless growth without bottlenecks.'},
    { icon: Sparkles, title: 'Luxury Craft', desc: 'Tailored interfaces, polished micro-interactions, and premium branding.'},
  ]
  return (
    <section className="relative bg-black py-20" id="about">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(239,68,68,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Grid Tech</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">We build software that feels like a flagship product — elegant, fast, and future-ready.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feats.map((f, i) => (
            <div key={i} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden hover:border-red-500/40 transition">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:via-red-500/0 group-hover:to-red-500/10 rounded-2xl blur-xl" />
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-red-500/15 text-red-300 flex items-center justify-center ring-1 ring-red-500/30 mb-4">
                  {<f.icon size={20} />}
                </div>
                <h3 className="text-white font-semibold mb-1">{f.title}</h3>
                <p className="text-white/70 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
