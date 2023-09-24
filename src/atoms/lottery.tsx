import { CNumber } from './fields'

export const CWon = ({ nrMatches, nrWon }: { nrMatches: number, nrWon: number }) => {
  return <div className='comp-won'>
    <span className='nr-matches'>{nrMatches} matches</span>
    <span className='nr-won'><CNumber value={nrWon} /></span>
  </div>
}

export const CLotteryNumbers = ({ numbers, text }: { numbers: number[], text: string }) => {
  return <div className='comp-lottery-numbers'>
    <div className='text'>{text}</div>
    <div className='numbers'>
      {numbers.map((n, i) => <CLotteryNumber key={i} number={n} />)}
    </div>
  </div>
}

export const CLotteryNumber = ({ number }: { number: number }) => {
  return <div className='comp-lottery-number'>
    <span>{number}</span>
  </div>
}
