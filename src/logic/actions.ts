import { getSimulatoreInstance } from "./simulatorInstance"
import { useStore, StoreState } from "./store"

// ------------------ store actions/requests ------------------

export const setStoreState = (state: Partial<StoreState>) => {
  useStore.setState(state);
}

export const getStoreState = () => {
  return useStore.getState()
}

// ------------------ instance actions/requests ------------------
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
  setStoreState(getSimulatoreInstance().getState())
}

export const getInstanceState = () => {
  return getSimulatoreInstance().getState()
}


// ------------------ set own numbers ------------------
export const actOpenDrawer = () => {
  useStore.setState({ isDrawerOpen: true })
}
export const actCloseDrawer = () => {
  useStore.setState({ isDrawerOpen: false })
}
export const onClickSetOwnNumbers = () => {
  actStop()
  actOpenDrawer()
}
