import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  return (
    <div className=' fixed z-50 w-full top-0   font-[butler]  text-white  flex items-center justify-between px-20 py-12'>
      <h2 className='text-xl font-light '>F</h2>

      <div className='flex items-center justify-between  gap-10'>
      <div className='flex items-center justify-center gap-10' >
        <a className='navtext relative text-xl font-light inline-block' href="#">Shop</a>
        <a className='navtext relative text-xl font-light inline-block' href="#">New</a>
        <a className='navtext relative text-xl font-light inline-block' href="#">About</a>
        <a className='navtext relative text-xl font-light inline-block' href="#">Stores</a>
        <a className='navtext relative text-xl font-light inline-block' href="#">Search</a>
      </div>
        <div className='flex gap-16'>
        <i className="ri-shopping-bag-3-line"></i>
        <i className="ri-menu-line"></i>
        </div>
      </div>

    </div>
  )
}

export default Navbar
