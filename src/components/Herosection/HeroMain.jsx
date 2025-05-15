import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'

export const HeroMain = () => {
  return (
    <div className='pt-40 pb-16'>
       <div id='home' className='flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center reative px-4'>
            <HeroText/>
            <HeroPic/>
       </div>
    </div>
  )
}
