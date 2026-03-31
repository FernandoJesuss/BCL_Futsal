












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
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
//           />

//           <motion.div
//             initial={{ opacity: 0, scale: 0.92, y: 30 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.92, y: 30 }}
//             transition={{ type: "spring", stiffness: 260, damping: 24 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none overflow-y-auto"
//           >
//             <div
//               className="relative w-full max-w-4xl pointer-events-auto overflow-hidden my-auto"
//               style={{ borderRadius: "12px" }}
//             >
//               <div
//                 className="absolute -inset-[1px] z-0 rounded-xl"
//                 style={{
//                   background: `linear-gradient(135deg, ${color} 0%, ${color}44 50%, ${color} 100%)`,
//                   boxShadow: `0 0 40px ${color}55`,
//                 }}
//               />

//               <div
//                 className="relative z-10 overflow-hidden rounded-xl"
//                 style={{
//                   background: "linear-gradient(135deg, #0d0f1e 0%, #0a0c18 60%, #12091e 100%)",
//                 }}
//               >
//                 {player.destaqueSemana && (
//                   <div
//                     className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-white/5"
//                     style={{ background: "rgba(0,0,0,0.4)" }}
//                   >
//                     <div className="flex items-center gap-2">
//                       <span className="text-yellow-400 text-sm">★</span>
//                       <span
//                         className="text-[10px] font-bold uppercase text-white/40"
//                         style={{ letterSpacing: "0.3em", fontFamily: "'Barlow Condensed', sans-serif" }}
//                       >
//                         Temporada 2026
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2 border border-white/10 px-3 sm:px-4 py-1.5 rounded-sm">
//                       <span className="text-yellow-400 text-xs">★</span>
//                       <span
//                         className="text-[10px] font-bold uppercase text-white/60"
//                         style={{ letterSpacing: "0.2em", fontFamily: "'Barlow Condensed', sans-serif" }}
//                       >
//                         Destaque da Semana:
//                       </span>
//                       <span
//                         className="text-[10px] font-black uppercase text-white"
//                         style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}
//                       >
//                         {player.name}
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 {/* ── MOBILE LAYOUT (< lg) ── */}
//                 <div className="lg:hidden flex flex-col">

//                   {/* Foto do jogador no topo */}
//                   <div className="relative h-64 sm:h-80 overflow-hidden flex-shrink-0">
//                     <div
//                       className="absolute inset-0"
//                       style={{ background: `radial-gradient(ellipse at 50% 60%, ${color}22 0%, transparent 70%)` }}
//                     />
//                     <div
//                       className="absolute bottom-0 left-0 right-0 h-20"
//                       style={{ background: "linear-gradient(to top, #0a0c18, transparent)" }}
//                     />
//                     <div
//                       className="absolute bottom-3 right-3 font-black select-none pointer-events-none"
//                       style={{ fontSize: "90px", color: `${color}12`, lineHeight: 1, fontFamily: "'Oswald', sans-serif" }}
//                     >
//                       {player.number}
//                     </div>
//                     <img
//                       src={player.image}
//                       alt={player.name}
//                       className="w-full h-full object-cover object-top relative z-10"
//                       style={{ filter: "brightness(1.1) contrast(1.05)" }}
//                     />
//                   </div>

//                   {/* Info do jogador */}
//                   <div className="px-5 pt-4 pb-4 border-b border-white/5">
//                     <p
//                       className="text-[10px] font-bold uppercase mb-1"
//                       style={{ letterSpacing: "0.3em", color: `${color}bb`, fontFamily: "'Barlow Condensed', sans-serif" }}
//                     >
//                       Elenco
//                     </p>
//                     <h2
//                       className="text-3xl font-black text-white leading-none mb-1"
//                       style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "-0.01em" }}
//                     >
//                       {player.name}
//                     </h2>
//                     {player.nickname && (
//                       <p className="text-sm text-white/30 mb-4" style={{ fontFamily: "'Barlow', sans-serif", fontStyle: "italic" }}>
//                         {player.nickname}
//                       </p>
//                     )}

