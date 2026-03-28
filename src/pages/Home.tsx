import { motion } from "framer-motion"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Squad from "../components/Squad"
import Match from "../components/Match"
import Destaques from "../components/Destaques"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import About from "../components/About"

export default function Home() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
      // initial={{ opacity: 0, y: 40 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Header />
      <Hero />
      <Squad />
      <Match />
      <About />
      <Destaques />
      <Contact />
      <Footer />
    </motion.div>
  )
}
