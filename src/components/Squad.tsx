// import { motion } from "framer-motion"
// import PlayerCard from "./PlayerCard"
// import { players } from "../data/players"

// export default function Squad() {
//   return (
//     <section id="elenco" className="relative py-24 bg-[#07080F] text-white overflow-hidden">

//       {/* BACKGROUND WATERMARK */}
//       <div
//         className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-black leading-none text-white/[0.015] select-none pointer-events-none whitespace-nowrap pr-4 hidden lg:block"
//         aria-hidden="true"
//       >
//         ELENCO
//       </div>

//       {/* TOP BORDER ACCENT */}
//       <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

//       <div className="max-w-7xl mx-auto px-6">

//         {/* SECTION HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-14"
//         >
//           <p className="text-xs font-bold tracking-[0.35em] uppercase text-yellow-400 mb-3">
//             Temporada 2026
//           </p>
//           <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-none tracking-tight text-white">
//             Elenco
//           </h2>
//           <p className="mt-4 text-sm text-white/30 max-w-md">
            
//           </p>
//         </motion.div>

//         {/* GRID */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
//           {players.map((player, i) => (
//             <motion.div
//               key={player.id}
//               initial={{ opacity: 0, y: 32 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.5, delay: i * 0.07 }}
//             >
//               <PlayerCard player={player} />
//             </motion.div>
//           ))}
//         </div>

//       </div>

//       {/* BOTTOM BORDER ACCENT */}
//       <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />
//     </section>
//   )
// }









// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import PlayerCard from "./PlayerCard"
// import { players } from "../data/players"

// // 5 melhores por rating para mostrar por padrão
// const featured = [...players].sort((a, b) => b.rating - a.rating).slice(0, 5)

// export default function Squad() {
//   const [showAll, setShowAll] = useState(false)

//   const visiblePlayers = showAll ? players : featured

//   return (
//     <section id="elenco" className="relative py-24 bg-[#07080F] text-white overflow-hidden">

//       {/* BACKGROUND WATERMARK */}
//       <div
//         className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-black leading-none text-white/[0.015] select-none pointer-events-none whitespace-nowrap pr-4 hidden lg:block"
//         aria-hidden="true"
//       >
//         ELENCO
//       </div>

//       <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-14"
//         >
//           <p className="text-xs font-bold tracking-[0.35em] uppercase text-yellow-400 mb-3">
//             Temporada 2026
//           </p>
//           <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-none tracking-tight text-white">
//             Elenco
//           </h2>
//         </motion.div>

//         {/* GRID */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
//           <AnimatePresence mode="popLayout">
//             {visiblePlayers.map((player, i) => (
//               <motion.div
//                 key={player.id}
//                 initial={{ opacity: 0, y: 32 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 16 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.4, delay: i * 0.05 }}
//               >
//                 <PlayerCard player={player} />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* BOTÃO VER ELENCO COMPLETO */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="flex justify-center mt-12"
//         >
//           <motion.button
//             onClick={() => setShowAll(!showAll)}
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.97 }}
//             className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase border border-white/10 hover:border-yellow-400/40 text-white/50 hover:text-white px-8 py-3.5 transition-colors duration-200"
//           >
//             {showAll ? (
//               <>Ver Menos <span className="text-yellow-400">↑</span></>
//             ) : (
//               <>Ver Elenco Completo <span className="text-yellow-400">→</span></>
//             )}
//           </motion.button>
//         </motion.div>

//       </div>

//       <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />
//     </section>
//   )
// }




import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PlayerCard from "./PlayerCard"
import { players } from "../data/players"

const featured = [...players].sort((a, b) => b.rating - a.rating).slice(0, 5)

export default function Squad() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="elenco" className="relative py-24 bg-[#07080F] text-white overflow-hidden">

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-black leading-none text-white/[0.015] select-none pointer-events-none whitespace-nowrap pr-4 hidden lg:block"
        aria-hidden="true"
      >
        ELENCO
      </div>

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER — botão sempre no topo direito */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.35em] uppercase text-yellow-400 mb-3">
              Temporada 2026
            </p>
            <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-none tracking-tight text-white">
              Elenco
            </h2>
          </div>

          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase border border-white/15 hover:border-yellow-400/40 text-white/50 hover:text-white px-5 py-3 transition-colors duration-200 mb-2"
          >
            {showAll
              ? <>Ver Menos <span className="text-yellow-400">↑</span></>
              : <>Ver Elenco Completo <span className="text-yellow-400">→</span></>
            }
          </motion.button>
        </motion.div>

        <AnimatePresence mode="popLayout">

          {/* 5 DESTAQUES — mesmo tamanho, mesmo grid dos outros */}
          {!showAll && (
            <motion.div
              key="featured"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
            >
              {featured.map((player, i) => (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <PlayerCard player={player} rotation={0} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* TODOS */}
          {showAll && (
            <motion.div
              key="all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
            >
              {players.map((player, i) => (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <PlayerCard player={player} rotation={0} />
                </motion.div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>

        {/* BOTÃO MOBILE */}
        <div className="flex justify-center mt-12 md:hidden">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase border border-white/10 hover:border-yellow-400/40 text-white/50 hover:text-white px-8 py-3.5 transition-colors duration-200"
          >
            {showAll
              ? <>Ver Menos <span className="text-yellow-400">↑</span></>
              : <>Ver Elenco Completo <span className="text-yellow-400">→</span></>
            }
          </motion.button>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />
    </section>
  )
}