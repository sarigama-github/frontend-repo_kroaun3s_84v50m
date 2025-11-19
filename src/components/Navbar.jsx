import { ShoppingCart, Menu, ChevronRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-red-500/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-red-500 to-red-700 ring-1 ring-red-400/40 shadow-[0_0_40px_rgba(239,68,68,0.35)]" />
          <div className="text-white font-semibold tracking-tight text-lg">Grid Tech</div>
          <span className="ml-3 hidden md:inline-flex items-center text-xs font-medium text-red-300/80 px-2 py-1 rounded-full ring-1 ring-red-400/30 bg-red-500/10">
            Premium Software
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className="text-white/80 hover:text-white transition" href="#products">Products</a>
          <a className="text-white/80 hover:text-white transition" href="#about">About</a>
          <a className="text-white/80 hover:text-white transition" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#products" className="group inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-red-600/90 hover:bg-red-600 text-white shadow-[0_0_30px_rgba(239,68,68,0.25)] transition">
            <ShoppingCart size={16} />
            <span>Store</span>
            <ChevronRight size={16} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
          </a>
          <button className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-lg ring-1 ring-white/10 text-white/80">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
