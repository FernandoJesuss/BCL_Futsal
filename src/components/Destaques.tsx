import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { highlights, type Highlight } from "../data/highlights"
import quadra from "../assets/fundo_quadra.png"



function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return match ? match[1] : null
}


function getYouTubeThumbnail(url: string): string {
  const id = getYouTubeId(url)
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : ""
}



function VideoModal({
  highlight,
  onClose,
}: {
  highlight: Highlight
  onClose: () => void
}) {

  const videoUrl = highlight.video || ""
  const ytId = videoUrl ? getYouTubeId(videoUrl) : null


  const isValidLocalVideo = videoUrl && !ytId && videoUrl !== "#" && videoUrl.startsWith("/")

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#0B0D1A] border border-white/10 overflow-hidden"
      >
        {/* GOLD TOP LINE */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent z-10" />

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 z-20 text-white/50 hover:text-white text-2xl leading-none transition-colors"
        >
          ✕
        </button>

        {/* TITLE */}
        <div className="px-6 pt-5 pb-3">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-yellow-400 mb-1">
            Destaque
          </p>
          <h3 className="text-lg font-black text-white">{highlight.title}</h3>
          {highlight.description && (
            <p className="text-xs text-white/30 mt-1">{highlight.description}</p>
          )}
        </div>

        {/* VIDEO - TOTALMENTE PROTEGIDO */}
        <div className="aspect-video w-full bg-black">
          {ytId ? (
            // ✅ YouTube VÁLIDO
            <iframe
              src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&mute=1`}
              title={highlight.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : isValidLocalVideo ? (

            <video
              src={videoUrl}
              controls
              autoPlay
              muted
              playsInline
              poster={highlight.thumbnail || undefined}
              className="w-full h-full object-contain"
              onError={() => console.error('❌ Vídeo LOCAL falhou:', videoUrl)}
              onLoadedData={() => console.log('✅ Vídeo LOCAL OK:', videoUrl)}
            />
          ) : (
            // ❌ Fallback para qualquer erro/vazio
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-white/20 p-8">
              <span className="text-5xl">🎬</span>
              <p className="text-xs tracking-widest uppercase">Vídeo inválido: "{videoUrl || 'vazio'} "</p>
              <p className="text-xs opacity-50">Verifique o arquivo em public/videos/</p>
            </div>
          )}
        </div>

        {/* BOTTOM ACCENTS */}
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-yellow-400/20" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-yellow-400/20" />
      </motion.div>
    </motion.div>
  )
}

// ── Card de highlight ────────────────────────────────────────
function HighlightCard({
  highlight,
  index,
  onClick,
}: {
  highlight: Highlight
  index: number
  onClick: () => void
}) {
  const ytThumb = getYouTubeThumbnail(highlight.video)
  const thumbSrc = highlight.thumbnail || ytThumb

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      onClick={onClick}
      className="group relative overflow-hidden cursor-pointer border border-white/5 hover:border-yellow-400/20 transition-colors duration-300"
    >
      {/* THUMBNAIL */}
      <div className="h-60 relative overflow-hidden bg-gradient-to-br from-[#1a0d2e] to-black/90">
        {thumbSrc && (
          <img
            src={thumbSrc}
            alt={highlight.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
            onError={() => console.error('❌ Thumbnail erro:', thumbSrc)}
          />
        )}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* PLAY BUTTON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-yellow-400/90 group-hover:bg-yellow-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg shadow-yellow-400/30">
            <div className="border-t-[8px] border-b-[8px] border-l-[14px] border-t-transparent border-b-transparent border-l-black ml-1" />
          </div>
        </div>

        {/* HOVER GLOW */}
        <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* TOP GOLD LINE ON HOVER */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* INFO */}
      <div className="p-4 bg-black/70 backdrop-blur-sm">
        <p className="text-sm font-bold text-white/80 group-hover:text-white transition-colors duration-200">
          {highlight.title}
        </p>
        {highlight.description && (
          <p className="text-xs text-white/30 mt-1 leading-snug">{highlight.description}</p>
        )}
      </div>
    </motion.div>
  )
}


// ── Componente principal ─────────────────────────────────────
export default function Highlights() {
  const [selected, setSelected] = useState<Highlight | null>(null)

  return (
    <>
      <section
        id="Destaques"
        className="relative py-28 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${quadra})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        <div className="absolute w-[600px] h-[600px] bg-purple-700/20 blur-[140px] rounded-full top-[-100px] left-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs font-bold tracking-[0.35em] uppercase text-yellow-400 mb-3">
              Mídias
            </p>
            <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-none tracking-tight text-white">
              Destaques
            </h2>
          </motion.div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <HighlightCard
                key={h.id}
                highlight={h}
                index={i}
                onClick={() => setSelected(h)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <VideoModal highlight={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  )
}