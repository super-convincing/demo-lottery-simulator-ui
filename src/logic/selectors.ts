import { useStore } from "./store";

export const $isJackpot = () => useStore((state) => state.isJackpot)
export const $isRandom = () => useStore((state) => state.isRandom)
export const $isRunning = () => useStore((state) => state.isRunning)
export const $round = () => useStore((state) => state.round)
export const $roundNumbers = () => useStore((state) => state.roundNumbers)
export const $userNumbers = () => useStore((state) => state.userNumbers)
export const $timeout = () => useStore((state) => state.timeout)
export const $won2 = () => useStore((state) => state.won2)
export const $won3 = () => useStore((state) => state.won3)
export const $won4 = () => useStore((state) => state.won4)
export const $won5 = () => useStore((state) => state.won5)
export const $roundMatched = () => useStore((state) => state.roundMatched)
