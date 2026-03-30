import { motion } from "framer-motion"
import logo from "../assets/Logo_do_bcl_futsal.webp"
import Jogador from "../assets/fundo_quadra.webp"

const stats = [
  { num: "25+", label: "Anos de história" },
  { num: "2", label: "Quadros ativos" },
  { num: "2000", label: "Fundação" },
  { num: "SP", label: "São Paulo" },
]

export default function Hero() {
  return (
    <section
      id="Home"
      className="relative h-screen flex items-center overflow-hidden bg-[#05060F]"
      style={{
        backgroundImage: `url(${Jogador})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* ATMOSPHERIC GLOW */}
      <div className="absolute w-[700px] h-[700px] bg-yellow-400/5 blur-[140px] left-[-300px] top-0 rounded-full pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-purple-700/15 blur-[120px] left-[100px] top-[50px] rounded-full pointer-events-none" />

      {/* GRID TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-col items-start max-w-2xl">

          {/* SEASON BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="block w-2 h-2 rounded-full bg-yellow-400"
            />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-yellow-400/80">
              Temporada 2026
            </span>
          </motion.div>

          {/* LOGO + TITLE */}
          <div className="flex items-center gap-5 mb-6">
            <motion.img
              src={logo}
              alt="BCL Logo"
              initial={{ y: 60, scale: 1.3, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-[80px] md:w-[110px] drop-shadow-[0_0_30px_rgba(250,204,21,0.3)]"
            />
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[clamp(48px,8vw,100px)] font-black leading-none tracking-tight text-white"
            >
              BCL<br />
              <span className="text-yellow-400">FUTSAL</span>
            </motion.h1>
          </div>

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs font-semibold tracking-[0.4em] uppercase text-white/35 mb-10"
          >
            Tradição
            <span className="text-yellow-400/50 mx-2">•</span>
            Raça
            <span className="text-yellow-400/50 mx-2">•</span>
            Competitividade
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex gap-4 flex-wrap"
          >
            <motion.a
              href="#elenco"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 text-xs font-bold tracking-[0.2em] uppercase bg-yellow-400 text-black inline-block transition-colors hover:bg-white"
              style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}
            >
              Ver Elenco
            </motion.a>

            <motion.a
              href="#jogos"
              whileHover={{ scale: 1.04, borderColor: "rgba(250,204,21,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 text-xs font-bold tracking-[0.2em] uppercase border border-white/20 text-white/70 hover:text-white inline-block transition-colors duration-200"
            >
              Próximo Jogo
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* STATS STRIP — maior e mais visível */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 z-10 flex border-t border-yellow-400/15 bg-black/70 backdrop-blur-lg"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex-1 py-6 px-4 flex flex-col gap-2 border-r border-white/5 last:border-r-0 group hover:bg-yellow-400/5 transition-colors duration-300"
          >
            <span className="text-3xl md:text-4xl font-black text-yellow-400 leading-none"
              style={{ textShadow: "0 0 20px rgba(250,204,21,0.4)" }}
            >
              {s.num}
            </span>
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 group-hover:text-white/60 transition-colors duration-300">
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}