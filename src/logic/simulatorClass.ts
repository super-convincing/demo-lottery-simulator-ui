import * as crypto from 'crypto';

export interface LotterySimulatorState {
  isRunning: boolean;
  isJackpot: boolean;
  isRandom: boolean;
  round: number;
  roundMatched: number;
  userNumbers: number[];
  roundNumbers: number[];
  timeout: number;
  won2: number;
  won3: number;
  won4: number;
  won5: number;
}

export class LotterySimulator {
  // state variables
  private isRunning: boolean = false;
  private isJackpot: boolean = false;
  private isRandom: boolean = false;
  private round: number = 0;
  private roundMatched: number = 0;
  private userNumbers: number[] = get5RandomNumber();
  private roundNumbers: number[] = [];
  private timeout: number = 100;
  private won2: number = 0;
  private won3: number = 0;
  private won4: number = 0;
  private won5: number = 0;
  // other variables
  private interval: NodeJS.Timeout | null = null;
  private cb: (state: LotterySimulatorState) => void;

  constructor(cb: (state: LotterySimulatorState) => void) {
    this.cb = cb;
  }

  getState(): LotterySimulatorState {
    return {
      isRunning: this.isRunning,
      isJackpot: this.isJackpot,
      isRandom: this.isRandom,
      round: this.round,
      roundMatched: this.roundMatched,
      userNumbers: this.userNumbers,
      roundNumbers: this.roundNumbers,
      timeout: this.timeout,
      won2: this.won2,
      won3: this.won3,
      won4: this.won4,
      won5: this.won5,
    }
  }

  start(timeout: number = this.timeout) {
    this.timeout = timeout;
    if (!this.isRunning) {
      this.isRunning = true;
      this.isJackpot = false;
      this.interval = setInterval(() => this.oneRound(), this.timeout);
    }
  }

  stop() {
    this.isRunning = false;
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.executeCallback();
  }

  reset() {
    this.isRunning = false;
    this.isJackpot = false;
    this.isRandom = false;
    this.timeout = 100;
    this.round = 0;
    this.roundMatched = 0;
    this.userNumbers = get5RandomNumber();
    this.roundNumbers = [];
    this.won2 = 0;
    this.won3 = 0;
    this.won4 = 0;
    this.won5 = 0;
    this.executeCallback();
  }

  setCallback(cb: (state: LotterySimulatorState) => void) {
    this.cb = cb;
  }

  private executeCallback() {
    this.cb(this.getState());
  }

  setTimeoutMS(timeout: number) {
    this.timeout = timeout;
    if (this.isRunning) {
      this.stop();
      this.start();
    } else {
      this.executeCallback();
    }
  }

  setPlayWithRandom(isRandom: boolean) {
    this.isRandom = isRandom;
    if (!this.isRunning) {
      this.executeCallback();
    }
  }

  setUserNumbers(numbers: number[] = get5RandomNumber()) {
    this.isRandom = false;
    this.userNumbers = numbers;
    if (!this.isRunning) {
      this.executeCallback();
    }
  }

  private serRoundNumbers() {
    this.roundNumbers = get5RandomNumber();
  }

  private checkMatchingNumbers(): number {
    const matchedNumbers = this.userNumbers.filter((num) =>
      this.roundNumbers.includes(num)
    ).length;

    switch (matchedNumbers) {
      case 2:
        this.won2++;
        break;
      case 3:
        this.won3++;
        break;
      case 4:
        this.won4++;
        break;
      case 5:
        this.won5++;
        break;
      default:
        break;
    }
    return matchedNumbers;
  }

  private oneRound() {
    if (this.isRunning) {
      this.round++;
      this.serRoundNumbers();
      if (this.isRandom) {
        this.userNumbers = get5RandomNumber();
      }
      this.roundMatched = this.checkMatchingNumbers();
      if (this.roundMatched === 5) {
        this.isJackpot = true;
        this.isRunning = false;
      }
      this.executeCallback();
    }
  }
}

function get5RandomNumber() {
  return getRandomNumbers(5, 1, 90)
}

function getRandomNumber(min: number, max: number): number {
  const range = max - min + 1;
  const bytesNeeded = Math.ceil(Math.log2(range) / 8);
  let randomNumber = 0;

  do {
    const randomBytes = crypto.randomBytes(bytesNeeded);
    randomNumber = randomBytes.readUIntBE(0, bytesNeeded);
  } while (randomNumber >= range);

  return randomNumber + min;
}

function getRandomNumbers(count: number, min: number, max: number): number[] {
  if (count > max - min + 1) {
    throw new Error('Count must be less than or equal to the range size.');
  }

  const numbers: number[] = [];
  while (numbers.length < count) {
    const randomNumber = getRandomNumber(min, max);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers.sort((a, b) => a - b);
}
