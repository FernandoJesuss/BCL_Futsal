import { motion } from "framer-motion"

const trophies = [
  {
    id: 1,
    name: "Copa dos Campeões FutLiga",
    years: ["2022", "2023"],
    image: "/img/cp.webp",
  },
  {
    id: 2,
    name: "Copa Regional",
    years: ["2021", "2024"],
    image: "/img/cp.webp",
  },
  {
    id: 3,
    name: "Liga Municipal",
    years: ["2020", "2021", "2023"],
    image: "/img/cp.webp",
  },
  // {
  //   id: 4,
  //   name: "Outro Título",
  //   years: ["2019"],
  //   image: "https://images.unsplash.com/photo-1551958219-acbc595b50ef?w=400&q=80",
  // },
]

export default function Trophies() {
  return (
    <section id="Trofeus" className="relative py-24 bg-[#000421] text-white overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
      <div className="absolute w-[800px] h-[300px] bg-yellow-400/3 blur-[140px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-[0.35em] uppercase text-yellow-400 mb-4">
            Conquistas
          </p>
          <h2 className="text-[clamp(28px,4vw,52px)] font-black leading-none tracking-tight text-white uppercase">
            Eu nunca me esquecerei...
          </h2>
        </motion.div>

        {/* FILEIRA HORIZONTAL — igual à referência */}
        <div className="flex items-end justify-between gap-4 overflow-x-auto pb-2">
          {trophies.map((trophy, i) => (
            <motion.div
              key={trophy.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col items-center gap-5 flex-1 min-w-[160px] cursor-pointer"
            >
              {/* IMAGEM DO TROFÉU — grande, sem card */}
              <div className="relative flex items-end justify-center w-full h-48">
                {/* GLOW */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-400/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.img
                  src={trophy.image}
                  alt={trophy.name}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-auto object-contain relative z-10"
                  style={{
                    filter: "grayscale(30%) brightness(0.9) contrast(1.1)",
                    transition: "filter 0.4s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLImageElement).style.filter =
                      "grayscale(0%) brightness(1.15) drop-shadow(0 0 24px rgba(250,204,21,0.4))"
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLImageElement).style.filter =
                      "grayscale(30%) brightness(0.9) contrast(1.1)"
                  }}
                />
              </div>

              {/* LINHA SEPARADORA — igual à referência */}
              <div className="w-full h-[1px] bg-white/10 group-hover:bg-yellow-400/30 transition-colors duration-300" />

              {/* NOME */}
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/50 group-hover:text-white/80 text-center transition-colors duration-300 leading-snug px-2">
                {trophy.name}
              </p>

              {/* BADGES DOS ANOS — estilo da referência (círculo com borda) */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {trophy.years.map((year) => (
                  <span
                    key={year}
                    className="text-[9px] font-black tracking-wider px-2.5 py-1 rounded-full border border-white/20 text-white/40 group-hover:border-yellow-400/50 group-hover:text-yellow-400/80 transition-all duration-300"
                  >
                    {year}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />
    </section>
  )
}