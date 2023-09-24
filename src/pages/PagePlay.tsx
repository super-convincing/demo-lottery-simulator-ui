import { useState } from 'react';
import { CRow } from '../atoms';
import { SecContorls, SecPlayRandom, SecSpeed, SecSummary, SecTitle, SecWinningNumbers, SecWons, SecYourNumbers } from '../components';

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
      <CRow><SecContorls /></CRow>
    </div>
  </div>
}

