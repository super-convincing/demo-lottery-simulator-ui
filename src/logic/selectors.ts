import { useStore } from "./store";

export const isJackpotSelector = () => useStore((state) => state.isJackpot)
export const isRandomSelector = () => useStore((state) => state.isRandom)
export const isRunningSelector = () => useStore((state) => state.isRunning)
export const rouncSelector = () => useStore((state) => state.round)
export const roundNumbersSelector = () => useStore((state) => state.roundNumbers)
export const userNumbersSelector = () => useStore((state) => state.userNumbers)
export const timeoutSelector = () => useStore((state) => state.timeout)
export const won2Selector = () => useStore((state) => state.won2)
export const won3Selector = () => useStore((state) => state.won3)
export const won4Selector = () => useStore((state) => state.won4)
export const won5Selector = () => useStore((state) => state.won5)
export const roundMatchedSelector = () => useStore((state) => state.roundMatched)