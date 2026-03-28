// import { motion } from "framer-motion"

// import type { Player } from "../data/players"

// type Props = {
//   player: Player
// }

// export default function PlayerCard({ player }: Props) {
//   return (
//     <motion.div
//       whileHover={{ y: -8, scale: 1.03 }}
//       transition={{ type: "spring", stiffness: 280, damping: 22 }}
//       className="relative w-full max-w-[280px] mx-auto group cursor-pointer"
//     >
//       {/* OUTER GLOW — aparece no hover */}
//       <div className="absolute -inset-[2px] bg-gradient-to-b from-yellow-400/60 via-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
//         style={{
//           clipPath: "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)"
//         }}
//       />

//       {/* CARD */}
//       <div
//         className="relative overflow-hidden bg-gradient-to-b from-[#111827] via-[#0d1020] to-[#07080F] border border-white/8 group-hover:border-yellow-400/20 transition-colors duration-300"
//         style={{
//           clipPath: "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)"
//         }}
//       >
//         {/* ATMOSPHERIC GLOW INSIDE */}
//         <div className="absolute inset-0 bg-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-0" />

//         {/* NUMBER — ghost watermark */}
//         <div className="absolute top-2 right-3 text-[72px] font-black leading-none text-white/5 group-hover:text-yellow-400/8 transition-colors duration-300 select-none pointer-events-none z-10">
//           {player.number}
//         </div>

//         {/* NUMBER — visible badge */}
//         <div className="absolute top-3 left-3 z-30">
//           <span className="inline-block bg-black/60 backdrop-blur-sm px-2 py-0.5 text-xs font-black tracking-[0.15em] text-yellow-400 border-l-2 border-yellow-400">
//             #{player.number}
//           </span>
//         </div>

//         {/* CAPTAIN BADGE */}
//         {player.captain && (
//           <div className="absolute top-3 right-3 z-30">
//             <span className="inline-block bg-yellow-400 text-black text-[9px] font-black tracking-[0.2em] uppercase px-2 py-0.5">
//               ★ CAP
//             </span>
//           </div>
//         )}

//         {/* IMAGE */}
//         <div className="relative h-60 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-t from-[#07080F] via-transparent to-transparent z-20" />
//           <motion.img
//             src={player.image}
//             alt={player.name}
//             className="w-full h-full object-cover object-top relative z-10 filter brightness-90 group-hover:brightness-105 transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.5 }}
//           />
//         </div>

//         {/* INFO */}
//         <div className="relative z-20 px-4 pt-3 pb-5 border-t border-yellow-400/10 group-hover:border-yellow-400/25 transition-colors duration-300">
//           <h3 className="text-base font-black tracking-wide text-white uppercase truncate">
//             {player.name}
//           </h3>
//           <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-yellow-400/50 mt-0.5">
//             {player.position}
//           </p>
//         </div>

//       </div>
//     </motion.div>
//   )
// }






// import { motion } from "framer-motion"
// import type { Player } from "../data/players"

// type Props = {
//   player: Player
//   rotation?: number
// }

// function flagCode(flag: string) {
//   const map: Record<string, string> = {
//     "🇧🇷": "BRA", "🇵🇹": "POR", "🇦🇷": "ARG",
//     "🇪🇸": "ESP", "🇨🇴": "COL", "🇺🇾": "URU", "🇫🇷": "FRA",
//   }
//   return map[flag] ?? "INT"
// }

// function getBorderColor(rating: number) {
//   if (rating >= 90) return "#FFD700"   // dourado
//   if (rating >= 85) return "#A855F7"   // roxo
//   if (rating >= 80) return "#22D3EE"   // azul
//   return "rgba(255,255,255,0.1)"       // padrão
// }

// function getBorderGlow(rating: number) {
//   if (rating >= 90) return "0 0 16px #FFD70066"
//   if (rating >= 85) return "0 0 16px #A855F766"
//   if (rating >= 80) return "0 0 16px #22D3EE66"
//   return "none"
// }

