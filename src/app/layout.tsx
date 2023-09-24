import Logo from '../assets/logo.svg'

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return <>
    <div className='app-layout'>
      <LayoutHeader />
      <LayoutContent children={children} />
      <LayoutFooter />
    </div>
  </>
}

export const LayoutHeader = () => {
  return <>
    <div className='layout-header'>
      <img src={Logo} alt="Logo" className='logo' />
      <h1>Lottery simulator</h1>
    </div>
  </>
}

export const LayoutFooter = () => {
  return <>
    <div className='layout-footer'></div>
  </>
}

export const LayoutContent = ({ children }: { children?: React.ReactNode }) => {
  return <>
    <div className='layout-content'>
      {children}
    </div>
  </>
}


