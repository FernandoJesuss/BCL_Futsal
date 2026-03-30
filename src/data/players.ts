export type Player = {
  id: number
  name: string
  nickname?: string
  number: number
  position: string
  rating: number
  flag: string        // ex: "/img/brasil_one.webp"
  countryCode: string // ex: "BRA"
  image: string       // ex: "/img/jogador1.webp"
  captain?: boolean
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
    image: "/img/fifa_one.webp",
    captain: true,
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
    image: "/img/fifa_one.webp",
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
    image: "/img/fifa_one.webp",
  },
  {
    id: 4,
    name: "Meymar Jr",
    nickname: "O Driblador",
    number: 4,
    position: "Pivô",
    rating: 87,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
    image: "/img/fifa_one.webp",
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
    image: "/img/fifa_one.webp",
  },
  {
    id: 6,
    name: "Jogador 6",
    number: 6,
    position: "Ata",
    rating: 82,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
    image: "/img/fifa_one.webp",
  },
  {
    id: 7,
    name: "Jogador 7",
    number: 7,
    position: "Ata",
    rating: 81,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
    image: "/img/fifa_one.webp",
  },
  {
    id: 8,
    name: "Jogador 8",
    number: 8,
    position: "Ata",
    rating: 80,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
    image: "/img/fifa_one.webp",
  },
  {
    id: 9,
    name: "Jogador 9",
    number: 9,
    position: "Ata",
    rating: 79,
    flag: "/img/brasil_one.webp",
    countryCode: "BRA",
    image: "/img/fifa_one.webp",
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
    image: "/img/fifa_one.webp",
  },
]