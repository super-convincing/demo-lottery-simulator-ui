import { create } from 'zustand';
import type { LotterySimulatorState } from './simulatorClass';

export interface StoreState extends LotterySimulatorState {
  isDrawerOpen: boolean;
}

export const useStore = create<StoreState>(() => ({
  // simulator state elements
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

  // other state elements
  isDrawerOpen: false,
}));
