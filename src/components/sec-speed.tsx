import { CSlider } from '../atoms';
import { timeoutSelector, actSetTimeoutMS } from '../logic';

export const SecSpeed = () => {
  const timeoutMs = timeoutSelector();
  const sliderValue = 1000 - timeoutMs;
  const sliderMin = 0;
  const sliderMax = 999;

  const onChange = (v: number) => {
    const ms = 1000 - v;
    actSetTimeoutMS(ms)
  }

  return <div className='sec-speed'>
    <div className='text'>
      <span>Speed: </span>
      <span style={{ opacity: 0.5 }}>({timeoutMs}ms timeout)</span>
    </div>
    <div className='slider'>
      <CSlider  {...{
        value: sliderValue,
        tooltipValue: timeoutMs + "ms",
        onChange,
        min: sliderMin,
        max: sliderMax
      }} />
    </div>
  </div>
}