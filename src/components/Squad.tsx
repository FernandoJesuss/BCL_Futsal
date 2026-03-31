import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PlayerCard from "./PlayerCard"
import PlayerModal from "./PlayerModal"
import { players, type Player } from "../data/players"

const featured = [...players].sort((a, b) => b.rating - a.rating).slice(0, 5)

export default function Squad() {
  const [showAll, setShowAll] = useState(false)
  const [selected, setSelected] = useState<Player | null>(null)

  return (
    <>
      <section id="elenco" className="relative py-16 sm:py-24 bg-[#07080F] text-white overflow-hidden">

        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[clamp(80px,15vw,200px)] font-black leading-none text-white/[0.015] select-none pointer-events-none whitespace-nowrap pr-4 hidden lg:block"
          style={{ fontFamily: "'Oswald', sans-serif" }}
          aria-hidden="true"
        >
          ELENCO
        </div>

        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-end justify-between gap-4 mb-10 sm:mb-14"
          >
            <div>
              <p
                className="text-xs font-bold uppercase text-yellow-400 mb-3"
                style={{ letterSpacing: "0.35em", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Temporada 2026
              </p>
              <h2
                className="text-[clamp(36px,6vw,72px)] font-black leading-none text-white"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "-0.01em" }}
              >
                Elenco
              </h2>
            </div>

            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 text-xs font-bold uppercase border border-white/15 hover:border-yellow-400/40 text-white/50 hover:text-white px-5 py-3 transition-colors duration-200"
              style={{ letterSpacing: "0.2em", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {showAll
                ? <>Ver Menos <span className="text-yellow-400">↑</span></>
                : <>Ver Elenco Completo <span className="text-yellow-400">→</span></>
              }
            </motion.button>
          </motion.div>

          <AnimatePresence mode="popLayout">
            {!showAll && (
              <motion.div
                key="featured"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
              >
                {featured.map((player, i) => (
                  <motion.div
                    key={player.id}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <PlayerCard player={player} rotation={0} onClick={() => setSelected(player)} />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {showAll && (
              <motion.div
                key="all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
              >
                {players.map((player, i) => (
                  <motion.div
                    key={player.id}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <PlayerCard player={player} rotation={0} onClick={() => setSelected(player)} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />
      </section>

      <PlayerModal player={selected} onClose={() => setSelected(null)} />
    </>
  )
}