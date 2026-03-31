import { motion } from "framer-motion";
import { MapPin, SoccerBall, InstagramLogo } from "@phosphor-icons/react";

const contacts = [
  {
    icon: <MapPin size={32} weight="duotone" className="text-yellow-400" />,
    label: "Localização",
    value: "Sul de São Paulo — SP",
    sub: "Brasil",
  },
  {
    icon: <SoccerBall size={32} weight="fill" className="text-yellow-400" />,
    label: "FutLiga",
    value: "futliga.com.br/e/bclfutsal",
    sub: "Perfil oficial da equipe",
    href: "https://futliga.com.br/e/bclfutsal",
  },
  {
    icon: <InstagramLogo size={32} weight="fill" className="text-yellow-400" />,
    label: "Instagram",
    value: "@bclfutsal",
    sub: "Siga e acompanhe",
    href: "https://instagram.com/bclfutsal",
  },
];

export default function Contact() {
  return (
    <section id="Contact" className="relative py-28 bg-[#05060F] text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/15 to-transparent" />
      <div className="absolute w-[600px] h-[600px] bg-purple-700/8 blur-[160px] rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none" />
      <div
        className="absolute right-0 bottom-0 text-[180px] font-black leading-none text-white/[0.018] select-none pointer-events-none whitespace-nowrap pr-4 hidden lg:block"
        aria-hidden="true"
      >
        BCL
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-[0.35em] uppercase text-yellow-400 mb-4">Fale conosco</p>
          <h2 className="text-[clamp(40px,5vw,68px)] font-black leading-none tracking-tight">Contato</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              href={c.href ?? "#"}
              target={c.href ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative border border-white/5 hover:border-yellow-400/20 bg-[#0B0D1A] p-8 transition-colors duration-300 overflow-hidden block cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-3xl mb-5 w-8 h-8 flex items-center justify-center">{c.icon}</div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-yellow-400/60 group-hover:text-yellow-400 transition-colors duration-200 mb-2">
                {c.label}
              </p>
              <p className="text-lg font-black text-white tracking-wide mb-1">{c.value}</p>
              <p className="text-xs text-white/30">{c.sub}</p>
              {c.href && (
                <div className="absolute bottom-6 right-6 text-yellow-400/0 group-hover:text-yellow-400/60 transition-colors duration-300 text-sm font-bold">
                  →
                </div>
              )}
            </motion.a>
          ))}
        </div>

        {/* CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative border border-yellow-400/10 bg-[#0B0D1A] p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b border-l border-yellow-400/20" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-yellow-400/20" />

          <div>
            <p className="text-xl font-black text-white mb-1">Quer fazer parte do BCL Futsal?</p>
            <p className="text-sm text-white/30">
              Fundado em 2000 · Sul de São Paulo · Masculino Adulto · 2 Quadros
            </p>
          </div>

          <motion.a
            href="https://futliga.com.br/e/bclfutsal"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase bg-yellow-400 text-black inline-block"
            style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}
          >
            Ver na FutLiga
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />
    </section>
  );
}
