import { motion } from "framer-motion"
import PlayerCard from "./PlayerCard"
import { players } from "../data/players"

export default function Squad() {
  return (
    <section id="elenco" className="relative py-24 bg-[#07080F] text-white overflow-hidden">

      {/* BACKGROUND WATERMARK */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-black leading-none text-white/[0.015] select-none pointer-events-none whitespace-nowrap pr-4 hidden lg:block"
        aria-hidden="true"
      >
        ELENCO
      </div>

      {/* TOP BORDER ACCENT */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-bold tracking-[0.35em] uppercase text-yellow-400 mb-3">
            Temporada 2026
          </p>
          <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-none tracking-tight text-white">
            Elenco
          </h2>
          <p className="mt-4 text-sm text-white/30 max-w-md">
            
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {players.map((player, i) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <PlayerCard player={player} />
            </motion.div>
          ))}
        </div>

      </div>

      {/* BOTTOM BORDER ACCENT */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />
    </section>
  )
}