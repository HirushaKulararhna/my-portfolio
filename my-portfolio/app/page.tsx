import Hero from '@/components/main/Hero'
import Skills from '@/components/main/Skills'
import React from 'react'


const Homepage = () => {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col h-[850px] gap-20'>
        <Hero />
        {/* <Skills /> */}
        <Skills />
      </div>
    </main>
  )
}

export default Homepage
