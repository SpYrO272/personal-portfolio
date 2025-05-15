import React from 'react'
import { Link } from 'react-scroll'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white text-justify'>I’m a MERN stack developer with a passion for building fast, scalable, and user-friendly web applications. My expertise in MongoDB, Express.js, React, and Node.js allows me to craft seamlss front-end experiences while ensuring robust backend functionality.I thrive on solving complex challenges, optimizing application performance, and keeping up with the latest web technologies. Whether it's developing full-stack applications or refining UI/UX, I’m always eager to learn and innovate.</p>
        <Link to='projects' smooth={true}
            spy={true}
            duration={500}
            offset={-130}><button className='border border-orange rounded-full py-2 px-4 text-lg items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button></Link>
    </div>
  )
}

export default AboutMeText