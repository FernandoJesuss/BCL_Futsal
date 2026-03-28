// export function getCountdown(targetDate) {
//   const now = new Date().getTime()
//   const distance = new Date(targetDate).getTime() - now

//   return {
//     days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//     hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
//     minutes: Math.floor((distance / 1000 / 60) % 60)
//   }
// }


export function getCountdown(date) {
  const diff = new Date(date) - new Date()

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor(diff / (1000 * 60 * 60) % 24),
    minutes: Math.floor(diff / (1000 * 60) % 60)
  }
}