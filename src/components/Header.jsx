import React from 'react'

const Header = () => {
  return (
    <div className='sm:flex justify-between items-center px-5 py-3 bg-[#672280] text-white'>
      <div className='flex items-center gap-3 bg-[#672280]'>
        <img className='h-10' src="/header/Troll Face.png" alt="" />
        <h2 className='font-semibold text-2xl'>Meme Generator</h2>
      </div>
      <div className=''>
        <p className='text-xl font-thin m-0'>React Course - Project 3</p>
      </div>
    </div>
  )
}

export default Header
