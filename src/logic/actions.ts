import { getSimulatoreInstance } from "./instance"
import { updateStore } from "./store"

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

export const actUpdateStore = () => {
  updateStore(getSimulatoreInstance().getState())
}