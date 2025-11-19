import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black/80 text-white/60 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">© {new Date().getFullYear()} Grid Tech. All rights reserved.</div>
          <div className="text-sm">Luxury software for visionary brands.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
