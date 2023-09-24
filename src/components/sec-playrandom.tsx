import RandomOff from '../assets/checkboxOff.svg'
import RandomOn from '../assets/checkboxOn.svg'
import { $isRandom, actSetPlayWithRandom } from '../logic'

export const SecPlayRandom = () => {
  const isRandom = $isRandom()
  const toggle = () => {
    actSetPlayWithRandom(!isRandom)
  }

  return <div className='sec-play-random'>
    <div className='text'>Play with random numbers:</div>
    <div className='choice'>
      <div className='checkbox' onClick={toggle}>
        <img src={isRandom ? RandomOn : RandomOff} alt="Random" />
      </div>
    </div>
  </div>
}