// export default function PlayerCard({ player, rotation = 0 }: Props) {
//   const borderColor = getBorderColor(player.rating ?? 0)
//   const borderGlow = getBorderGlow(player.rating ?? 0)

//   const octClip = "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)"

//   return (
//     <motion.div
//       whileHover={{ y: -8, scale: 1.03, rotate: 0 }}
//       transition={{ type: "spring", stiffness: 280, damping: 22 }}
//       className="relative w-full max-w-[280px] mx-auto group cursor-pointer"
//       style={{ rotate: `${rotation}deg` }}
//     >
//       {/* OUTER GLOW — borda colorida por rating */}
//       <div
//         className="absolute -inset-[2px]"
//         style={{
//           clipPath: octClip,
//           background: `linear-gradient(180deg, ${borderColor} 0%, ${borderColor}44 50%, ${borderColor} 100%)`,
//           boxShadow: borderGlow,
//           opacity: 0.8,
//         }}
//       />

//       {/* CARD */}
//       <div
//         className="relative overflow-hidden bg-gradient-to-b from-[#111827] via-[#0d1020] to-[#07080F]"
//         style={{ clipPath: octClip }}
//       >
//         {/* ATMOSPHERIC GLOW INSIDE */}
//         <div
//           className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-0"
//           style={{ background: `radial-gradient(ellipse at 50% 30%, ${borderColor}22 0%, transparent 70%)` }}
//         />

//         {/* NUMBER — ghost watermark */}
//         <div className="absolute top-2 right-3 text-[72px] font-black leading-none text-white/5 group-hover:text-yellow-400/8 transition-colors duration-300 select-none pointer-events-none z-10">
//           {player.number}
//         </div>

//         {/* NUMBER — visible badge */}
//         <div className="absolute top-3 left-3 z-30">
//           <span
//             className="inline-block bg-black/60 backdrop-blur-sm px-2 py-0.5 text-xs font-black tracking-[0.15em] border-l-2"
//             style={{ color: borderColor, borderColor: borderColor }}
//           >
//             #{player.number}
//           </span>
//         </div>

//         {/* CAPTAIN BADGE */}
//         {player.captain && (
//           <div className="absolute top-3 right-3 z-30">
//             <span className="inline-block bg-yellow-400 text-black text-[9px] font-black tracking-[0.2em] uppercase px-2 py-0.5">
//               ★ CAP
//             </span>
//           </div>
//         )}

//         {/* IMAGE */}
//         <div className="relative h-60 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-t from-[#07080F] via-transparent to-transparent z-20" />
//           <motion.img
//             src={player.image}
//             alt={player.name}
//             className="w-full h-full object-cover object-top relative z-10 filter brightness-90 group-hover:brightness-105 transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.5 }}
//           />
//         </div>

//         {/* SEPARATOR LINE */}
//         <div
//           className="h-[1px]"
//           style={{
//             background: `linear-gradient(90deg, transparent, ${borderColor}, transparent)`,
//             boxShadow: `0 0 6px ${borderColor}`,
//           }}
//         />

//         {/* INFO */}
//         <div className="relative z-20 px-4 pt-3 pb-4">
//           <h3 className="text-base font-black tracking-wide text-white uppercase truncate">
//             {player.name}
//           </h3>
//           <p className="text-[10px] font-bold tracking-[0.3em] uppercase mt-0.5" style={{ color: `${borderColor}99` }}>
//             {player.position}
//           </p>

//           {/* BANDEIRA + SIGLA */}
//           {player.flag && (
//             <div className="flex items-center gap-1.5 mt-2">
//               <span className="text-[18px] leading-none">{player.flag}</span>
//               <span className="text-[9px] font-black tracking-[0.2em] uppercase text-white/30">
//                 {flagCode(player.flag)}
//               </span>
//             </div>
//           )}
//         </div>

