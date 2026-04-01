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