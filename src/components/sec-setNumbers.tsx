import { useEffect, useState } from "react";
import { CDrawer, CLotteryNumber } from "../atoms";
import { getInstanceState, actCloseDrawer, actSetUserNumbers, isDrawerOpenSelector, refreshSeqSelector } from "../logic";
import { SimpleGrid } from "@chakra-ui/react";

const NUMS_1_90 = new Array(90).fill(0).map((_, i) => i + 1)

export const SecSetOwnNumbers = () => {
  const refreshSeq = refreshSeqSelector()
  const _userNumbers = getInstanceState().userNumbers;
  const [numbers, _setNumber] = useState<number[]>(_userNumbers)
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(numbers.length != 5)
  const isOpen = isDrawerOpenSelector()

  const setNumbers = (_numbers: number[]) => {
    const numbers = [...new Set(_numbers)]
    _setNumber(numbers)
    setSubmitDisabled(numbers.length != 5)
  }
  const onSubmit = () => {
    actSetUserNumbers(numbers)
    actCloseDrawer()
  }

  useEffect(() => {
    _setNumber(getInstanceState().userNumbers)
  }, [refreshSeq])

  return <>
    <CDrawer
      title='Set your own numbers'
      submitText='Submit'
      submitDisabled={submitDisabled}
      onSubmit={onSubmit}
      onClose={actCloseDrawer}
      isOpen={isOpen}
      size="sm"
    >
      <SetOwnNumberContent setNumbers={setNumbers} selectedNumbers={numbers} />
    </CDrawer>
  </>
}

const SetOwnNumberContent = ({ selectedNumbers, setNumbers }: { selectedNumbers: number[], setNumbers: (numbers: number[]) => void }) => {
  const onClickNumber = (num: number) => {
    if (selectedNumbers.includes(num)) {
      setNumbers(selectedNumbers.filter(n => n != num))
    } else {
      if (selectedNumbers.length < 5) {
        setNumbers([...selectedNumbers, num].sort((a, b) => a - b))
      }
    }
  }

  return <>
    <SimpleGrid columns={[10, null, 10]} spacing={4}>
      {NUMS_1_90.map(num =>
        <NumberButton
          key={num}
          number={num}
          onClick={onClickNumber}
          selected={selectedNumbers.includes(num)}
        />
      )}
    </SimpleGrid>
  </>
}

const NumberButton = ({ number, selected, onClick }: { number: number, selected: boolean, onClick: (number: number) => void }) => {
  return <CLotteryNumber
    number={number}
    onClick={() => onClick(number)}
    selected={selected}
  />
}