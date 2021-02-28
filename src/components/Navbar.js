 import React from 'react'

 
 const Navbar = ({toggle}) => {
     return (
         <nav className="flex justify-between items-center h-16 bg-yellow-100 text-black shadow-sm font-mono fixed w-full z-10" role="navigation">
             <a href="/" className='pl-8 text-yellow-800 hover:no-underline  hover:text-black'> Mo-ve-ki </a>
             <div className=' px-4 cursor-pointer md:hidden' onClick={toggle}>
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
             </svg>
             </div>
             <div className="pr-8 md:block hidden">
                <a className="P-4 m-3.5  text-yellow-800 hover:no-underline  hover:text-black" href="#home">Home</a>
                <a className="P-4 m-3.5  text-yellow-800 hover:no-underline  hover:text-black" href="#footer">Contact</a>
             </div>
         </nav>
     )
 }
 
 export default Navbar
 