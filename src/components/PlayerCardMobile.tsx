import type { Player } from "../data/players"
import PlayerInfo from "./PlayerInfo"
import PlayerStats from "./StatusInfo"

export default function PlayerCardMobile({ player, color }: { player: Player, color: string }) {
  return (
    <div className="lg:hidden flex flex-col">
      {/* Foto do jogador */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse at 50% 60%, ${color}22 0%, transparent 70%)` }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: "linear-gradient(to top, #0a0c18, transparent)" }}
        />
        <div
          className="absolute bottom-3 right-3 font-black select-none pointer-events-none z-10"
          style={{ fontSize: "90px", color: `${color}12`, lineHeight: 1, fontFamily: "'Oswald', sans-serif" }}
        >
          {player.number}
        </div>
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover object-top relative z-20"
          style={{ filter: "brightness(1.1) contrast(1.05)" }}
        />
      </div>

      {/* Info do jogador */}
      <div className="px-5 pt-4 pb-4 border-b border-white/5">
        <PlayerInfo player={player} color={color} />
      </div>

      {/* Stats */}
      {player.stats && (
        <div className="px-5 py-4">
          <PlayerStats stats={player.stats} rating={player.rating} color={color} />
          <div className="flex flex-col items-center pt-3 border-t border-white/5">
            <img src="/img/Logo_do_bcl_futsal.webp" alt="Escudo BCL" className="w-14 h-14 object-contain opacity-70" />
            <p
              className="mt-1 text-white/40 text-xs font-bold"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
            >
              B.C.L Futsal
            </p>
          </div>
        </div>
      )}
    </div>
  )
}