import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function Navbar() {
    const [hide, sethide]= useState(false);
    const nav_show=()=>{
        sethide(()=>!hide)
    }
  return (
    <>
    <header className='sticky z-50 top-0 '>
        <div className='bg-bgColor flex  justify-between   text-head_Color h-24 items-center px-8  '>
        <div>
          <a href="#">
            <img src="/src/images/logo.png" alt="error" className='w-8 h-8'/>
          </a>
        </div>
        <div className='flex'>
          <div className={`bg-navbgColor md:bg-transparent ${hide? 'block': 'hidden'}  md:static md:py-0 md:w-auto md:px-10 h-screen md:h-auto md:block absolute pt-14 right-0 top-0  w-[65%] py-5`}>
          <ul className="flex text-center flex-col gap-10 text-sm justify-center items-center py-1  mt-1 md:flex-row ">
          <li className='md:inline-block'>
                <div className='md:inline text-greenColor '>01.</div>
                <a href="#about" className='nav_hover'>About</a>
              </li>
              <li className='md:inline-block'>
                <div className='md:inline text-greenColor'>02.</div>
                <a  href="#experience" className='nav_hover'>Experience</a>
              </li>
              <li className='md:inline-block'>
                <div className='md:inline text-greenColor'>03.</div>
                <a href="#work" className='nav_hover'>Work</a>
              </li>
              <li className='md:inline-block'>
                <div className='md:inline text-greenColor'>04.</div>
                <a href="#contact" className='nav_hover'>Contact</a>
              </li>
              <li className='md:inline-block'>
                <div className='md:inline text-greenColor'>05.</div>
                <a href="#blog" className='nav_hover'>Blog</a>
              </li>
        </ul>
            <div onClick={nav_show} className='absolute right-9 text-greenColor md:hidden text-xl top-9'>
              <FontAwesomeIcon icon={faX} /> 
            </div>
          </div>
          <div onClick={nav_show} className=' text-greenColor  md:hidden block text-3xl'>
              <FontAwesomeIcon icon={faBarsStaggered} /> 
            </div>
          <div className='px-6 py-1 btn hidden md:block'>
               <a href="my file" >Resume</a>
            </div>
        </div>
      </div>
      </header>
    </>
  )
}
