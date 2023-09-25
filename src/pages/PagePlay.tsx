import { useEffect } from 'react';
import { CRow } from '../atoms';
import { SecContorls, SecPlayRandom, SecSpeed, SecSummary, SecTitle, SecWinningNumbers, SecWons, SecYourNumbers, SecSetOwnNumbers } from '../components';
import { actUpdateStore } from '../logic';

export const PagePlay = () => {
  useEffect(() => {
    actUpdateStore()
  }, [])

  return <div className='content-container'>
    <div className='play-content'>
      <CRow><SecTitle /></CRow>
      <CRow><SecSummary /></CRow>
      <CRow><SecWons /></CRow>
      <CRow><SecWinningNumbers /></CRow>
      <CRow><SecYourNumbers /></CRow>
      <CRow><SecPlayRandom /></CRow>
      <CRow><SecSpeed /></CRow>
      <CRow><SecContorls /></CRow>
    </div>
    <SecSetOwnNumbers />
  </div>
}

