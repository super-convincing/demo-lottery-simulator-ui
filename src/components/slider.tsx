import { Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react';
import { useState } from 'react';

export const CSlider = ({
  speed, onSpeedChange, onMouseDown, onMouseUp, min, max
}: {
  speed: number, min: number, max: number, onSpeedChange: (newVal: number) => void, onMouseDown?: VoidFunction, onMouseUp?: VoidFunction,
}) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const p5 = Math.trunc((max - min) / 20)
  const onChange = (newVal: number) => {
    onSpeedChange(newVal)
  }
  return <div className='comp-slider'>
    <Slider
      id='slider'
      defaultValue={speed}
      min={min}
      max={max}
      colorScheme='green'
      color={'$text-color'}
      onChange={(v) => onChange(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <SliderMark value={min + p5 / 2} mt='1' ml='-2.5' fontSize='sm'>
        {min}
      </SliderMark>
      <SliderMark value={max - p5} mt='1' ml='-2.5' fontSize='sm'>
        {max}
      </SliderMark>
      <SliderTrack bgColor={'#E9F5F1'}>
        <SliderFilledTrack bgColor={'#A5D9C8'} />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='#A5D9C8'
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`${speed}`}
      >
        <SliderThumb boxSize={3} />
      </Tooltip>
    </Slider>
  </div>
}
