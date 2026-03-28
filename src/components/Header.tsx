import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const menuItems = [
  { label: "Home", href: "#Home" },
  { label: "Elenco", href: "#elenco" },
  { label: "Jogos", href: "#jogos" },
   { label: "Sobre", href: "#About" },
  { label: "Destaques", href: "#Destaques" },
  { label: "Contato", href: "#Contact" },
  
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-yellow-400/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

          {/* LOGO */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-[2px] h-6 bg-yellow-400 group-hover:h-8 transition-all duration-300" />
            <span className="font-black text-white tracking-[0.25em] text-sm uppercase">
              BCL <span className="text-yellow-400">Futsal</span>
            </span>
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden px-5 py-2 text-xs font-bold tracking-[0.2em] uppercase bg-yellow-400 text-black"
              style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}
            >
              <span className="relative z-10">Ingressos</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.25 }}
              />
            </motion.button>
          </div>

          {/* MOBILE BURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Abrir menu"
          >
            <span className="block w-6 h-[1.5px] bg-white" />
            <span className="block w-4 h-[1.5px] bg-yellow-400" />
            <span className="block w-6 h-[1.5px] bg-white" />
          </button>
        </div>
      </motion.header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-72 h-screen bg-[#080A14] border-l border-yellow-400/10 z-50 flex flex-col p-8"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-yellow-400">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                    className="group flex items-center gap-4 py-4 border-b border-white/5 text-white/60 hover:text-white transition-colors"
                  >
                    <span className="w-4 h-[1px] bg-yellow-400/30 group-hover:bg-yellow-400 group-hover:w-8 transition-all duration-300" />
                    <span className="text-sm font-semibold tracking-[0.15em] uppercase">{item.label}</span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto">
                <button className="w-full py-3 bg-yellow-400 text-black text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}
                >
                  Ingressos
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}