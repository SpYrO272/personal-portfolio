import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopRighr from './ExperienceTopRighr'
import ExperienceTopMidldle from './ExperienceTopMidldle'

const ExperienceTop = () => {
  return (
    <div className='flex lg:flex-row sm:flex-col gap-4 items-center justify-center'>
        <ExperienceTopLeft/>
        <ExperienceTopMidldle/>
        <ExperienceTopRighr/>
    </div>
  )
}

export default ExperienceTop