//       </div>
//     </motion.div>
//   )
// }






// import { motion } from "framer-motion"
// import type { Player } from "../data/players"

// type Props = {
//   player: Player
//   rotation?: number
// }

// function flagCode(flag: string) {
//   const map: Record<string, string> = {
//     "🇧🇷": "BRA", "🇵🇹": "POR", "🇦🇷": "ARG",
//     "🇪🇸": "ESP", "🇨🇴": "COL", "🇺🇾": "URU", "🇫🇷": "FRA",
//   }
//   return map[flag] ?? "INT"
// }

// function getBorderColor(rating: number) {
//   if (rating >= 90) return "#FFD700"
//   if (rating >= 85) return "#A855F7"
//   if (rating >= 80) return "#22D3EE"
//   return "#6B7280" // cinza visível para rating baixo
// }

// function getBorderGlow(rating: number) {
//   if (rating >= 90) return "0 0 16px #FFD70088"
//   if (rating >= 85) return "0 0 16px #A855F788"
//   if (rating >= 80) return "0 0 16px #22D3EE88"
//   return "0 0 10px #6B728066"
// }

// const octClip = "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)"

// export default function PlayerCard({ player, rotation = 0 }: Props) {
//   const borderColor = getBorderColor(player.rating ?? 0)
//   const borderGlow  = getBorderGlow(player.rating ?? 0)

//   return (
//     <motion.div
//       whileHover={{ y: -8, scale: 1.03, rotate: 0 }}
//       transition={{ type: "spring", stiffness: 280, damping: 22 }}
//       className="relative w-full max-w-[280px] mx-auto group cursor-pointer"
//       style={{ rotate: `${rotation}deg` }}
//     >
//       {/* BORDA COLORIDA */}
//       <div
//         className="absolute -inset-[2px]"
//         style={{
//           clipPath: octClip,
//           background: `linear-gradient(180deg, ${borderColor} 0%, ${borderColor}55 50%, ${borderColor} 100%)`,
//           boxShadow: borderGlow,
//         }}
//       />

//       {/* CARD */}
//       <div
//         className="relative overflow-hidden bg-gradient-to-b from-[#111827] via-[#0d1020] to-[#07080F]"
//         style={{ clipPath: octClip }}
//       >
//         {/* GLOW INTERNO */}
//         <div
//           className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-0"
//           style={{ background: `radial-gradient(ellipse at 50% 30%, ${borderColor}22 0%, transparent 70%)` }}
//         />

//         {/* NÚMERO WATERMARK */}
//         <div className="absolute top-2 right-3 text-[72px] font-black leading-none text-white/5 group-hover:text-yellow-400/8 transition-colors duration-300 select-none pointer-events-none z-10">
//           {player.number}
//         </div>

//         {/* NÚMERO BADGE */}
//         <div className="absolute top-3 left-3 z-30">
//           <span
//             className="inline-block bg-black/60 backdrop-blur-sm px-2 py-0.5 text-xs font-black tracking-[0.15em] border-l-2"
//             style={{ color: borderColor, borderColor }}
//           >
//             #{player.number}
//           </span>
//         </div>

//         {/* CAPTAIN */}
//         {player.captain && (
//           <div className="absolute top-3 right-3 z-30">
//             <span className="inline-block bg-yellow-400 text-black text-[9px] font-black tracking-[0.2em] uppercase px-2 py-0.5">
//               ★ CAP
//             </span>
//           </div>
//         )}

//         {/* IMAGEM */}
//         <div className="relative h-60 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-t from-[#07080F] via-transparent to-transparent z-20" />
//           <motion.img
//             src={player.image}
//             alt={player.name}
//             className="w-full h-full object-cover object-top relative z-10 filter brightness-90 group-hover:brightness-105 transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.5 }}
//           />
//         </div>

