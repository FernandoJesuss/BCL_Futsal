import { motion } from "framer-motion"

// ─────────────────────────────────────────────────────────────
//  TROFÉUS — edite aqui para atualizar títulos e anos
// ─────────────────────────────────────────────────────────────
const trophies = [
  {
    id: 1,
    name: "Copa dos Campeões FutLiga",
    years: ["2022", "2023"],
  },
  {
    id: 2,
    name: "Copa Regional",
    years: ["2021", "2024"],
  },
  {
    id: 3,
    name: "Liga Municipal",
    years: ["2020", "2021", "2023"],
  },
  {
    id: 4,
    name: "Outro Título",
    years: ["2019"],
  },
]

// ── SVG Troféus ───────────────────────────────────────────────
function TrophyA() {
  return (
    <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M28 8h24v2H28z" fill="currentColor"/>
      <path d="M24 10h32c0 18-6 32-16 40C30 42 24 28 24 10z" fill="currentColor"/>
      <path d="M14 12h10c0 12 3 22 8 30-8-4-14-16-18-30z" fill="currentColor" opacity="0.6"/>
      <path d="M66 12h-10c0 12-3 22-8 30 8-4 14-16 18-30z" fill="currentColor" opacity="0.6"/>
      <path d="M36 50h8v16h-8z" fill="currentColor"/>
      <path d="M26 66h28v4H26z" fill="currentColor"/>
      <path d="M22 70h36v6H22z" fill="currentColor"/>
      <circle cx="40" cy="32" r="6" fill="currentColor" opacity="0.3"/>
    </svg>
  )
}

function TrophyB() {
  return (
    <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="40" cy="28" rx="20" ry="24" fill="currentColor"/>
      <ellipse cx="40" cy="28" rx="14" ry="18" fill="currentColor" opacity="0.3"/>
      <path d="M20 28c-8 0-12-6-10-14l10 4z" fill="currentColor" opacity="0.7"/>
      <path d="M60 28c8 0 12-6 10-14l-10 4z" fill="currentColor" opacity="0.7"/>
      <path d="M36 52h8v14h-8z" fill="currentColor"/>
      <path d="M26 66h28v4H26z" fill="currentColor"/>
      <path d="M22 70h36v6H22z" fill="currentColor"/>
      <circle cx="40" cy="26" r="5" fill="currentColor" opacity="0.4"/>
    </svg>
  )
}

function TrophyC() {
  return (
    <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M30 6h20l4 44H26L30 6z" fill="currentColor"/>
      <path d="M26 50h28l-4 8H30l-4-8z" fill="currentColor"/>
      <path d="M20 14h10c-1 14-4 26-10 32 0-10 2-22 0-32z" fill="currentColor" opacity="0.5"/>
      <path d="M60 14h-10c1 14 4 26 10 32 0-10-2-22 0-32z" fill="currentColor" opacity="0.5"/>
      <path d="M34 58h12v12H34z" fill="currentColor"/>
      <path d="M26 70h28v4H26z" fill="currentColor"/>
      <path d="M22 74h36v6H22z" fill="currentColor"/>
    </svg>
  )
}

function TrophyD() {
  return (
    <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="40" cy="20" r="16" fill="currentColor"/>
      <circle cx="40" cy="20" r="10" fill="currentColor" opacity="0.3"/>
      <path d="M32 36h16l4 20H28l4-20z" fill="currentColor"/>
      <path d="M20 18c-6 2-8 10-4 16l8-6z" fill="currentColor" opacity="0.6"/>
      <path d="M60 18c6 2 8 10 4 16l-8-6z" fill="currentColor" opacity="0.6"/>
      <path d="M34 56h12v12H34z" fill="currentColor"/>
      <path d="M26 68h28v4H26z" fill="currentColor"/>
      <path d="M22 72h36v6H22z" fill="currentColor"/>
    </svg>
  )
}

const trophyComponents = [TrophyA, TrophyB, TrophyC, TrophyD]

export default function Trophies() {
  return (
    <section id="Trofeus" className="relative py-24 bg-[#07080F] text-white overflow-hidden">

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

      {/* GLOW */}
      <div className="absolute w-[600px] h-[300px] bg-yellow-400/3 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-[0.35em] uppercase text-yellow-400 mb-3">
            Conquistas
          </p>
          <h2 className="text-[clamp(32px,5vw,56px)] font-black leading-none tracking-tight text-white uppercase">
            Eu nunca me esquecerei...
          </h2>
        </motion.div>

        {/* TROPHIES ROW */}
        <div className="flex items-end justify-around gap-6 flex-wrap md:flex-nowrap">
          {trophies.map((trophy, i) => {
            const TrophyIcon = trophyComponents[i % trophyComponents.length]
            return (
              <motion.div
                key={trophy.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center gap-4 group flex-1 min-w-[120px] max-w-[200px]"
              >
                {/* TROPHY ICON */}
                <div
                  className="w-20 h-28 text-white/80 group-hover:text-yellow-400 transition-colors duration-300"
                  style={{ filter: "drop-shadow(0 0 0px transparent)", transition: "filter 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.filter = "drop-shadow(0 0 12px rgba(250,204,21,0.5))")}
                  onMouseLeave={e => (e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)")}
                >
                  <TrophyIcon />
                </div>

                {/* DIVIDER LINE */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-yellow-400/40 transition-colors duration-300" />

                {/* TROPHY NAME */}
                <p className="text-[10px] font-black tracking-[0.15em] uppercase text-white/60 group-hover:text-white/90 text-center transition-colors duration-300 leading-tight">
                  {trophy.name}
                </p>

                {/* YEAR BADGES */}
                <div className="flex flex-wrap justify-center gap-1.5">
                  {trophy.years.map((year) => (
                    <span
                      key={year}
                      className="text-[9px] font-black tracking-wider border border-white/20 group-hover:border-yellow-400/40 px-2 py-1 rounded-full text-white/50 group-hover:text-yellow-400/80 transition-colors duration-300"
                    >
                      {year}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />
    </section>
  )
}