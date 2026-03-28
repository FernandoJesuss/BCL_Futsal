import { motion } from "framer-motion"

import type { Player } from "../data/players"

type Props = {
  player: Player
}

export default function PlayerCard({ player }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="relative w-full max-w-[280px] mx-auto group cursor-pointer"
    >
      {/* OUTER GLOW — aparece no hover */}
      <div className="absolute -inset-[2px] bg-gradient-to-b from-yellow-400/60 via-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          clipPath: "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)"
        }}
      />

      {/* CARD */}
      <div
        className="relative overflow-hidden bg-gradient-to-b from-[#111827] via-[#0d1020] to-[#07080F] border border-white/8 group-hover:border-yellow-400/20 transition-colors duration-300"
        style={{
          clipPath: "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)"
        }}
      >
        {/* ATMOSPHERIC GLOW INSIDE */}
        <div className="absolute inset-0 bg-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-0" />

        {/* NUMBER — ghost watermark */}
        <div className="absolute top-2 right-3 text-[72px] font-black leading-none text-white/5 group-hover:text-yellow-400/8 transition-colors duration-300 select-none pointer-events-none z-10">
          {player.number}
        </div>

        {/* NUMBER — visible badge */}
        <div className="absolute top-3 left-3 z-30">
          <span className="inline-block bg-black/60 backdrop-blur-sm px-2 py-0.5 text-xs font-black tracking-[0.15em] text-yellow-400 border-l-2 border-yellow-400">
            #{player.number}
          </span>
        </div>

        {/* CAPTAIN BADGE */}
        {player.captain && (
          <div className="absolute top-3 right-3 z-30">
            <span className="inline-block bg-yellow-400 text-black text-[9px] font-black tracking-[0.2em] uppercase px-2 py-0.5">
              ★ CAP
            </span>
          </div>
        )}

        {/* IMAGE */}
        <div className="relative h-60 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080F] via-transparent to-transparent z-20" />
          <motion.img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover object-top relative z-10 filter brightness-90 group-hover:brightness-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* INFO */}
        <div className="relative z-20 px-4 pt-3 pb-5 border-t border-yellow-400/10 group-hover:border-yellow-400/25 transition-colors duration-300">
          <h3 className="text-base font-black tracking-wide text-white uppercase truncate">
            {player.name}
          </h3>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-yellow-400/50 mt-0.5">
            {player.position}
          </p>
        </div>

      </div>
    </motion.div>
  )
}