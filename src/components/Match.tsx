import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import logo from "/Logo_do_bcl_futsal.png"
import { nextMatch } from "../data/matchData"

function useCountdown(targetDate: string) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const update = () => {
      const diff = new Date(targetDate).getTime() - Date.now()
      if (diff <= 0) return
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return time
}

export default function Match() {
  const { days, hours, minutes, seconds } = useCountdown(nextMatch.date)
  const { away } = nextMatch

  return (
    <section id="jogos" className="relative py-28 bg-[#05060F] text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-[#07080F] via-[#05060F] to-[#07080F]" />
      <div className="absolute w-[700px] h-[700px] bg-yellow-400/4 blur-[180px] rounded-full top-[-200px] left-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-purple-700/8 blur-[100px] rounded-full top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold tracking-[0.35em] uppercase text-yellow-400 mb-3">
            Calendário
          </p>
          <h2 className="text-[clamp(40px,6vw,72px)] font-black leading-none tracking-tight text-white">
            Próximo Jogo
          </h2>
        </motion.div>

        {/* MATCH CARD */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative border border-white/5 bg-[#0B0D1A] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <div className="p-10 md:p-14">

            {/* TEAMS */}
            <div className="grid grid-cols-3 items-center gap-4 mb-10">

              {/* HOME — BCL */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400/15 blur-2xl rounded-full scale-150" />
                  <img
                    src={logo}
                    alt="BCL Futsal"
                    className="relative w-20 md:w-28 drop-shadow-[0_0_24px_rgba(250,204,21,0.3)]"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-black tracking-[0.15em] uppercase text-white">
                    {nextMatch.home.name}
                  </p>
                  <span className="inline-block mt-1 text-[9px] font-bold tracking-[0.25em] uppercase text-yellow-400 border border-yellow-400/30 px-2 py-0.5">
                    Casa
                  </span>
                </div>
              </motion.div>

              {/* VS */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-5xl md:text-7xl font-black text-yellow-400 leading-none drop-shadow-[0_0_30px_rgba(250,204,21,0.3)]">
                  VS
                </span>
                <div className="flex gap-2 items-center">
                  <span className="w-8 h-[1px] bg-white/10" />
                  <span className="w-2 h-[1px] bg-yellow-400/40" />
                  <span className="w-8 h-[1px] bg-white/10" />
                </div>
              </div>

              {/* AWAY — com logo ou iniciais */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center gap-4"
              >
                {/* SE TIVER LOGO → mostra imagem | SE NÃO → mostra iniciais */}
                {away.logo ? (
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full scale-150" />
                    <img
                      src={away.logo}
                      alt={away.name}
                      className="relative w-20 md:w-28 object-contain drop-shadow-[0_0_16px_rgba(255,255,255,0.1)]"
                    />
                  </div>
                ) : (
                  <div
                    className="w-20 h-20 md:w-28 md:h-28 border border-white/10 bg-white/5 flex items-center justify-center"
                    style={{
                      clipPath:
                        "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
                    }}
                  >
                    <span className="text-2xl font-black tracking-widest text-white/40">
                      {away.initials}
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <p className="text-sm font-black tracking-[0.15em] uppercase text-white">
                    {away.name}
                  </p>
                  <span className="inline-block mt-1 text-[9px] font-bold tracking-[0.25em] uppercase text-white/30 border border-white/10 px-2 py-0.5">
                    Fora
                  </span>
                </div>
              </motion.div>
            </div>

            {/* DIVIDER */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent mb-8" />

            {/* MATCH INFO */}
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl font-black tracking-[0.15em] text-white uppercase">
                {nextMatch.dateLabel}
              </p>
              <p className="flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-white/30 mt-2">
                <span className="text-yellow-400/40">📍</span>
                {nextMatch.venue}
              </p>
            </div>

            {/* COUNTDOWN */}
            <div className="grid grid-cols-4 gap-3 mb-10">
              {[
                { val: days, label: "Dias" },
                { val: hours, label: "Horas" },
                { val: minutes, label: "Min" },
                { val: seconds, label: "Seg" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-black/30 border border-white/5 py-4"
                >
                  <span className="text-3xl md:text-4xl font-black text-yellow-400 leading-none tabular-nums">
                    {String(t.val).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/25 mt-2">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex justify-center gap-3 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase bg-yellow-400 text-black hover:bg-white transition-colors duration-200"
                style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}
              >
                Assistir
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase border border-white/15 text-white/60 hover:text-white hover:border-yellow-400/40 transition-colors duration-200"
              >
                Ingressos
              </motion.button>
            </div>
          </div>

          {/* CORNER ACCENTS */}
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-yellow-400/20" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-yellow-400/20" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />
    </section>
  )
}