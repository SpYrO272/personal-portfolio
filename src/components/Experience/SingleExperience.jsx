import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const SingleExperience = ({experience}) => {
  return (
    <div className='flex items-center justify-center '>
        <motion.div 
        variants={fadeIn("right",0.2)}
               initial="hidden"
               whileInView="show"
              viewport={{once: false, amount : 0}}
        className=' md:h-[300px] md:w-[640px] sm:h-auto sm:w-auto border-2 border-orange  border-dashed rounded-2xl mt-12 p-4' >
            <p className='font-bold text-cyan'>{experience.job}</p>
            <p className='text-orange'>{experience.company}</p>
            <p className='text-lightGrey'>{experience.date}</p>
            <ul className='list-disc mt-4 pl-4 text-white'>
                {experience.responsibilites.map((resp,index)=>{
                    return <li key={index} >{resp}</li>
                })}
            </ul>
        </motion.div>
    </div>
  )
}

export default SingleExperience