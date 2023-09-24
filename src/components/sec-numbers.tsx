import { CLotteryNumbers } from '../atoms';

export const SecWinningNumbers = ({ numbers }: { numbers: number[] }) => {
  return <div className='sec-winning-number sec-lottery-numbers'>
    <CLotteryNumbers text={'Winning numbers:'} numbers={numbers} />
  </div>
}

export const SecYourNumbers = ({ numbers }: { numbers: number[] }) => {
  return <div className='sec-winning-number sec-lottery-numbers'>
    <CLotteryNumbers text={'Your numbers:'} numbers={numbers} />
  </div>
}
