// import { motion } from "framer-motion"
// import type { Player } from "../data/players"

// type Props = {
//   player: Player
//   rotation?: number
// }

// function getBorderColor(rating: number) {
//   if (rating >= 90) return "#FFD700"
//   if (rating >= 85) return "#00429c"
//   if (rating >= 80) return "#8d100a"
//   return "#6B7280"
// }

// function getBorderGlow(rating: number) {
//   if (rating >= 90) return "0 0 16px #FFD70088"
//   if (rating >= 85) return "0 0 16px #A855F788"
//   if (rating >= 80) return "0 0 16px #22D3EE88"
//   return "0 0 10px #6B728066"
// }

// const octClip =
//   "polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)"

// export default function PlayerCard({ player, rotation = 0 }: Props) {
//   const borderColor = getBorderColor(player.rating ?? 0)
//   const borderGlow = getBorderGlow(player.rating ?? 0)

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


//   {/* NÚMERO WATERMARK */}
//          <div className="absolute top-2 right-3 text-[72px] font-black leading-none text-white/5 group-hover:text-yellow-400/8 transition-colors duration-300 select-none pointer-events-none z-10">
//            {player.number}
//         </div>


//        {/* NÚMERO BADGE */}
// <div className="absolute top-3 left-3 z-30">
//   <span
//     className="flex items-center justify-center w-10 h-10 rounded-full 
//                bg-gradient-to-br from-indigo-800 to-grey-700 
//                text-white font-extrabold text-lg shadow-lg"
//   >
//     {player.number}
//   </span>
// </div>

//          {/* CAPTAIN */}
//          {player.captain && (
//            <div className="absolute top-3 right-3 z-30">
//              <span className="inline-block bg-yellow-400 text-black text-[9px] font-black tracking-[0.2em] uppercase px-2 py-0.5">
//                ★ CAP
//              </span>
//            </div>
//          )}



//         {/* IMAGEM DO JOGADOR */}
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

//           {/* BANDEIRA */}
//           {player.flag && (
//             <div className="flex items-center gap-1.5 mt-2">
//               <span className="text-[9px] font-black tracking-[0.2em] uppercase text-white/50">
//                 {/* {player.countryCode.slice(0, 2)}  */} {/*sigla "BRA"*/}
//               </span>
//               <img
//                 src={player.flag}
//                 alt="bandeira"
//                 className="w-5 h-5 object-contain"
//               />
//               <span className="text-[9px] font-black tracking-[0.2em] uppercase text-white/30">
//                 {player.countryCode} 
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

function getBorderColor(rating: number) {
  if (rating >= 90) return "#FFD700"
  if (rating >= 85) return "#00429c"
  if (rating >= 80) return "#8d100a"
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
  const borderGlow  = getBorderGlow(player.rating ?? 0)

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
        {/* NÚMERO WATERMARK — fundo grande */}
        <div className="absolute top-2 right-3 text-[72px] font-black leading-none text-white/5 group-hover:text-yellow-400/8 transition-colors duration-300 select-none pointer-events-none z-10">
          {player.number}
        </div>

        {/* NÚMERO ESTILO JERSEY — igual à imagem de referência */}
        <div className="absolute top-3 left-3 z-30">
          <span
            className="font-black leading-none select-none"
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              color: borderColor,
              textShadow: `0 0 20px ${borderColor}88, 2px 2px 0px rgba(0,0,0,0.8)`,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
            }}
          >
            {player.number}
          </span>
        </div>

        {/* CAPTAIN */}
        {player.captain && (
          <div className="absolute top-3 right-3 z-30">
            <span className="inline-block bg-yellow-400 text-black text-[9px] font-black tracking-[0.2em] uppercase px-2 py-0.5">
              ★ CAP
            </span>
          </div>
        )}

        {/* IMAGEM */}
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
                {player.countryCode}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}