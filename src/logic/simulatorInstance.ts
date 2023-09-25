import { LotterySimulator } from './simulatorClass';
import { setStoreState } from './actions';

let lotterySimulator: LotterySimulator;

export const getSimulatoreInstance = () => {
  if (!lotterySimulator) {
    lotterySimulator = new LotterySimulator(setStoreState);
  }
  return lotterySimulator;
}

