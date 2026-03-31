import type { Player } from "../data/players"

export default function PlayerImage({ player, color }: { player: Player, color: string }) {
  return (
    <div className="relative flex items-end justify-center overflow-hidden">
      {/* Gradiente radial */}
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 60%, ${color}22 0%, transparent 70%)` }} />
      
      {/* Gradiente linear no rodapé */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, #0a0c18, transparent)" }} />
      
      {/* Número em marca d’água */}
      <div
        className="absolute bottom-10 right-4 font-black select-none pointer-events-none"
        style={{ fontSize: "120px", color: `${color}15`, lineHeight: 1, fontFamily: "'Oswald', sans-serif" }}
      >
        {player.number}
      </div>
      
      {/* Foto do jogador */}
      <img
        src={player.image}
        alt={player.name}
        className="relative z-10 w-full h-auto object-contain object-bottom"
        style={{ filter: "brightness(1.1) contrast(1.05)" }}
      />
    </div>
  )
}