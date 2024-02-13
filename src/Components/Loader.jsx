import React, { useEffect, useState } from 'react'

export default function Loader() {
  const [bgcolor, setbgcolor]= useState(false);
  useEffect(()=>{
    const timeout= setTimeout(() => {
    setbgcolor(true)
    }, 2000);
    return ()=> clearTimeout(timeout)
  },[])
 
  return (
    <>
    <div className='flex justify-center items-center h-screen overflow-hidden'>
      <div className={` ${bgcolor? ' bg-greenColor' : ' bg-bgColor'} rounded-3xl box relative w-48 h-48 bg-bgColor overflow-hidden animate-zoom p-0 m-0`}></div>
      </div>
      
    </>
  )
}
