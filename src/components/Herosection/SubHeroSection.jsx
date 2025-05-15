import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
const SubHeroSection = () => {
  return (
    <motion.div
    variants={fadeIn("up",0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount : 0}}
    className='w-full border-y border-orange text-orange flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-lightviolet '>
        <p className='md:block sm:hidden'>Adaptable</p>
        <p className='md:block sm:hidden'>Reliable</p>
        <p>Versatile</p>
    </motion.div>
  )
}

export default SubHeroSection