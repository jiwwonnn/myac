import {ReactNode} from "react";

interface LayoutProps {
  children :  ReactNode,
}

const Layout = ({ children } :LayoutProps) => {
  return (
    <div className='h-[100vh] max-w-[500px] border-r border-l border-black mx-auto'>
      {children}
    </div>
  )
}

export default Layout