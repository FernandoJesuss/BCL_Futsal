import { motion } from "framer-motion"
import logo from "../assets/Logo_do_bcl_futsal.webp"

type LinkItem = {
  label: string
  href: string
  external?: boolean
}

const links: Record<string, LinkItem[]> = {
  Clube: [
    { label: "Home",      href: "#Home" },
    { label: "Elenco",    href: "#elenco" },
    { label: "Jogos",     href: "#jogos" },
    { label: "Sobre",     href: "#About" },
    { label: "Troféus", href: "#Trofeus" },
    { label: "Destaques", href: "#Destaques" },
  ],
  Competições: [
    { label: "Copa dos Campeões Futsal", href: "https://futliga.com.br/Campeonatos/85", external: true },
    { label: "FutLiga 2026",             href: "https://futliga.com.br/e/bclfutsal",   external: true },
    { label: "Histórico",                href: "https://futliga.com.br/e/bclfutsal",   external: true },
  ],
  Contato: [
    { label: "FutLiga",   href: "https://futliga.com.br/e/bclfutsal", external: true },
    { label: "Instagram", href: "https://instagram.com/bclfutsal",    external: true },
    { label: "Imprensa",  href: "#contato" },
  ],
}


const socials = [
  { label: "IG", href: "https://instagram.com/bclfutsal" },
  { label: "FL", href: "https://futliga.com.br/e/bclfutsal" },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#03040A] text-white overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
      <div className="absolute w-[500px] h-[300px] bg-yellow-400/3 blur-[120px] rounded-full top-0 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* BRAND */}
          <div className="col-span-2 md:col-span-1">
            <a href="#Home" className="flex items-center gap-3 mb-5 group">
              <img src={logo} alt="BCL Futsal" className="w-10 opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="font-black tracking-[0.2em] text-sm text-white uppercase">
                BCL <span className="text-yellow-400">Futsal</span>
              </span>
            </a>
            <p className="text-xs text-white/25 leading-relaxed max-w-[200px] mb-2">
              Fundado em 18/06/2000. Futsal masculino adulto, região Sul de São Paulo — SP.
            </p>
            <p className="text-xs text-yellow-400/30 mb-6">2 Quadros · FutLiga</p>

            <div className="flex gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-[10px] font-black tracking-wider text-white/40 hover:text-yellow-400 hover:border-yellow-400/40 transition-colors duration-200"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* LINK COLUMNS */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-yellow-400/60 mb-5">
                {title}
              </p>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="text-xs text-white/30 hover:text-white transition-colors duration-200 tracking-wide flex items-center gap-1 group"
                    >
                      {item.label}
                      {/* seta para links externos */}
                      {item.external && (
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-yellow-400/50 text-[10px]">
                          ↗
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/15">
            BCL Futsal © 2026 — Fundado em 18/06/2000
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/40" />
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/15">
              Sul de São Paulo — SP · Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}