//                     <div className="flex gap-2 flex-wrap mb-4">
//                       {["Ala", "Posição", "Gol"].map((tab, i) => (
//                         <span
//                           key={tab}
//                           className={`text-[10px] font-bold uppercase px-3 py-1.5 border cursor-pointer ${
//                             i === 0
//                               ? "border-yellow-400/40 text-yellow-400 bg-yellow-400/10"
//                               : "border-white/10 text-white/30"
//                           }`}
//                           style={{ letterSpacing: "0.15em", fontFamily: "'Barlow Condensed', sans-serif" }}
//                         >
//                           {i === 0 ? player.position : tab}
//                         </span>
//                       ))}
//                     </div>

//                     <p
//                       className="text-[9px] font-bold uppercase text-white/20 mb-3"
//                       style={{ letterSpacing: "0.3em", fontFamily: "'Barlow Condensed', sans-serif" }}
//                     >
//                       Tradição Além das Quadras
//                     </p>
//                     {["Conquistas em equipe", "Altura nos torneios", "Títulos marcantes", "Líder por natureza"].map((attr) => (
//                       <div key={attr} className="flex items-center gap-2 mb-1.5">
//                         <span className="text-yellow-400 text-xs">✓</span>
//                         <span className="text-[11px] text-white/40" style={{ fontFamily: "'Barlow', sans-serif" }}>{attr}</span>
//                       </div>
//                     ))}

//                     <div className="flex items-center gap-3 mt-4">
//                       <img src={player.flag} alt={player.countryCode} className="w-6 h-6 object-contain" />
//                       <span
//                         className="text-[10px] font-black uppercase text-white/30"
//                         style={{ letterSpacing: "0.2em", fontFamily: "'Barlow Condensed', sans-serif" }}
//                       >
//                         {player.countryCode}
//                       </span>
//                       <span
//                         className="ml-auto text-2xl font-black"
//                         style={{ color, textShadow: `0 0 20px ${color}88`, fontFamily: "'Oswald', sans-serif" }}
//                       >
//                         {player.rating}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Stats */}
//                   {player.stats && (
//                     <div className="px-5 py-4 space-y-4">
//                       <div className="flex items-center gap-4 pb-4 border-b border-white/5">
//                         <div className="w-8 h-8 rounded flex items-center justify-center text-sm flex-shrink-0" style={{ background: `${color}22`, color }}>
//                           ⚽
//                         </div>
//                         <div>
//                           <p className="text-2xl font-black text-white leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
//                             {player.stats.gols}
//                           </p>
//                           <div className="flex gap-4 mt-1">
//                             <div>
//                               <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Assistências</p>
//                               <p className="text-sm font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{player.stats.assistencias}</p>
//                             </div>
//                             <div>
//                               <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Cartões</p>
//                               <p className="text-sm font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{player.stats.cartoes}</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-4 pb-4 border-b border-white/5">
//                         <div className="w-8 h-8 rounded flex items-center justify-center text-sm flex-shrink-0" style={{ background: `${color}22`, color }}>
//                           🏆
//                         </div>
//                         <div>
//                           <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Jogos</p>
//                           <p className="text-2xl font-black text-white leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>{player.stats.jogos}</p>
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-3 gap-2 pb-2">
//                         <div>
//                           <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Rating</p>
//                           <p className="text-xl font-black" style={{ color, fontFamily: "'Oswald', sans-serif" }}>{player.rating}</p>
//                         </div>
//                         <div>
//                           <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Gols</p>
//                           <p className="text-xl font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{player.stats.gols}</p>
//                         </div>
//                         <div>
//                           <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Assist</p>
//                           <p className="text-xl font-black" style={{ color, fontFamily: "'Oswald', sans-serif" }}>{player.stats.assistencias}</p>
//                         </div>
//                       </div>

