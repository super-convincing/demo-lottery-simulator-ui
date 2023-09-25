import { getSimulatoreInstance } from "./simulatorInstance"
import { updateStore, useStore } from "./store"

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

export const getInstanceState = () => {
  return getSimulatoreInstance().getState()
}

export const getStoreState = () => {
  return useStore.getState()
}