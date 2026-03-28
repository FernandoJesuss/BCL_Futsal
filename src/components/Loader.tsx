import { motion } from "framer-motion"
import logo from "/Logo_do_bcl_futsal.png"

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[999]">

      {/* LOGO */}
      <motion.img
        src={logo}
        alt="BCL Logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="w-[120px]"
      />

      {/* TEXTO */}
      <p className="text-white mt-4 text-sm tracking-widest">
        LOADING EXPERIENCE
      </p>

      {/* BARRA */}
      <div className="w-40 h-[2px] bg-white/20 mt-4 overflow-hidden">
        <motion.div
          className="h-full bg-purple-500"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

    </div>
  )
}