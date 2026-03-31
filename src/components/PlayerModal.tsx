import { motion, AnimatePresence } from "framer-motion"
import type { Player } from "../data/players"


type Props = {
  player: Player | null
  onClose: () => void
}

function getBorderColor(rating: number) {
  if (rating >= 90) return "#FFD700"
  if (rating >= 85) return "#00429c"
  if (rating >= 80) return "#8d100a"
  return "#6B7280"
}

export default function PlayerModal({ player, onClose }: Props) {
  if (!player) return null
  const color = getBorderColor(player.rating)

  return (
    <AnimatePresence>
      {player && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-4xl pointer-events-auto overflow-hidden"
              style={{ borderRadius: "12px" }}
            >
              {/* BORDER GLOW */}
              <div
                className="absolute -inset-[1px] z-0 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${color} 0%, ${color}44 50%, ${color} 100%)`,
                  boxShadow: `0 0 40px ${color}55`,
                }}
              />

              {/* CARD BODY */}
              <div
                className="relative z-10 overflow-hidden rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #0d0f1e 0%, #0a0c18 60%, #12091e 100%)",
                }}
              >

                {/* TOP BAR — destaque da semana */}
                {player.destaqueSemana && (
                  <div
                    className="flex items-center justify-between px-6 py-3 border-b border-white/5"
                    style={{ background: "rgba(0,0,0,0.4)" }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
                        Temporada 2026
                      </span>
                    </div>
                    <div className="flex items-center gap-2 border border-white/10 px-4 py-1.5 rounded-sm">
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
                        Destaque da Semana:
                      </span>
                      <span className="text-[10px] font-black tracking-[0.1em] uppercase text-white">
                        {player.name}
                      </span>
                      <span className="text-white/30 text-xs ml-1">›</span>
                    </div>
                  </div>
                )}

                {/* MAIN CONTENT */}
                <div className="grid grid-cols-[280px_1fr_280px] min-h-[420px]">

                  {/* LEFT — info do jogador */}
                  <div className="flex flex-col justify-between p-8 border-r border-white/5">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-yellow-400/70 mb-1">
                        Elenco
                      </p>
                      <h2 className="text-4xl font-black text-white leading-none mb-1">
                        {player.name}
                      </h2>
                      {player.nickname && (
                        <p className="text-sm font-bold text-white/30 mb-6">
                          {player.nickname}
                        </p>
                      )}

                      {/* TABS simuladas */}
                      <div className="flex gap-3 mb-8">
                        {["Ala", "Posição", "Gol"].map((tab, i) => (
                          <span
                            key={tab}
                            className={`text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 border transition-colors cursor-pointer ${
                              i === 0
                                ? "border-yellow-400/40 text-yellow-400 bg-yellow-400/10"
                                : "border-white/10 text-white/30 hover:border-white/20"
                            }`}
                          >
                            {i === 0 ? player.position : tab}
                          </span>
                        ))}
                      </div>

                      {/* ATRIBUTOS */}
                      <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/20 mb-4">
                        Tradição Além das Tábuas
                      </p>

                      {[
                        "Conquistas em equipe",
                        "Altura nos torneios",
                        "Títulos marcantes",
                        "Líder por natureza",
                      ].map((attr) => (
                        <div key={attr} className="flex items-center gap-2 mb-2">
                          <span className="text-yellow-400 text-xs">✓</span>
                          <span className="text-[10px] text-white/40">{attr}</span>
                        </div>
                      ))}
                    </div>

                    {/* FLAG + RATING */}
                    <div className="flex items-center gap-3 mt-6">
                      <img src={player.flag} alt={player.countryCode} className="w-6 h-6 object-contain" />
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30">
                        {player.countryCode}
                      </span>
                      <span
                        className="ml-auto text-2xl font-black"
                        style={{ color, textShadow: `0 0 20px ${color}88` }}
                      >
                        {player.rating}
                      </span>
                    </div>
                  </div>

                  {/* CENTER — imagem do jogador */}
                  <div className="relative flex items-end justify-center overflow-hidden">
                    {/* GLOW BEHIND PLAYER */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(ellipse at 50% 60%, ${color}22 0%, transparent 70%)`,
                      }}
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-32"
                      style={{
                        background: "linear-gradient(to top, #0a0c18, transparent)",
                      }}
                    />

                    {/* LOGO BCL */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
                      <div className="w-12 h-12 opacity-60">
                        <img src="/src/assets/Logo_do_bcl_futsal.webp" alt="BCL" className="w-full h-full object-contain" />
                      </div>
                      <p className="text-[9px] font-black tracking-[0.3em] uppercase text-white/30">BCL Futsal</p>
                      <div className="flex gap-0.5 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-[8px]">★</span>
                        ))}
                      </div>
                    </div>

                    {/* NÚMERO NO FUNDO */}
                    <div
                      className="absolute bottom-10 right-4 font-black select-none pointer-events-none"
                      style={{
                        fontSize: "120px",
                        color: `${color}15`,
                        lineHeight: 1,
                      }}
                    >
                      {player.number}
                    </div>

                    <img
                      src={player.image}
                      alt={player.name}
                      className="relative z-10 h-80 w-auto object-contain object-bottom"
                      style={{ filter: "brightness(1.1) contrast(1.05)" }}
                    />

                    {/* NAME BOTTOM */}
                    <div className="absolute bottom-4 left-0 right-0 text-center z-20">
                      <p className="text-lg font-black tracking-widest text-white uppercase">
                        
                      </p>
                    </div>
                  </div>

                  {/* RIGHT — stats */}
                  <div className="flex flex-col justify-between p-8 border-l border-white/5">

                    {/* STATS GRID */}
                    <div className="space-y-4">
                      {player.stats && (
                        <>
                          <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                            <div
                              className="w-8 h-8 rounded flex items-center justify-center text-sm font-black"
                              style={{ background: `${color}22`, color }}
                            >
                              ⚽
                            </div>
                            <div>
                              <p className="text-2xl font-black text-white leading-none">{player.stats.gols}</p>
                              <div className="flex gap-4 mt-1">
                                <div>
                                  <p className="text-[8px] uppercase tracking-wider text-white/30">Assistências</p>
                                  <p className="text-sm font-black text-white">{player.stats.assistencias}</p>
                                </div>
                                <div>
                                  <p className="text-[8px] uppercase tracking-wider text-white/30">Cartões</p>
                                  <p className="text-sm font-black text-white">{player.stats.cartoes}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                            <div
                              className="w-8 h-8 rounded flex items-center justify-center text-sm font-black"
                              style={{ background: `${color}22`, color }}
                            >
                              🏆
                            </div>
                            <div>
                              <p className="text-[8px] uppercase tracking-wider text-white/30">Jogos</p>
                              <p className="text-2xl font-black text-white leading-none">{player.stats.jogos}</p>
                            </div>
                          </div>

                          <div className="pb-4 border-b border-white/5">
                            <div className="grid grid-cols-3 gap-2">
                              <div>
                                <p className="text-[8px] uppercase tracking-wider text-white/30">Rating</p>
                                <p className="text-xl font-black" style={{ color }}>{player.rating}</p>
                              </div>
                              <div>
                                <p className="text-[8px] uppercase tracking-wider text-white/30">Gols</p>
                                <p className="text-xl font-black text-white">{player.stats.gols}</p>
                              </div>
                              <div>
                                <p className="text-[8px] uppercase tracking-wider text-white/30">Assist</p>
                                <p className="text-xl font-black" style={{ color }}>{player.stats.assistencias}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* BOTÕES */}
                    <div className="flex flex-col gap-2 mt-4">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        // className="flex items-center justify-center gap-2 py-3 text-xs font-bold tracking-[0.2em] uppercase text-black"
                        // style={{ background: color }}
                      >
                        {/* <span>★</span> Enviar Candidatura */}
                      </motion.button>

                      <motion.button
                        // whileHover={{ scale: 1.03 }}
                        // whileTap={{ scale: 0.97 }}
                        // className="flex items-center justify-center gap-2 py-3 text-xs font-bold tracking-[0.2em] uppercase border text-yellow-400"
                        // style={{ borderColor: `${color}44` }}
                      >
                        {/* Ver Elenco Completo */}
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* CLOSE BUTTON */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-30 w-8 h-8 flex items-center justify-center text-white/30 hover:text-white transition-colors text-lg"
                >
                  ✕
                </button>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}









// import { motion, AnimatePresence } from "framer-motion"
// import type { Player } from "../data/players"

// type Props = {
//   player: Player | null
//   onClose: () => void
// }

// function getBorderColor(rating: number) {
//   if (rating >= 90) return "#FFD700"
//   if (rating >= 85) return "#00429c"
//   if (rating >= 80) return "#8d100a"
//   return "#6B7280"
// }

// export default function PlayerModal({ player, onClose }: Props) {
//   if (!player) return null
//   const color = getBorderColor(player.rating)

//   return (
//     <AnimatePresence>
//       {player && (
//         <>
//           {/* BACKDROP */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
//           />

//           {/* MODAL */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.92, y: 30 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.92, y: 30 }}
//             transition={{ type: "spring", stiffness: 260, damping: 24 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
//           >
//             <div
//               className="relative w-full max-w-sm pointer-events-auto overflow-hidden"
//               style={{ borderRadius: "12px" }}
//             >
//               {/* BORDER GLOW */}
//               <div
//                 className="absolute -inset-[1px] z-0 rounded-xl"
//                 style={{
//                   background: `linear-gradient(135deg, ${color} 0%, ${color}44 50%, ${color} 100%)`,
//                   boxShadow: `0 0 40px ${color}55`,
//                 }}
//               />

//               {/* CARD BODY */}
//               <div
//                 className="relative z-10 overflow-hidden rounded-xl"
//                 style={{
//                   background: "linear-gradient(135deg, #0d0f1e 0%, #0a0c18 60%, #12091e 100%)",
//                 }}
//               >

//                 {/* TOP BAR — destaque da semana */}
//                 {player.destaqueSemana && (
//                   <div
//                     className="flex items-center justify-between px-2 py-2 border-b border-white/5"
//                     style={{ background: "rgba(0,0,0,0.4)" }}
//                   >
//                     <div className="flex items-center gap-1">
//                       <span className="text-yellow-400 text-xs">★</span>
//                       <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
//                         Destaque da Semana
//                       </span>
//                     </div>
//                     <span className="text-xs font-bold text-white">{player.name}</span>
//                   </div>
//                 )}

//                 {/* MAIN CONTENT */}
//                 <div className="flex flex-col">

//                   {/* LEFT — info do jogador */}
//                   <div className="flex flex-col justify-between p-2 border-b border-white/5">
//                     <h2 className="text-xl font-black text-white leading-none mb-1">
//                       {player.name}
//                     </h2>
//                     {player.nickname && (
//                       <p className="text-sm font-bold text-white/30 mb-2">
//                         {player.nickname}
//                       </p>
//                     )}

//                     {/* TABS simuladas */}
//                     <div className="flex gap-1 mb-2 flex-wrap">
//                       {["Ala", "Posição", "Gol"].map((tab, i) => (
//                         <span
//                           key={tab}
//                           className={`text-[10px] font-bold tracking-[0.15em] uppercase px-1 py-1 border transition-colors cursor-pointer ${
//                             i === 0
//                               ? "border-yellow-400/40 text-yellow-400 bg-yellow-400/10"
//                               : "border-white/10 text-white/30 hover:border-white/20"
//                           }`}
//                         >
//                           {i === 0 ? player.position : tab}
//                         </span>
//                       ))}
//                     </div>

//                     {/* ATRIBUTOS */}
//                     <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/20 mb-2">
//                       Tradição Além das Tábuas
//                     </p>

//                     {[
//                       "Conquistas em equipe",
//                       "Altura nos torneios",
//                       "Títulos marcantes",
//                       "Líder por natureza",
//                     ].map((attr) => (
//                       <div key={attr} className="flex items-center gap-1 mb-1">
//                         <span className="text-yellow-400 text-xs">✓</span>
//                         <span className="text-xs text-white/40">{attr}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* CENTER — imagem do jogador */}
//                   <div className="relative flex items-center justify-center overflow-hidden p-2">
//                     <img
//                       src={player.image}
//                       alt={player.name}
//                       className="relative z-10 h-32 w-auto object-contain"
//                       style={{ filter: "brightness(1.1) contrast(1.05)" }}
//                     />
//                   </div>

//                   {/* RIGHT — stats */}
//                   <div className="flex flex-col justify-between p-2 border-t border-white/5">

//                     {/* STATS GRID */}
//                     <div className="space-y-2">
//                       {player.stats && (
//                         <>
//                           <div className="flex items-center gap-2 pb-2">
//                             <div
//                               className="w-8 h-8 rounded flex items-center justify-center text-sm font-black"
//                               style={{ background: `${color}22`, color }}
//                             >
//                               ⚽
//                             </div>
//                             <div>
//                               <p className="text-lg font-black text-white leading-none">{player.stats.gols}</p>
//                               <p className="text-[8px] uppercase tracking-wider text-white/30">Gols</p>
//                             </div>
//                           </div>

//                           <div className="flex items-center gap-2 pb-2">
//                             <div
//                               className="w-8 h-8 rounded flex items-center justify-center text-sm font-black"
//                               style={{ background: `${color}22`, color }}
//                             >
//                               🏆
//                             </div>
//                             <div>
//                               <p className="text-lg font-black text-white leading-none">{player.stats.jogos}</p>
//                               <p className="text-[8px] uppercase tracking-wider text-white/30">Jogos</p>
//                             </div>
//                           </div>
//                         </>
//                       )}
//                     </div>

//                     {/* BOTÕES */}
//                     <div className="flex flex-col gap-2 mt-2">
//                       <motion.button
//                         whileHover={{ scale: 1.03 }}
//                         whileTap={{ scale: 0.97 }}
//                         className="flex items-center justify-center gap-1 py-2 text-xs font-bold tracking-[0.2em] uppercase border text-yellow-400"
//                         style={{ borderColor: `${color}44` }}
//                       >
//                         Ver Elenco Completo
//                       </motion.button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CLOSE BUTTON */}
//                 <button
//                   onClick={onClose}
//                   className="absolute top-2 right-2 z-30 w-8 h-8 flex items-center justify-center text-white/30 hover:text-white transition-colors text-lg"
//                 >
//                   ✕
//                 </button>

//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   )
// }
