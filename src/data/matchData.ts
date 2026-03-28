// ─────────────────────────────────────────────
//  PRÓXIMO JOGO — edite aqui para atualizar o site
// ─────────────────────────────────────────────

export const nextMatch = {
  date: "2026-04-01T20:00:00",       // data/hora do jogo (ISO)
  dateLabel: "01 Abril · 20:00",     // texto exibido na tela
  venue: "Ginásio Municipal — São Paulo, SP",

  home: {
    name: "BCL Futsal",
    // logo vem do /Logo_do_bcl_futsal.png (importado no componente)
  },

  away: {
    name: "Rival City",
    initials: "RC",                  // exibido se não tiver logo
    logo: "/public/rival.png",                        // coloque o caminho da imagem aqui, ex: "/logos/rival-city.png"
                                     // se vazio, mostra as iniciais
  },
}