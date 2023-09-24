import { getSimulatoreInstance } from "./lottery-instance"

export const actStart = () => {
  getSimulatoreInstance().start()
}

export const actStop = () => {
  getSimulatoreInstance().stop()
}

export const actReset = () => {
  getSimulatoreInstance().reset()
}

export const actSetPlayWithRandom = (playWithRandom: boolean) => {
  getSimulatoreInstance().setPlayWithRandom(playWithRandom)
}

export const actSetUserNumbers = (userNumbers: number[]) => {
  getSimulatoreInstance().setUserNumbers(userNumbers)
}

export const actSetTimeoutMS = (timeout: number) => {
  getSimulatoreInstance().setTimeoutMS(timeout)
}

