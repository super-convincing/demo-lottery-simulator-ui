export const CLotteryNumbers = ({ numbers, text, onClickNumbers }: { numbers: number[], text: string, onClickNumbers?: VoidFunction }) => {
  return <div className='comp-lottery-numbers'>
    <div className='text'>{text}</div>
    <div className='numbers' onClick={onClickNumbers}>
      {numbers.map((n, i) => <CLotteryNumber key={i} number={n} />)}
    </div>
  </div>
}

export const CLotteryNumber = ({ number, onClick, selected = false }: { number: number, onClick?: VoidFunction, selected?: boolean }) => {
  const className = 'comp-lottery-number' + (selected ? ' selected' : '') + (onClick ? ' clickable' : '')
  return <div className={className} onClick={onClick}>
    <span>{number}</span>
  </div>
}
