// export type Player = {
//   id: number
//   name: string
//   nickname?: string
//   number: number
//   position: string
//   rating: number
//   flag: string
//   countryCode: string   
//   image: string
//   captain?: boolean
// }

// export const players: Player[] = [
//   {
//     id: 1,
//     name: "Falcão",
//     nickname: "O Artilheiro",
//     number: 12,
//     position: "Goleiro",
//     rating: 92,
//    flag: "/img/brasil_one.webp",
//     countryCode: "bra", 
//     image: "/img/fifa_one.webp",
//     captain: true,
//   },
//   {
//     id: 2,
//     name: "Mend",
//     nickname: "O Muro",
//     number: 2,
//     position: "Ala",
//     rating: 88,
//    flag: "/img/brasil_one.webp",
//     countryCode: "bra", 
//       image: "/img/fifa_one.webp",
//     captain:false,
//   },
//   {
//     id: 3,
//     name: "Roberto Carlos",
//     nickname: "A Bala",
//     number: 3,
//     position: "Ala",
//     rating: 85,
//     flag: "/img/brasil_one.webp",
//     countryCode: "bra", 
//       image: "/img/fifa_one.webp",
//     captain:false,
//   },
//   {
//     id: 4,
//     name: "Meymar Jr",
//     nickname: "O Driblador",
//     number: 4,
//     position: "Pivô",
//     rating: 87,
//     flag: "/img/brasil_one.webp",
//     countryCode: "bra", 
//      image: "/img/fifa_one.webp",
//     captain:false,
//   },
//   {
//     id: 5,
//     name: "Manoel Tobias",
//     nickname: "O Mágico",
//     number: 5,
//     position: "Fixo",
//     rating: 90,
//     flag: "/img/brasil_one.webp",
//     countryCode: "bra", 
//      image: "/img/fifa_one.webp",
//     captain:false,
//   },
//   {
//     id: 6,
//     name: "Jogador 6",   
//     nickname: "",
//     number: 6,
//     position: "Ata",
//     rating: 82,
//    flag: "/img/brasil_one.webp",
//     countryCode: "bra", 
//       image: "/img/fifa_one.webp",
//     captain:false,
//   },
//   {
//     id: 7,
//     name: "Jogador 7",
//     nickname: "",
//     number: 7,
//     position: "Ata",
//     rating: 81,
//     flag: "/img/brasil_one.webp",
//     countryCode: "bra", 
//        image: "/img/fifa_one.webp",
//     captain:false,
//   },
//   {
//     id: 8,
//     name: "Jogador 8",
//     nickname: "",
//     number: 8,
//     position: "Ata",
//     rating: 80,
//     flag: "/img/brasil_one.webp",
//     countryCode: "bra", 
//       image: "/img/fifa_one.webp",
//     captain:false,
//   },
//   {
//     id: 9,
//     name: "Jogador 9",
//     nickname: "",
//     number: 9,
//     position: "Ata",
//     rating: 79,
//      flag: "/img/brasil_one.webp",
//     countryCode: "bra", 
//      image: "/img/fifa_one.webp",
//     captain:false,
//   },
//   {
//     id: 10,
//     name: "Ronaldinho",
//     nickname: "O Fenômeno",
//     number: 10,
//     position: "Pivô",
//     rating: 91,    
//     flag: "/img/brasil_one.webp",
//     countryCode: "bra", 
//    image: "/img/fifa_one.webp",
//     captain:false,
//   },
// ]







// ─────────────────────────────────────────────────────────────
//  ELENCO BCL FUTSAL — edite aqui para atualizar os jogadores
// ─────────────────────────────────────────────────────────────
//  rating → cor da borda do card:
//    90+  → Dourado | 85-89 → Azul | 80-84 → Vermelho | <80 → Cinza
//  flag   → caminho da imagem da bandeira em /public/img/
//  image  → caminho da foto do jogador em /public/img/
// ─────────────────────────────────────────────────────────────

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