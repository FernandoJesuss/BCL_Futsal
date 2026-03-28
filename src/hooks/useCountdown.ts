import { useEffect, useState } from "react"
import { getCountdown } from "../utils/countdown"

export const useCountdown = (date: string) => {
  const [time, setTime] = useState(getCountdown(date))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCountdown(date))
    }, 1000)

    return () => clearInterval(interval)
  }, [date])

  return time
}