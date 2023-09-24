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
