import type { Player } from "../data/players"

export default function PlayerInfo({ player, color }: { player: Player, color: string }) {
  return (
    <div className="flex flex-col justify-between p-8 border-r border-white/5">
      <div>
        <p
          className="text-[10px] font-bold uppercase mb-1"
          style={{ letterSpacing: "0.3em", color: `${color}bb`, fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Elenco
        </p>
        <h2
          className="text-4xl font-black text-white leading-none mb-1"
          style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "-0.01em" }}
        >
          {player.name}
        </h2>
        {player.nickname && (
          <p className="text-sm text-white/30 mb-6" style={{ fontFamily: "'Barlow', sans-serif", fontStyle: "italic" }}>
            {player.nickname}
          </p>
        )}

        {/* Posição destacada */}

        <p
          className="text-xs font-extrabold uppercase mb-6"
          style={{ letterSpacing: "0.15em", color: `${color}`, fontFamily: "'Oswald', sans-serif" }}
        >
          Posição: {player.position}
        </p>

        {/* Atributos extras */}
        <p
          className="text-[9px] font-bold uppercase text-white/20 mb-4"
          style={{ letterSpacing: "0.3em", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Tradição Além das Quadras
        </p>
        {["Conquistas em equipe", "Altura nos torneios", "Títulos marcantes", "Líder por natureza"].map((attr) => (
          <div key={attr} className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400 text-xs">✓</span>
            <span className="text-[11px] text-white/40" style={{ fontFamily: "'Barlow', sans-serif" }}>{attr}</span>
          </div>
        ))}
      </div>

      {/* País + Rating */}
      <div className="flex items-center gap-3 mt-6">
        <img src={player.flag} alt={player.countryCode} className="w-6 h-6 object-contain" />
        <span
          className="text-[10px] font-black uppercase text-white/30"
          style={{ letterSpacing: "0.2em", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {player.countryCode}
        </span>
        <span
          className="ml-auto text-2xl font-black"
          style={{ color, textShadow: `0 0 20px ${color}88`, fontFamily: "'Oswald', sans-serif" }}
        >
          {player.rating}
        </span>
      </div>
    </div>
  )
}