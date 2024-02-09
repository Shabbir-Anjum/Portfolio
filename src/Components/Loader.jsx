import React from 'react'

export default function Loader() {
  return (
    <div>
      <div>
        <img src="/src/images/loader_bg.PNG" alt="error" className='w-full absolute top-0 left-0 object-fill whitespace-nowrap opacity-10 z-10' />
      </div>
        <div className='h-screen flex items-center ' >
            <img src="../images/logo.png" alt="error" className='w-40 h-40 mx-auto z-50'/>
        </div>
    </div>
  )
}
