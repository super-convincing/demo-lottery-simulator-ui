import { Slider, SliderFilledTrack, SliderThumb, SliderTrack, Tooltip } from '@chakra-ui/react';
import { useState } from 'react';

interface CSliderProps {
  value: number,
  tooltipValue: string,
  min: number,
  max: number,
  onChange: (newVal: number) => void,
  onMouseDown?: VoidFunction,
  onMouseUp?: VoidFunction,
}

export const CSlider = ({
  value,
  tooltipValue,
  onChange,
  onMouseDown,
  onMouseUp,
  min,
  max
}: CSliderProps) => {

  const [showTooltip, setShowTooltip] = useState(false)

  return <div className='comp-slider'>
    <Slider
      id='slider'
      value={value}
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
      <SliderTrack bgColor={'#E9F5F1'}>
        <SliderFilledTrack bgColor={'#A5D9C8'} />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='#A5D9C8'
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`${tooltipValue}`}
      >
        <SliderThumb boxSize={3} />
      </Tooltip>
    </Slider>
  </div>
}
