import { CSlider } from '../atoms';
import { timeoutSelector, actSetTimeoutMS } from '../logic';

export const SecSpeed = () => {
  const speed = timeoutSelector();

  const onSpeedChange = (ms: number) => {
    actSetTimeoutMS(ms)
  }

  return <div className='sec-speed'>
    <div className='text'>
      <span>Speed: </span>
      <span style={{ opacity: 0.5 }}>({speed}ms)</span>
    </div>
    <div className='slider'>
      <CSlider  {...{ speed, onSpeedChange, min: 1, max: 1000 }} />
    </div>
  </div>
}