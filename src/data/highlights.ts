export type Highlight = {
  id: number
  title: string
  description?: string
  video: string
  thumbnail?: string
}

export const highlights: Highlight[] = [
  {
    id: 1,
    title: "Leões da Praça VS B.C.L",
    description: "Jogo Oficial da FutLiga",
    video: "https://www.youtube.com/watch?v=XTXGUJxFlhU",
     thumbnail: "/img/leoes_bcl.webp",
  },
  {
    id: 2,
    title: "Melhores Momentos",
    description: "Confira os melhores lances do jogo",
    video: "/videos/mnm.mp4",
    thumbnail: "/img/nvd.webp",
  },
  {
    id: 3,
    title: "Em Breve!",
    description: "Veja os dribles e gols do craque",
    video: "/videos/craque.mp4",
    thumbnail: "/img/nvd.webp",
  },
]





