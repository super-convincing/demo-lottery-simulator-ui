import { CSlider } from '../atoms';

export const SecSpeed = ({
  speed, onSpeedChange, onMouseDown, onMouseUp
}: {
  speed: number, onSpeedChange: (newVal: number) => void, onMouseDown: VoidFunction, onMouseUp: VoidFunction
}) => {
  return <div className='sec-speed'>
    <div className='text'>
      <span>Speed: </span>
      <span style={{ opacity: 0.5 }}>({speed}ms)</span>
    </div>
    <div className='slider'>
      <CSlider  {...{ speed, onSpeedChange, onMouseDown, onMouseUp, min: 1, max: 1000 }} />
    </div>
  </div>
}