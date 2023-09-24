import { LotterySimulator } from '../utils';
import { updateStore } from './store';

let lotterySimulator: LotterySimulator;

export const getSimulatoreInstance = () => {
  if (!lotterySimulator) {
    lotterySimulator = new LotterySimulator(updateStore);
  }
  return lotterySimulator;
}

