// import type { Player } from "../types/player"

// export const players: Player[] = [
//   {
//     id: 1,
//     name: "Rafa",
//     number: 10,
//     position: "Pivô",
//     image: "/players/rafa.png",
//     captain: true
//   },
//   {
//     id: 2,
//     name: "Mendes",
//     number: 8,
//     position: "Ala",
//     image: "/players/mendes.png"
//   },
//   {
//       id: 3,
//     name: "Roberto Carlos",
//     number: 6,
//     position: "Ala",
//     image: "/players/roberto carlos.png"
//   },
//   {
//       id: 3,
//     name: "Ronaldinho",
//     number: 9,
//     position: "Ata",
//     image: "/players/ronaldo.png"
//   }
// ]






// // ─────────────────────────────────────────────────────────────
// //  ELENCO BCL FUTSAL — edite aqui para atualizar os jogadores
// // ─────────────────────────────────────────────────────────────
// //
// //  rating: 0-100  → define a cor do card automaticamente:
// //    90+  → Dourado  (ouro)
// //    85+  → Roxo     (neon)
// //    80+  → Azul     (prata)
// //    <80  → Cinza    (bronze)
// //
// //  flag: código do país em emoji  🇧🇷 🇵🇹 🇦🇷 🇪🇸 🇨🇴
// // ─────────────────────────────────────────────────────────────

// export type Player = {
//   id: number
//   name: string
//   nickname?: string   // apelido ex: "O Artilheiro"
//   number: number
//   position: string
//   rating: number      // 0-100
//   flag: string        // emoji da bandeira
//   image: string
//   captain?: boolean
// }

// export const players: Player[] = [
//   {
//     id: 1,
//     name: "Falcão",
//     nickname: "O Artilheiro",
//     number: 12,
//     position: "Ala",
//     rating: 92,
//     flag: "🇧🇷",
//     image: "/falcao.png",
//     captain: true,
//   },
//   {
//     id: 2,
//     name: "Mendes",
//     nickname: "O Muro",
//     number: 8,
//     position: "Ala",
//     rating: 88,
//     flag: "🇧🇷",
//     image: "/Logo_do_bcl_futsal.png",
//   },
//   {
//     id: 3,
//     name: "Roberto Carlos",
//     nickname: "A Bala",
//     number: 6,
//     position: "Ala",
//     rating: 85,
//     flag: "🇧🇷",
//     image: "/Logo_do_bcl_futsal.png",
//   },
//   {
//     id: 4,
//     name: "Meymar Jr",
//     nickname: "O Driblador",
//     number: 9,
//     position: "Pivô",
//     rating: 87,
//     flag: "🇧🇷",
//     image: "/njj.png",
//   },
//   {
//     id: 5,
//     name: "Ronaldinho",
//     nickname: "O Mágico",
//     number: 10,
//     position: "Pivô",
//     rating: 90,
//     flag: "🇧🇷",
//     image: "/rng.png",
//   },
//   // ── adicione mais jogadores aqui ──
// ]







// ─────────────────────────────────────────────────────────────
//  ELENCO BCL FUTSAL — edite aqui para atualizar os jogadores
// ─────────────────────────────────────────────────────────────
//  rating → define a cor do card automaticamente:
//    90+  → Dourado  | 85-89 → Roxo | 80-84 → Azul | <80 → Cinza
//  flag   → emoji da bandeira: 🇧🇷 🇵🇹 🇦🇷 🇪🇸 🇨🇴
// ─────────────────────────────────────────────────────────────

export type Player = {
  id: number
  name: string
  nickname?: string
  number: number
  position: string
  rating: number
  flag: string
  image: string
  captain?: boolean
}

export const players: Player[] = [
  {
    id: 1,
    name: "Falcão",
    nickname: "O Artilheiro",
    number: 12,
    position: "Ala",
    rating: 92,
    flag: "/public/img/brasil.png",
    image: "/falcao.png",
    captain: true,
  },
  {
    id: 2,
    name: "Mendes",
    nickname: "O Muro",
    number: 8,
    position: "Ala",
    rating: 88,
    flag: "/public/img/brasil.png",
    image: "/Logo_do_bcl_futsal.png",
  },
  {
    id: 3,
    name: "Roberto Carlos",
    nickname: "A Bala",
    number: 6,
    position: "Ala",
    rating: 85,
    flag: "/public/img/brasil.png",
    image: "/Logo_do_bcl_futsal.png",
  },
  {
    id: 4,
    name: "Meymar Jr",
    nickname: "O Driblador",
    number: 9,
    position: "Pivô",
    rating: 87,
    flag: "/public/img/brasil.png",
    image: "/njj.png",
  },
  {
    id: 5,
    name: "Ronaldinho",
    nickname: "O Mágico",
    number: 10,
    position: "Pivô",
    rating: 90,
    flag: "/public/img/brasil.png",
    image: "/rng.png",
  },
  {
    id: 6,
    name: "Jogador 6",   // ← troque pelo nome real
    nickname: "",
    number: 9,
    position: "Ata",
    rating: 82,
    flag: "/public/img/brasil.png",
    image: "/Logo_do_bcl_futsal.png",
  },
  {
    id: 7,
    name: "Jogador 7",
    nickname: "",
    number: 9,
    position: "Ata",
    rating: 81,
    flag:"/public/img/brasil.png",
    image: "/Logo_do_bcl_futsal.png",
  },
  {
    id: 8,
    name: "Jogador 8",
    nickname: "",
    number: 9,
    position: "Ata",
    rating: 80,
    flag: "/public/img/brasil.png",
    image: "/Logo_do_bcl_futsal.png",
  },
  {
    id: 9,
    name: "Jogador 9",
    nickname: "",
    number: 9,
    position: "Ata",
    rating: 79,
    flag: "/public/img/brasil.png",
    image: "/Logo_do_bcl_futsal.png",
  },
  {
    id: 10,
    name: "Ronaldinho",
    nickname: "O Fenômeno",
    number: 10,
    position: "Pivô",
    rating: 91,
    
    flag: "/public/img/brasil.png",
    image: "/rng.png",
  },
]