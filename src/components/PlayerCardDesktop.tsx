import PlayerInfo from "../components/PlayerInfo"
import PlayerImage from "../components/PlayerImage"
import PlayerStats from "./StatusInfo" // se você renomeou, mantenha assim
import type { Player } from "../data/players"

export default function PlayerCardDesktop({ player, color }: { player: Player, color: string }) {
  return (
    <div className="hidden lg:grid grid-cols-[280px_1fr_280px] min-h-[420px]">
      {/* LEFT */}
      <PlayerInfo player={player} color={color} />

      {/* CENTER */}
      <PlayerImage player={player} color={color} />

      {/* RIGHT */}
      <div className="relative flex flex-col justify-between p-8 border-l border-white/5">
        {player.stats && <PlayerStats stats={player.stats} rating={player.rating} color={color} />}
        <div className="flex flex-col items-center mt-4 relative z-10">
          <img src="/img/Logo_do_bcl_futsal.webp" alt="Escudo BCL" className="w-14 h-14 object-contain opacity-80" />
          <p className="mt-1 text-white/40 text-xs font-bold">B.C.L Futsal</p>
        </div>
      </div>
    </div>
  )
}