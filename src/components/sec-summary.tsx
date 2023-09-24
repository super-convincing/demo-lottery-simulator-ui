import { CONFIG } from '../config'
import { SimpleGrid } from '@chakra-ui/react';
import { CNumber } from '../atoms';

export const SecSummary = ({ nrTickets }: { nrTickets: number }) => {
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