import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/constant/constant'

const nav = () => {
  return (
    <div className='fixed h-[12vh] z-[10] bg-blue-950 w-full'>
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
        {/* logo*/}
        <Link href='/' className='text-4xl text-white font-bold font-sans'>HEK.</Link>

        <div className='flex items-center space-x-10'>

          <div className='hidden lg:flex items-center space-x-8'>
            {navLinks.map((navLink) => {
            return <Link key={navLink.id} href={navLink.url} >
              <div className='text-2xl text-white font-bold font-sans'>{navLink.title}</div>
            </Link>
          })}
          </div>
 
          {/* Button */}
          <div className='flex items-center space-x-4'></div>
          <button className='md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 taransition-all duration-200 rounded-lg  '>
            Hire me
          </button>

          {/* Burger */}
          
        </div>
      </div>
      
    </div>
  )
}

export default nav
