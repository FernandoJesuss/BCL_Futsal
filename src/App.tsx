// import { Routes, Route, useLocation } from "react-router-dom"
// import { AnimatePresence } from "framer-motion"
// import Home from "./pages/Home"
// // pode criar outras páginas depois

// function App() {
//   const location = useLocation()

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </AnimatePresence>
//   )
// }

// export default App



import { lazy, Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

// ── LAZY LOADING ─────────────────────────────────────────────
// Cada página só é carregada quando o usuário navega até ela.
// Isso reduz o bundle inicial e melhora o tempo de carregamento.
const Home = lazy(() => import("./pages/Home"))
// Quando criar novas páginas, importe assim:
// const Elenco  = lazy(() => import("./pages/Elenco"))
// const Contato = lazy(() => import("./pages/Contato"))

// ── LOADING FALLBACK ─────────────────────────────────────────
// Tela exibida enquanto a página carrega (muito rápido em produção)
function PageLoader() {
  return (
    <div className="fixed inset-0 bg-[#05060F] flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner dourado simples */}
        <div className="w-10 h-10 border-2 border-yellow-400/20 border-t-yellow-400 rounded-full animate-spin" />
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-yellow-400/50">
          BCL Futsal
        </span>
      </div>
    </div>
  )
}

function App() {
  const location = useLocation()

  return (
    // Suspense envolve as rotas — mostra o loader enquanto a página carrega
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          {/* Adicione novas rotas aqui: */}
          {/* <Route path="/elenco"  element={<Elenco />} /> */}
          {/* <Route path="/contato" element={<Contato />} /> */}
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

export default App