//         {/* LINHA SEPARADORA NEON */}
//         <div
//           className="h-[1px]"
//           style={{
//             background: `linear-gradient(90deg, transparent, ${borderColor}, transparent)`,
//             boxShadow: `0 0 6px ${borderColor}`,
//           }}
//         />

//         {/* INFO */}
//         <div className="relative z-20 px-4 pt-3 pb-4">
//           <h3 className="text-base font-black tracking-wide text-white uppercase truncate">
//             {player.name}
//           </h3>
//           <p
//             className="text-[10px] font-bold tracking-[0.3em] uppercase mt-0.5"
//             style={{ color: `${borderColor}bb` }}
//           >
//             {player.position}
//           </p>

//           BANDEIRA
//           {player.flag && (
//             <div className="flex items-center gap-1.5 mt-2">
//               <span className="text-[18px] leading-none">{player.flag}</span>
//               <span className="text-[9px] font-black tracking-[0.2em] uppercase text-white/30">
//                 {flagCode(player.flag)}
//               </span>
//             </div>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   )
// }





import { motion } from "framer-motion"
import type { Player } from "../data/players"

type Props = {
  player: Player
  rotation?: number
}

function flagCode(flag: string) {
  const map: Record<string, string> = {
    "🇧🇷": "BRA", "🇵🇹": "POR", "🇦🇷": "ARG",
    "🇪🇸": "ESP", "🇨🇴": "COL", "🇺🇾": "URU", "🇫🇷": "FRA",
  }
  return map[flag] ?? "INT"
}

function getBorderColor(rating: number) {
  if (rating >= 90) return "#FFD700"
  if (rating >= 85) return "#A855F7"
  if (rating >= 80) return "#22D3EE"
  return "#6B7280"
}

function getBorderGlow(rating: number) {
  if (rating >= 90) return "0 0 16px #FFD70088"
  if (rating >= 85) return "0 0 16px #A855F788"
  if (rating >= 80) return "0 0 16px #22D3EE88"
  return "0 0 10px #6B728066"
}

const octClip =
  "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)"

export default function PlayerCard({ player, rotation = 0 }: Props) {
  const borderColor = getBorderColor(player.rating ?? 0)
  const borderGlow = getBorderGlow(player.rating ?? 0)

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03, rotate: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="relative w-full max-w-[280px] mx-auto group cursor-pointer"
      style={{ rotate: `${rotation}deg` }}
    >
      {/* BORDA COLORIDA */}
      <div
        className="absolute -inset-[2px]"
        style={{
          clipPath: octClip,
          background: `linear-gradient(180deg, ${borderColor} 0%, ${borderColor}55 50%, ${borderColor} 100%)`,
          boxShadow: borderGlow,
        }}
      />

      {/* CARD */}
      <div
        className="relative overflow-hidden bg-gradient-to-b from-[#111827] via-[#0d1020] to-[#07080F]"
        style={{ clipPath: octClip }}
      >
        {/* IMAGEM DO JOGADOR */}
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

        {/* LINHA SEPARADORA NEON */}
        <div
          className="h-[1px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${borderColor}, transparent)`,
            boxShadow: `0 0 6px ${borderColor}`,
          }}
        />

        {/* INFO */}
        <div className="relative z-20 px-4 pt-3 pb-4">
          <h3 className="text-base font-black tracking-wide text-white uppercase truncate">
            {player.name}
          </h3>
          <p
            className="text-[10px] font-bold tracking-[0.3em] uppercase mt-0.5"
            style={{ color: `${borderColor}bb` }}
          >
            {player.position}
          </p>

          {/* BANDEIRA */}
          {player.flag && (
            <div className="flex items-center gap-1.5 mt-2">
              <img
                src={player.flag}
                alt="bandeira"
                className="w-5 h-5 object-contain"
              />
              <span className="text-[9px] font-black tracking-[0.2em] uppercase text-white/30">
                {flagCode(player.flag)}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}