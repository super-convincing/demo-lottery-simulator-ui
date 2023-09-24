import RandomOff from '../assets/checkboxOff.svg'
import RandomOn from '../assets/checkboxOn.svg'
import { CONFIG } from '../config'
import { SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import { MdRefresh, MdOutlinePlayCircleOutline, MdOutlinePausePresentation, MdFilter5 } from 'react-icons/md'
import { CIcon, CLotteryNumbers, CNumber, CRow, CSlider, CWon } from '../components';

export const PagePlay = () => {
  const [randomOn, setRandom] = useState<boolean>(true)
  const [speed, setSpeed] = useState<number>(100)
  const toggleRandom = () => setRandom(!randomOn)
  const onSpeedChange = (v: number) => {
    setSpeed(v)
  }
  const onSpeedMouseDown = () => {

  }
  const onSpeedMouseUp = () => {

  }

  return <div className='content-container'>
    <div className='play-content'>
      <CRow><SecTitle /></CRow>
      <CRow><SecSummary nrTickets={121313} /></CRow>
      <CRow><SecWons {...{ won2: 1213, won3: 232, won4: 12, won5: 1 }} /></CRow>
      <CRow><SecWinningNumbers numbers={[1, 9, 34, 68, 90]} /></CRow>
      <CRow><SecYourNumbers numbers={[2, 7, 32, 44, 87]} /></CRow>
      <CRow><SecPlayRandom {...{ on: randomOn, toggle: toggleRandom }} /></CRow>
      <CRow><SecSpeed {...{ speed, onSpeedChange, onMouseDown: onSpeedMouseDown, onMouseUp: onSpeedMouseUp }} /></CRow>
      <CRow><SecFlowContorls /></CRow>
    </div>
  </div>
}


const SecTitle = () => {
  return <div className='sec-title'>
    <h2>Result</h2>
  </div>
}

const SecSummary = ({ nrTickets }: { nrTickets: number }) => {
  return <div className='sec-summary'>
    <SimpleGrid columns={2}>
      <span className='text big'>Number of tickets:</span>
      <span className='number big'><CNumber value={nrTickets} /></span>
      <span className='text'>Years spent:</span>
      <span className='number'><CNumber value={Math.trunc(nrTickets / 52)} /></span>
      <span className='text'>Cost of tickets:</span>
      <span className='number'>
        <CNumber
          value={nrTickets * CONFIG.ticketCost}
          decimalScale={2}
          suffix={` ${CONFIG.currency}`}
        />
      </span>
    </SimpleGrid>
  </div>
}

const SecWons = ({ won2, won3, won4, won5 }: { won2: number, won3: number, won4: number, won5: number }) => {
  return <div className='sec-wons'>
    <SimpleGrid columns={[2, null, 4]} spacing={0}>
      <CWon nrMatches={2} nrWon={won2} />
      <CWon nrMatches={3} nrWon={won3} />
      <CWon nrMatches={4} nrWon={won4} />
      <CWon nrMatches={5} nrWon={won5} />
    </SimpleGrid>
  </div>
}

const SecWinningNumbers = ({ numbers }: { numbers: number[] }) => {
  return <div className='sec-winning-number sec-lottery-numbers'>
    <CLotteryNumbers text={'Winning numbers:'} numbers={numbers} />
  </div>
}

const SecYourNumbers = ({ numbers }: { numbers: number[] }) => {
  return <div className='sec-winning-number sec-lottery-numbers'>
    <CLotteryNumbers text={'Your numbers:'} numbers={numbers} />
  </div>
}

const SecPlayRandom = ({ on, toggle }: { on: boolean, toggle: VoidFunction }) => {
  return <div className='sec-play-random'>
    <div className='text'>Play with random numbers:</div>
    <div className='choice'>
      <div className='checkbox' onClick={toggle}>
        <img src={on ? RandomOn : RandomOff} alt="Random" />
      </div>
    </div>
  </div>
}

const SecSpeed = ({
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

const SecFlowContorls = () => {
  return <div className='sec-flow-controls'>
    <div className='buttons'>
      <CIcon text={'Set Numbers'} Icon={MdFilter5} />
      <CIcon text={'Play'} Icon={MdOutlinePlayCircleOutline} />
      <CIcon text={'Pause'} Icon={MdOutlinePausePresentation} />
      <CIcon text={'Refresh'} Icon={MdRefresh} />
    </div>
  </div>
}