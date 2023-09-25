import { CLotteryNumbers } from '../atoms';
import { roundNumbersSelector, userNumbersSelector } from '../logic';

export const SecWinningNumbers = () => {
  const numbers = roundNumbersSelector();
  return <div className='sec-winning-number sec-lottery-numbers'>
    <CLotteryNumbers text={'Winning numbers:'} numbers={numbers} />
  </div>
}

export const SecYourNumbers = () => {
  const numbers = userNumbersSelector();
  return <div className='sec-winning-number sec-lottery-numbers'>
    <CLotteryNumbers text={'Your numbers:'} numbers={numbers} />
  </div>
}
