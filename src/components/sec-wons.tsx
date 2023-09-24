import { SimpleGrid } from '@chakra-ui/react';
import { CWon } from '../atoms';
import { $won2, $won3, $won4, $won5 } from '../logic';

export const SecWons = () => {
  const won2 = $won2();
  const won3 = $won3();
  const won4 = $won4();
  const won5 = $won5();

  return <div className='sec-wons'>
    <SimpleGrid columns={[2, null, 4]} spacing={0}>
      <CWon nrMatches={2} nrWon={won2} />
      <CWon nrMatches={3} nrWon={won3} />
      <CWon nrMatches={4} nrWon={won4} />
      <CWon nrMatches={5} nrWon={won5} />
    </SimpleGrid>
  </div>
}
