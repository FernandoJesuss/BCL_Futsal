export function getCountdown(targetDate: string) {
  const now = new Date().getTime()
  const distance = new Date(targetDate).getTime() - now

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / 1000 / 60) % 60)
  }
}