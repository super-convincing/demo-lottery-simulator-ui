import { CLotteryNumbers } from '../atoms';
import { $roundNumbers, $userNumbers } from '../logic';

export const SecWinningNumbers = () => {
  const numbers = $roundNumbers();
  return <div className='sec-winning-number sec-lottery-numbers'>
    <CLotteryNumbers text={'Winning numbers:'} numbers={numbers} />
  </div>
}

export const SecYourNumbers = () => {
  const numbers = $userNumbers();
  return <div className='sec-winning-number sec-lottery-numbers'>
    <CLotteryNumbers text={'Your numbers:'} numbers={numbers} />
  </div>
}
