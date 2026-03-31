

// type PlayerStatsProps = {
//   stats: {
//     gols: number
//     assistencias: number
//     cartoes: number
//     jogos: number
//   }
//   rating: number
//   color: string
// }

// export default function PlayerStats({ stats, rating, color }: PlayerStatsProps) {
//   return (
//     <div className="space-y-4 relative z-10">
//       {/* Bloco de gols, assistências e cartões */}
//       <div className="flex items-center gap-4 pb-4 border-b border-white/5">
//         <div
//           className="w-8 h-8 rounded flex items-center justify-center text-sm flex-shrink-0"
//           style={{ background: `${color}22`, color }}
//         >
//           ⚽
//         </div>
//         <div>
//           <p className="text-2xl font-black text-white leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
//             {stats.gols}
//           </p>
//           <div className="flex gap-4 mt-1">
//             <div>
//               <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
//                 Assistências
//               </p>
//               <p className="text-sm font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
//                 {stats.assistencias}
//               </p>
//             </div>
//             <div>
//               <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
//                 Cartões
//               </p>
//               <p className="text-sm font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
//                 {stats.cartoes}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bloco de jogos */}
//       <div className="flex items-center gap-4 pb-4 border-b border-white/5">
//         <div
//           className="w-8 h-8 rounded flex items-center justify-center text-sm flex-shrink-0"
//           style={{ background: `${color}22`, color }}
//         >
//           🏆
//         </div>
//         <div>
//           <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
//             Jogos
//           </p>
//           <p className="text-2xl font-black text-white leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
//             {stats.jogos}
//           </p>
//         </div>
//       </div>

//       {/* Grid com rating, gols e assistências */}
//       <div className="grid grid-cols-3 gap-2 pb-2">
//         <div>
//           <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
//             Rating
//           </p>
//           <p className="text-xl font-black" style={{ color, fontFamily: "'Oswald', sans-serif" }}>
//             {rating}
//           </p>
//         </div>
//         <div>
//           <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
//             Gols
//           </p>
//           <p className="text-xl font-black text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
//             {stats.gols}
//           </p>
//         </div>
//         <div>
//           <p className="text-[8px] uppercase text-white/30" style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
//             Assist
//           </p>
//           <p className="text-xl font-black" style={{ color, fontFamily: "'Oswald', sans-serif" }}>
//             {stats.assistencias}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }



type PlayerStatsProps = {
  stats: {
    gols: number
    assistencias: number
    cartoesAmarelos: number
    cartoesVermelhos: number
    jogos: number
  }
  rating: number
  color: string
}

export default function PlayerStats({ stats, rating, color }: PlayerStatsProps) {
  return (
    <div className="space-y-4 relative z-10">
      {/* Bloco de gols, assistências */}
      <div className="flex justify-between pb-4 border-b border-white/5">
        <div>
          <p className="text-[8px] uppercase text-white/30 mb-1"
             style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
            Gols
          </p>
          <p className="text-2xl font-black text-white leading-none"
             style={{ fontFamily: "'Oswald', sans-serif" }}>
            {stats.gols}
          </p>
        </div>
        <div>
          <p className="text-[8px] uppercase text-white/30 mb-1"
             style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
            Assistências
          </p>
          <p className="text-2xl font-black text-white leading-none"
             style={{ fontFamily: "'Oswald', sans-serif" }}>
            {stats.assistencias}
          </p>
        </div>
      </div>

      {/* Cartões separados */}
      <div className="flex justify-between pb-4 border-b border-white/5">
        <div>
          <p className="text-[8px] uppercase text-white/30 mb-1"
             style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
            Cartões Amarelos
          </p>
          <p className="text-2xl font-black text-yellow-400 leading-none"
             style={{ fontFamily: "'Oswald', sans-serif" }}>
            {stats.cartoesAmarelos}
            
          </p>
        </div>
        <div>
          <p className="text-[8px] uppercase text-white/30 mb-1"
             style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
            Cartões Vermelhos
          </p>
          <p className="text-2xl font-black text-red-500 leading-none"
             style={{ fontFamily: "'Oswald', sans-serif" }}>
            {stats.cartoesVermelhos}
            
          </p>
        </div>
      </div>

      {/* Bloco de jogos */}
      <div className="pb-4 border-b border-white/5">
        <p className="text-[8px] uppercase text-white/30 mb-1"
           style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
          Jogos
        </p>
        <p className="text-2xl font-black text-white leading-none"
           style={{ fontFamily: "'Oswald', sans-serif" }}>
          {stats.jogos}
        </p>
      </div>

      {/* Rating isolado */}
      <div>
        <p className="text-[8px] uppercase text-white/30 mb-1"
           style={{ letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>
          Rating
        </p>
        <p className="text-xl font-black"
           style={{ color, fontFamily: "'Oswald', sans-serif" }}>
          {rating}
        </p>
      </div>
    </div>
  )
}