// export type PlayerStats = {
//   gols: number
//   assistencias: number
//   jogos: number
//   cartoes: number
// }

export type PlayerStats = {
  gols: number
  assistencias: number
  jogos: number
  cartoesAmarelos: number
  cartoesVermelhos: number
}

export type Player = {
  id: number
  name: string
  nickname?: string
  number: number
  position: string
  rating: number
  flag: string
  countryCode: string
  image: string
  captain?: boolean
  stats?: PlayerStats
  destaqueSemana?: boolean  // ← marca como destaque da semana
}

export const players: Player[] = [
  {
    id: 1,
    name: "Falcão",
    nickname: "O Artilheiro",
    number: 12,
    position: "Goleiro",
    rating: 92,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
    image: "/img/jogador_card.webp",
    captain: true,
    destaqueSemana: false,
    stats: { gols: 24, assistencias: 12, jogos: 30, cartoesAmarelos: 1, cartoesVermelhos: 0 },
  },
  {
    id: 2,
    name: "Mend",
    nickname: "O Muro",
    number: 2,
    position: "Ala",
    rating: 88,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
      image: "/img/jogador_card.webp",
    stats: { gols: 8, assistencias: 15, jogos: 28, cartoesAmarelos: 3,  cartoesVermelhos: 0   },
  },
  {
    id: 3,
    name: "Roberto Carlos",
    nickname: "A Bala",
    number: 3,
    position: "Ala",
    rating: 85,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
      image: "/img/jogador_card.webp",
    stats: { gols: 11, assistencias: 9, jogos: 25, cartoesAmarelos: 2,  cartoesVermelhos: 0  },
  },
  {
    id: 4,
    name: "Neymar Jr",
    nickname: "O Driblador",
    number: 4,
    position: "Pivô",
    rating: 87,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
     image: "/img/jogador_card.webp",
    stats: { gols: 18, assistencias: 20, jogos: 29, cartoesAmarelos: 4,  cartoesVermelhos: 0  },
  },
  {
    id: 5,
    name: "Manoel Tobias",
    nickname: "O Mágico",
    number: 5,
    position: "Fixo",
    rating: 90,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
     image: "/img/jogador_card.webp",
    stats: { gols: 6, assistencias: 22, jogos: 30, cartoesAmarelos: 1,  cartoesVermelhos: 0  },
  },
  {
    id: 6,
    name: "Jogador 6",
    number: 6,
    position: "Ata",
    rating: 82,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
     image: "/img/jogador_card.webp",
    stats: { gols: 5, assistencias: 4, jogos: 20, cartoesAmarelos: 2,  cartoesVermelhos: 0  },
  },
  {
    id: 7,
    name: "Jogador 7",
    number: 7,
    position: "Ata",
    rating: 81,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
      image: "/img/jogador_card.webp",
    stats: { gols: 4, assistencias: 3, jogos: 18, cartoesAmarelos: 1,  cartoesVermelhos: 0  },
  },
  {
    id: 8,
    name: "Jogador 8",
    number: 8,
    position: "Ata",
    rating: 80,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
     image: "/img/jogador_card.webp",
    stats: { gols: 3, assistencias: 5, jogos: 22, cartoesAmarelos: 0,  cartoesVermelhos: 0  },
  },
  {
    id: 9,
    name: "Jogador 9",
    number: 9,
    position: "Ata",
    rating: 79,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
      image: "/img/jogador_card.webp",
    stats: { gols: 2, assistencias: 2, jogos: 15, cartoesAmarelos: 1,  cartoesVermelhos: 0  },
  },
  {
    id: 10,
    name: "Ronaldinho",
    nickname: "O Fenômeno",
    number: 10,
    position: "Pivô",
    rating: 91,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
      image: "/img/jogador_card.webp",
    stats: { gols: 20, assistencias: 18, jogos: 30, cartoesAmarelos: 2,  cartoesVermelhos: 0  },
  },
]