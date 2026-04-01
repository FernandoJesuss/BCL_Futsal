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