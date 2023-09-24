import { NumericFormat } from 'react-number-format';

export const CNumber = ({ value, decimalScale = 0, suffix = '' }: { value: number, decimalScale?: number, suffix?: string }) => {
  return <NumericFormat
    className='comp-number'
    value={value}
    decimalScale={decimalScale}
    fixedDecimalScale={true}
    thousandSeparator=" "
    decimalSeparator=","
    suffix={suffix}
    disabled={true}
  />;
}
