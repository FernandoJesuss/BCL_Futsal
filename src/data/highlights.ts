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
    title: "Golaço",
    description: "O gol mais bonito da temporada",
    video: "/videos/log.mp4",
    thumbnail: "#",
  },
  {
    id: 2,
    title: "Melhores Momentos",
    description: "Confira os melhores lances do jogo",
    video: "https://www.youtube.com/watch?v=_KNzZisIjy8",
    thumbnail: "#",
  },
  {
    id: 3,
    title: "Craque do Jogo",
    description: "Veja os dribles e gols do craque",
    video: "/videos/craque.mp4",
    thumbnail: "#",
  },
]
