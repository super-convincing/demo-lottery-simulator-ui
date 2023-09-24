import RandomOff from '../assets/checkboxOff.svg'
import RandomOn from '../assets/checkboxOn.svg'

export const SecPlayRandom = ({ on, toggle }: { on: boolean, toggle: VoidFunction }) => {
  return <div className='sec-play-random'>
    <div className='text'>Play with random numbers:</div>
    <div className='choice'>
      <div className='checkbox' onClick={toggle}>
        <img src={on ? RandomOn : RandomOff} alt="Random" />
      </div>
    </div>
  </div>
}
