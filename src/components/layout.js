import * as React from 'react'
import Nav from './nav'

const Layout = ({ children }) => {
        return (
        <body className='bg-star-pattern bg-cover bg-repeat bg-DarkestBlue text-White font-spartan font-normal py-2'>
            <div className='flex flex-row justify-between border-b border-White/20 items-center px-6 py-4 w-full'>
                <header className='font-antonio text-xl uppercase tracking-tight font-normal'>The Planets</header>
                <Nav></Nav>
            </div>
            <main>
                {children}
            </main>
        </body>
    )
    
  }
  
  export default Layout