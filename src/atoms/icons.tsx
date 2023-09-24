import { Tooltip } from '@chakra-ui/react';
import { useState } from 'react';

export const CIcon = ({ text, Icon, onClick }: { text: string, Icon: any, onClick?: VoidFunction }) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false)
  const onMouseEnter = () => setShowTooltip(true)
  const onMouseLeave = () => setShowTooltip(false)
  return <div className='comp-icon'>
    <Tooltip
      hasArrow
      bg='#A5D9C8'
      color='white'
      placement='top'
      isOpen={showTooltip}
      label={text}
    ><span></span>
    </Tooltip>
    <Icon size={40} color={"#A5D9C8"} {...{ onMouseEnter, onMouseLeave }} className="icon" onClick={onClick} />
  </div>
}

