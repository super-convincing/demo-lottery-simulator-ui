import { MdRefresh, MdOutlinePlayCircleOutline, MdOutlinePausePresentation, MdFilter5 } from 'react-icons/md'
import { CIcon } from '../atoms';
import { isRunningSelector, actReset, actStart, actStop, onClickSetOwnNumbers } from '../logic';

export const SecContorls = () => {
  const isRunning = isRunningSelector()

  return <div className='sec-flow-controls'>
    <div className='buttons'>
      <CIcon text={'Reset'} Icon={MdRefresh} onClick={actReset} />
      {
        isRunning
          ? <CIcon text={'Pause'} Icon={MdOutlinePausePresentation} onClick={actStop} />
          : <CIcon text={'Play'} Icon={MdOutlinePlayCircleOutline} onClick={actStart} />
      }
      <CIcon text={'Set Numbers'} Icon={MdFilter5} onClick={onClickSetOwnNumbers} />
    </div>
  </div>
}