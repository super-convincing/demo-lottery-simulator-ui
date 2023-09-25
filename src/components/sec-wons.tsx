import { SimpleGrid } from '@chakra-ui/react';
import { CWon } from '../atoms';
import { won2Selector, won3Selector, won4Selector, won5Selector } from '../logic';

export const SecWons = () => {
  const won2 = won2Selector();
  const won3 = won3Selector();
  const won4 = won4Selector();
  const won5 = won5Selector();

  return <div className='sec-wons'>
    <SimpleGrid columns={[2, null, 4]} spacing={0}>
      <CWon nrMatches={2} nrWon={won2} />
      <CWon nrMatches={3} nrWon={won3} />
      <CWon nrMatches={4} nrWon={won4} />
      <CWon nrMatches={5} nrWon={won5} />
    </SimpleGrid>
  </div>
}