//                       {/* Escudo ABAIXO dos números, nunca sobreposto */}
//                       <div className="flex flex-col items-center pt-3 border-t border-white/5">
//                         <img src="/img/Logo_do_bcl_futsal.webp" alt="Escudo BCL" className="w-14 h-14 object-contain opacity-70" />
//                         <p
//                           className="mt-1 text-white/40 text-xs font-bold"
//                           style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
//                         >
//                           B.C.L Futsal
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* ── DESKTOP LAYOUT (lg+) ── */}
//                 <div className="hidden lg:grid grid-cols-[280px_1fr_280px] min-h-[420px]">

//                   {/* LEFT */}
//                   <div className="flex flex-col justify-between p-8 border-r border-white/5">
//                     <div>
//                       <p
//                         className="text-[10px] font-bold uppercase mb-1"
//                         style={{ letterSpacing: "0.3em", color: `${color}bb`, fontFamily: "'Barlow Condensed', sans-serif" }}
//                       >
//                         Elenco
//                       </p>
//                       <h2
//                         className="text-4xl font-black text-white leading-none mb-1"
//                         style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "-0.01em" }}
//                       >
//                         {player.name}
//                       </h2>
//                       {player.nickname && (
//                         <p className="text-sm text-white/30 mb-6" style={{ fontFamily: "'Barlow', sans-serif", fontStyle: "italic" }}>
//                           {player.nickname}
//                         </p>
//                       )}

//                       <div className="flex gap-3 mb-8">
//                         {["Ala", "Posição", "Gol"].map((tab, i) => (
//                           <span
//                             key={tab}
//                             className={`text-[10px] font-bold uppercase px-3 py-1.5 border cursor-pointer ${
//                               i === 0
//                                 ? "border-yellow-400/40 text-yellow-400 bg-yellow-400/10"
//                                 : "border-white/10 text-white/30 hover:border-white/20"
//                             }`}
//                             style={{ letterSpacing: "0.15em", fontFamily: "'Barlow Condensed', sans-serif" }}
//                           >
//                             {i === 0 ? player.position : tab}
//                           </span>
//                         ))}
//                       </div>

//                       <p
//                         className="text-[9px] font-bold uppercase text-white/20 mb-4"
//                         style={{ letterSpacing: "0.3em", fontFamily: "'Barlow Condensed', sans-serif" }}
//                       >
//                         Tradição Além das Quadras
//                       </p>

//                       {["Conquistas em equipe", "Altura nos torneios", "Títulos marcantes", "Líder por natureza"].map((attr) => (
//                         <div key={attr} className="flex items-center gap-2 mb-2">
//                           <span className="text-yellow-400 text-xs">✓</span>
//                           <span className="text-[11px] text-white/40" style={{ fontFamily: "'Barlow', sans-serif" }}>{attr}</span>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="flex items-center gap-3 mt-6">
//                       <img src={player.flag} alt={player.countryCode} className="w-6 h-6 object-contain" />
//                       <span
//                         className="text-[10px] font-black uppercase text-white/30"
//                         style={{ letterSpacing: "0.2em", fontFamily: "'Barlow Condensed', sans-serif" }}
//                       >
//                         {player.countryCode}
//                       </span>
//                       <span
//                         className="ml-auto text-2xl font-black"
//                         style={{ color, textShadow: `0 0 20px ${color}88`, fontFamily: "'Oswald', sans-serif" }}
//                       >
//                         {player.rating}
//                       </span>
//                     </div>
//                   </div>

//                   {/* CENTER */}
//                   <div className="relative flex items-end justify-center overflow-hidden">
//                     <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 60%, ${color}22 0%, transparent 70%)` }} />
//                     <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, #0a0c18, transparent)" }} />
//                     <div
//                       className="absolute bottom-10 right-4 font-black select-none pointer-events-none"
//                       style={{ fontSize: "120px", color: `${color}15`, lineHeight: 1, fontFamily: "'Oswald', sans-serif" }}
//                     >
//                       {player.number}
//                     </div>
//                     <img
//                       src={player.image}
//                       alt={player.name}
//                       className="relative z-10 w-full h-auto object-contain object-bottom"
//                       style={{ filter: "brightness(1.1) contrast(1.05)" }}
//                     />
//                   </div>

