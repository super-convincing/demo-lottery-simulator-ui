import { CNumber } from './fields'

export const CWon = ({ nrMatches, nrWon }: { nrMatches: number, nrWon: number }) => {
  return <div className='comp-won'>
    <span className='nr-matches'>{nrMatches} matches</span>
    <span className='nr-won'><CNumber value={nrWon} /></span>
  </div>
}
