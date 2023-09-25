import { MdRefresh, MdOutlinePlayCircleOutline, MdOutlinePausePresentation, MdFilter5 } from 'react-icons/md'
import { CIcon } from '../atoms';
import { isRunningSelector, actReset, actStart, actStop } from '../logic';

export const SecContorls = () => {
  const isRunning = isRunningSelector()

  return <div className='sec-flow-controls'>
    <div className='buttons'>
      <CIcon text={'Set Numbers'} Icon={MdFilter5} />
      {
        isRunning
          ? <CIcon text={'Pause'} Icon={MdOutlinePausePresentation} onClick={actStop} />
          : <CIcon text={'Play'} Icon={MdOutlinePlayCircleOutline} onClick={actStart} />
      }
      <CIcon text={'Reset'} Icon={MdRefresh} onClick={actReset} />
    </div>
  </div>
}