//                   {/* RIGHT */}
//                   <div className="relative flex flex-col justify-between p-8 border-l border-white/5">
//                     {/* Escudo como marca d'água no fundo — opacity muito baixa para não sobrepor */}
//                     <div className="absolute inset-0 flex items-end justify-center pb-4 pointer-events-none z-0">
//                       <img src="/img/Logo_do_bcl_futsal.webp" alt="" className="w-40 h-40 object-contain opacity-[0.06]" />
//                     </div>

//                     <div className="space-y-4 relative z-10">
//                       {player.stats && (
//                         <>
//                           <div className="flex items-center gap-4 pb-4 border-b border-white/5">
//                             <div className="w-8 h-8 rounded flex items-center justify-center text-sm flex-shrink-0" style={{ background: `${color}22`, color }}>⚽</div>
//                             <div>
//                               <p className="text-2xl font-black text-white leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>{player.stats.gols}</p>
//                               <div className="flex gap-4 mt-1">
//                                 <div>
//                                   <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Assistências</p>
//                                   <p className="text-sm font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{player.stats.assistencias}</p>
//                                 </div>
//                                 <div>
//                                   <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Cartões</p>
//                                   <p className="text-sm font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{player.stats.cartoes}</p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="flex items-center gap-4 pb-4 border-b border-white/5">
//                             <div className="w-8 h-8 rounded flex items-center justify-center text-sm flex-shrink-0" style={{ background: `${color}22`, color }}>🏆</div>
//                             <div>
//                               <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Jogos</p>
//                               <p className="text-2xl font-black text-white leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>{player.stats.jogos}</p>
//                             </div>
//                           </div>

//                           <div className="pb-4 border-b border-white/5">
//                             <div className="grid grid-cols-3 gap-2">
//                               <div>
//                                 <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Rating</p>
//                                 <p className="text-xl font-black" style={{ color, fontFamily: "'Oswald', sans-serif" }}>{player.rating}</p>
//                               </div>
//                               <div>
//                                 <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Gols</p>
//                                 <p className="text-xl font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{player.stats.gols}</p>
//                               </div>
//                               <div>
//                                 <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Assist</p>
//                                 <p className="text-xl font-black" style={{ color, fontFamily: "'Oswald', sans-serif" }}>{player.stats.assistencias}</p>
//                               </div>
//                             </div>
//                           </div>
//                         </>
//                       )}
//                     </div>

//                     {/* Escudo + nome visível no rodapé desktop */}
//                     <div className="flex flex-col items-center mt-4 relative z-10">
//                       <img src="/img/Logo_do_bcl_futsal.webp" alt="Escudo BCL" className="w-14 h-14 object-contain opacity-80" />
//                       <p className="mt-1 text-white/40 text-xs font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}>
//                         B.C.L Futsal
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   onClick={onClose}
//                   className="absolute top-4 right-4 z-30 w-8 h-8 flex items-center justify-center text-white/30 hover:text-white transition-colors text-lg"
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
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
//           />

//           <motion.div
//             initial={{ opacity: 0, scale: 0.92, y: 30 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.92, y: 30 }}
//             transition={{ type: "spring", stiffness: 260, damping: 24 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-3 pointer-events-none overflow-y-auto"
//           >
//             <div
//               className="relative w-full max-w-sm pointer-events-auto overflow-hidden my-auto"
//               style={{ borderRadius: "12px" }}
//             >
//               <div
//                 className="absolute -inset-[1px] z-0 rounded-xl"
//                 style={{
//                   background: `linear-gradient(135deg, ${color} 0%, ${color}44 50%, ${color} 100%)`,
//                   boxShadow: `0 0 40px ${color}55`,
//                 }}
//               />

