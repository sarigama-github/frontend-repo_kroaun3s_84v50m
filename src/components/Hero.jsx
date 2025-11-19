import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark overlay with red grid glow - allow pointer to reach Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 ring-1 ring-red-500/30 text-red-300 text-xs mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
          Introducing Grid Tech</div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_0_30px_rgba(239,68,68,0.25)]">
          Luxury Software<br /> for Bold Brands
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80">
          Bespoke, high‑performance applications crafted with precision. Elevate your digital presence with premium tools engineered for speed, security, and style.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#products" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-red-600 text-white font-medium shadow-[0_10px_40px_rgba(239,68,68,0.35)] hover:bg-red-500 transition">Explore Products</a>
          <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white font-medium ring-1 ring-white/15 hover:bg-white/15 transition">Talk to Sales</a>
        </div>
      </div>
    </section>
  );
}
