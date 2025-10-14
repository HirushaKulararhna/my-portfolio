import Encryption from '@/components/main/Encryption'
import Footer from '@/components/main/Footer'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'
import React from 'react'


const Homepage = () => {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col h-[850px] gap-20'>
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Footer />
      </div>
    </main>
  )
}

export default Homepage