//               <div
//                 className="relative z-10 overflow-hidden rounded-xl flex flex-col"
//                 style={{
//                   background: "linear-gradient(135deg, #0d0f1e 0%, #0a0c18 60%, #12091e 100%)",
//                 }}
//               >
//                 {player.destaqueSemana && (
//                   <div
//                     className="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-white/5"
//                     style={{ background: "rgba(0,0,0,0.4)" }}
//                   >
//                     <div className="flex items-center gap-2">
//                       <span className="text-yellow-400 text-xs">★</span>
//                       <span
//                         className="text-[9px] font-bold uppercase text-white/40"
//                         style={{ letterSpacing: "0.3em", fontFamily: "'Barlow Condensed', sans-serif" }}
//                       >
//                         Temporada 2026
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-1.5 border border-white/10 px-2.5 py-1 rounded-sm">
//                       <span className="text-yellow-400 text-[10px]">★</span>
//                       <span
//                         className="text-[9px] font-black uppercase text-white"
//                         style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}
//                       >
//                         {player.name}
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 {/* Foto do jogador */}
//                 <div className="relative h-64 overflow-hidden flex-shrink-0">
//                   <div
//                     className="absolute inset-0"
//                     style={{ background: `radial-gradient(ellipse at 50% 60%, ${color}22 0%, transparent 70%)` }}
//                   />
//                   <div
//                     className="absolute bottom-0 left-0 right-0 h-20"
//                     style={{ background: "linear-gradient(to top, #0a0c18, transparent)" }}
//                   />
//                   <div
//                     className="absolute bottom-3 right-3 font-black select-none pointer-events-none z-10"
//                     style={{ fontSize: "90px", color: `${color}12`, lineHeight: 1, fontFamily: "'Oswald', sans-serif" }}
//                   >
//                     {player.number}
//                   </div>
//                   <img
//                     src={player.image}
//                     alt={player.name}
//                     className="w-full h-full object-cover object-top relative z-20"
//                     style={{ filter: "brightness(1.1) contrast(1.05)" }}
//                   />
//                 </div>

//                 {/* Info do jogador */}
//                 <div className="px-5 pt-4 pb-4 border-b border-white/5">
//                   <p
//                     className="text-[10px] font-bold uppercase mb-1"
//                     style={{ letterSpacing: "0.3em", color: `${color}bb`, fontFamily: "'Barlow Condensed', sans-serif" }}
//                   >
//                     Elenco
//                   </p>
//                   <h2
//                     className="text-3xl font-black text-white leading-none mb-1"
//                     style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "-0.01em" }}
//                   >
//                     {player.name}
//                   </h2>
//                   {player.nickname && (
//                     <p className="text-sm text-white/30 mb-4" style={{ fontFamily: "'Barlow', sans-serif", fontStyle: "italic" }}>
//                       {player.nickname}
//                     </p>
//                   )}

//                   <div className="flex gap-2 flex-wrap mb-4">
//                     {["Ala", "Posição", "Gol"].map((tab, i) => (
//                       <span
//                         key={tab}
//                         className={`text-[10px] font-bold uppercase px-3 py-1.5 border cursor-pointer ${
//                           i === 0
//                             ? "border-yellow-400/40 text-yellow-400 bg-yellow-400/10"
//                             : "border-white/10 text-white/30"
//                         }`}
//                         style={{ letterSpacing: "0.15em", fontFamily: "'Barlow Condensed', sans-serif" }}
//                       >
//                         {i === 0 ? player.position : tab}
//                       </span>
//                     ))}
//                   </div>

//                   <p
//                     className="text-[9px] font-bold uppercase text-white/20 mb-3"
//                     style={{ letterSpacing: "0.3em", fontFamily: "'Barlow Condensed', sans-serif" }}
//                   >
//                     Tradição Além das Quadras
//                   </p>
//                   {["Conquistas em equipe", "Altura nos torneios", "Títulos marcantes", "Líder por natureza"].map((attr) => (
//                     <div key={attr} className="flex items-center gap-2 mb-1.5">
//                       <span className="text-yellow-400 text-xs">✓</span>
//                       <span className="text-[11px] text-white/40" style={{ fontFamily: "'Barlow', sans-serif" }}>{attr}</span>
//                     </div>
//                   ))}

