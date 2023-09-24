import { LotterySimulator } from './lottery-logic';
import { updateStore } from './store';

let lotterySimulator: LotterySimulator;

export const getSimulatoreInstance = () => {
  if (!lotterySimulator) {
    lotterySimulator = new LotterySimulator(updateStore);
  }
  return lotterySimulator;
}

