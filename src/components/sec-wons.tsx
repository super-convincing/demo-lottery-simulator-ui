import { SimpleGrid } from '@chakra-ui/react';
import { CWon } from '../atoms';

export const SecWons = ({ won2, won3, won4, won5 }: { won2: number, won3: number, won4: number, won5: number }) => {
  return <div className='sec-wons'>
    <SimpleGrid columns={[2, null, 4]} spacing={0}>
      <CWon nrMatches={2} nrWon={won2} />
      <CWon nrMatches={3} nrWon={won3} />
      <CWon nrMatches={4} nrWon={won4} />
      <CWon nrMatches={5} nrWon={won5} />
    </SimpleGrid>
  </div>
}