//                   <div className="flex items-center gap-3 mt-4">
//                     <img src={player.flag} alt={player.countryCode} className="w-6 h-6 object-contain" />
//                     <span
//                       className="text-[10px] font-black uppercase text-white/30"
//                       style={{ letterSpacing: "0.2em", fontFamily: "'Barlow Condensed', sans-serif" }}
//                     >
//                       {player.countryCode}
//                     </span>
//                     <span
//                       className="ml-auto text-2xl font-black"
//                       style={{ color, textShadow: `0 0 20px ${color}88`, fontFamily: "'Oswald', sans-serif" }}
//                     >
//                       {player.rating}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Stats */}
//                 {player.stats && (
//                   <div className="px-5 py-4 space-y-4">
//                     <div className="flex items-center gap-4 pb-4 border-b border-white/5">
//                       <div className="w-8 h-8 rounded flex items-center justify-center text-sm flex-shrink-0" style={{ background: `${color}22`, color }}>
//                         ⚽
//                       </div>
//                       <div>
//                         <p className="text-2xl font-black text-white leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
//                           {player.stats.gols}
//                         </p>
//                         <div className="flex gap-4 mt-1">
//                           <div>
//                             <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Assistências</p>
//                             <p className="text-sm font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{player.stats.assistencias}</p>
//                           </div>
//                           <div>
//                             <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Cartões</p>
//                             <p className="text-sm font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{player.stats.cartoes}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-4 pb-4 border-b border-white/5">
//                       <div className="w-8 h-8 rounded flex items-center justify-center text-sm flex-shrink-0" style={{ background: `${color}22`, color }}>
//                         🏆
//                       </div>
//                       <div>
//                         <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Jogos</p>
//                         <p className="text-2xl font-black text-white leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>{player.stats.jogos}</p>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-3 gap-2 pb-2">
//                       <div>
//                         <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Rating</p>
//                         <p className="text-xl font-black" style={{ color, fontFamily: "'Oswald', sans-serif" }}>{player.rating}</p>
//                       </div>
//                       <div>
//                         <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Gols</p>
//                         <p className="text-xl font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>{player.stats.gols}</p>
//                       </div>
//                       <div>
//                         <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>Assist</p>
//                         <p className="text-xl font-black" style={{ color, fontFamily: "'Oswald', sans-serif" }}>{player.stats.assistencias}</p>
//                       </div>
//                     </div>

//                     <div className="flex flex-col items-center pt-3 border-t border-white/5">
//                       <img src="/img/Logo_do_bcl_futsal.webp" alt="Escudo BCL" className="w-14 h-14 object-contain opacity-70" />
//                       <p
//                         className="mt-1 text-white/40 text-xs font-bold"
//                         style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
//                       >
//                         B.C.L Futsal
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 <button
//                   onClick={onClose}
//                   className="absolute top-4 right-4 z-30 w-8 h-8 flex items-center justify-center text-white/30 hover:text-white transition-colors text-lg"
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


























import { motion, AnimatePresence } from "framer-motion"
import type { Player } from "../data/players"
import PlayerCardMobile from "./PlayerCardMobile"
import PlayerCardDesktop from "./PlayerCardDesktop"

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
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pointer-events-none overflow-y-auto"
          >
       <div
  className="relative w-full max-w-4xl pointer-events-auto overflow-hidden my-auto rounded-xl"
  style={{
    background: "linear-gradient(135deg, #0d0f1e 0%, #0a0c18 60%, #12091e 100%)",
    boxShadow: `0 0 40px ${color}55`,
  }}
>
  <PlayerCardMobile player={player} color={color} />
  <PlayerCardDesktop player={player} color={color} />

  {/* Botão fechar */}
  <button
    onClick={onClose}
    className="absolute top-4 right-4 z-30 w-8 h-8 flex items-center justify-center text-white/30 hover:text-white transition-colors text-lg"
  >
    ✕
  </button>
</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}