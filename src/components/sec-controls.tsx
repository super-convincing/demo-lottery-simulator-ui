import { MdRefresh, MdOutlinePlayCircleOutline, MdOutlinePausePresentation, MdFilter5 } from 'react-icons/md'
import { CIcon } from '../atoms';

export const SecContorls = () => {
  return <div className='sec-flow-controls'>
    <div className='buttons'>
      <CIcon text={'Set Numbers'} Icon={MdFilter5} />
      <CIcon text={'Play'} Icon={MdOutlinePlayCircleOutline} />
      <CIcon text={'Pause'} Icon={MdOutlinePausePresentation} />
      <CIcon text={'Refresh'} Icon={MdRefresh} />
    </div>
  </div>
}