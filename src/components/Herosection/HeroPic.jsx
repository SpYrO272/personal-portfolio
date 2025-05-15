import React from 'react'
import { PiHexagon } from "react-icons/pi";
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
const HeroPic = () => {
  return (
    <motion.div 
      variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount : 0}}
    className='h-full flex items-center justify-center'>
        <img className='max-h-[550px] w-auto' src="../../public/images/pic.png" alt="" />
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
        <PiHexagon className='md:h-[90%] sm:h-[120%] min-h-[440px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]'/>
        </div>
    </motion.div>
  )
}

export default HeroPic