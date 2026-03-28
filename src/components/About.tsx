import { motion } from "framer-motion"

const stats = [
  { num: "2000", label: "Ano de fundação" },
  { num: "25+", label: "Anos de história" },
  { num: "2", label: "Quadros ativos" },
  { num: "SP", label: "Sul de São Paulo" },
]

export default function About() {
  return (
    <section id="About" className="relative py-28 bg-[#07080F] text-white overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/15 to-transparent" />

      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 text-[200px] font-black leading-none text-white/[0.015] select-none pointer-events-none whitespace-nowrap pl-4 hidden lg:block"
        aria-hidden="true"
      >
        BCL
      </div>

      <div className="absolute w-[500px] h-[500px] bg-yellow-400/3 blur-[140px] rounded-full top-1/2 -translate-y-1/2 right-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold tracking-[0.35em] uppercase text-yellow-400 mb-4">
              Fundado em 18/06/2000
            </p>
            <h2 className="text-[clamp(40px,5vw,68px)] font-black leading-none tracking-tight mb-8">
              Sobre o<br />
              <span className="text-yellow-400">Clube</span>
            </h2>

            <p className="text-white/50 leading-relaxed text-base max-w-md mb-6">
              O BCL Futsal é um clube masculino adulto fundado em 18 de junho de 2000,
              com sede na região Sul de São Paulo — SP. Competimos na FutLiga com dois
              quadros ativos, construindo nossa história com raça e determinação
              dentro das quatro linhas.
            </p>

            <p className="text-white/30 leading-relaxed text-sm max-w-md">
              Mais de 25 anos de futsal paulistano, focados no desenvolvimento
              dos atletas e na formação de verdadeiros campeões.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Futsal", "Adulto Masculino", "2 Quadros"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold tracking-[0.2em] uppercase text-yellow-400/50 border border-yellow-400/15 px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 w-16 h-[2px] bg-yellow-400/40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-3"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="group relative border border-white/5 hover:border-yellow-400/20 bg-[#0E1020] p-7 transition-colors duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-4xl font-black text-yellow-400 leading-none mb-2">{s.num}</div>
                <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/30">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />
    </section>
  )
}