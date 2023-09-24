import { create } from 'zustand';
import type { LotterySimulatorState } from '../utils';

export const useStore = create<LotterySimulatorState>(() => ({
  isRunning: false,
  isJackpot: false,
  isRandom: false,
  round: 0,
  roundMatched: 0,
  userNumbers: [],
  roundNumbers: [],
  timeout: 100,
  won2: 0,
  won3: 0,
  won4: 0,
  won5: 0,
}));

export const updateStore = (state: Partial<LotterySimulatorState>) => {
  useStore.setState(state);
}