import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Headroom from 'react-headroom';

export default function Navbar() {
    const [hide, sethide]= useState(false);
    const width= '65%';
    // const [navbar, setnavbar]= useState(true);
    // const show_navbar_onScroll=()=>{
    //   if(window.scrollY >= 96){
    //     setnavbar(true)
    //   }
    //   else{
    //     setnavbar(false)
    //   }
    // }
    // window.addEventListener('scroll', show_navbar_onScroll)
    const nav_show=()=>{
        sethide(()=>!hide)
    }
  return (
    <>
    <Headroom>
    <header className={` sticky top-0  z-50`}>
        <div className='bg-bgColor  flex  justify-between   text-head_Color h-24 items-center px-8  '>
        <div>
          <a href="/">
            <img src="../images/logo.png" alt="error" className='w-8 h-8'/>
          </a>
        </div>
        <div className='flex transition-all ease-in-out duration-500'>
          <div className={`bg-navbgColor md:bg-transparent ${hide? 'block': 'hidden'}  md:static md:py-0 md:w-auto md:px-10 animate-movingX h-screen md:h-auto transition-all ease-in-out duration-500 md:block absolute pt-14 right-0 top-0  w-[65%] py-5 `}>
          <ul className="flex text-center flex-col gap-10 text-sm justify-center items-center py-1  mt-1 md:flex-row ">
          <li className='md:inline-block'>
                <div className='md:inline text-greenColor '>01.</div>
                <a href="#about" className='nav_hover duration-500'>About</a>
              </li>
              <li className='md:inline-block'>
                <div className='md:inline text-greenColor'>02.</div>
                <a  href="#experience" className='nav_hover duration-500'>Experience</a>
              </li>
              <li className='md:inline-block'>
                <div className='md:inline text-greenColor'>03.</div>
                <a href="#work" className='nav_hover duration-500'>Work</a>
              </li>
              <li className='md:inline-block'>
                <div className='md:inline text-greenColor'>04.</div>
                <a href="#contact" className='nav_hover duration-500'>Contact</a>
              </li>
              <li className='md:inline-block'>
                <div className='md:inline text-greenColor'>05.</div>
                <a href="#blog" className='nav_hover duration-500'>Blog</a>
              </li>
        </ul>
            <div onClick={nav_show} className='absolute right-9 text-greenColor md:hidden text-xl top-9'>
              <FontAwesomeIcon icon={faX} /> 
            </div>
          </div>
          <div onClick={nav_show} className=' text-greenColor  md:hidden block text-3xl'>
              <FontAwesomeIcon icon={faBarsStaggered} /> 
            </div>
          <div className='mt-2 hidden md:block'>
               <a href="https://drive.google.com/file/d/1xcHDWNiMRSYtaOW_uoaQRMzTlwGM-1YB/view?usp=drive_link" target='_blank' className='btn px-10 py-3' >Resume</a>
            </div>
        </div>
      </div>
      </header>
      </Headroom>
    </>
  )
}
