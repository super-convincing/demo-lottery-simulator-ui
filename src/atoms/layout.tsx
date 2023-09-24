export const ContentContainer = ({ children }: { children?: React.ReactNode }) => {
  return <div className='content-container'>
    {children}
  </div>
}

export const CRow = ({ children }: { children?: React.ReactNode }) => {
  return <div className='comp-row'>
    {children}
  </div>
}
