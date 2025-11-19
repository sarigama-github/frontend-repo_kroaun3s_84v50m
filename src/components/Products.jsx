import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Products(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      try{
        const res = await fetch(`${API_BASE}/products`)
        const data = await res.json()
        setItems(data)
      }catch(e){
        console.error(e)
      }finally{
        setLoading(false)
      }
    }
    run()
  }, [])

  return (
    <section className="relative bg-black py-20" id="products">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Software</h2>
            <p className="text-white/70">Curated tools engineered for excellence.</p>
          </div>
          <div className="text-sm text-white/60">{items.length} products</div>
        </div>

        {loading ? (
          <div className="text-white/60">Loading products…</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p, i) => (
              <article key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-red-500/40 transition">
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-black flex items-center justify-center text-white/30 text-sm">
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="group-hover:text-white/50 transition">{p.name}</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold">{p.name}</h3>
                  <p className="text-white/70 text-sm line-clamp-2 mt-1">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-white font-medium">{p.currency} {Number(p.price).toFixed(2)}</div>
                    <button className="px-3 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-500">Request Demo</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
