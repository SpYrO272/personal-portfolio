import React, { useState } from 'react'
import ProjectsText from './ProjectsText'
import SingleProjects from './SingleProjects'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
import job from '../../assets/jobfinder.png';
import jemini from '../../assets/geminiclone.png';
import soil from '../../assets/soilboy.png';
import media from '../../assets/mediaplayer.png';
import spotify from '../../assets/spotifyclone.png';
import audio from '../../assets/audiobird.png';
import ecart from '../../assets/ecart.png';
import port from '../../assets/3d.png';
import furni from '../../assets/furni.png';
import travel from '../../assets/travel.png';
import emp from '../../assets/emp.png';
const projects =[
    {
        name:"Job Finder",
        year:"Jan 2025",
        align:"right",
        image: job,
        link:"https://jobfinder-53jf.vercel.app/"
    },
    {
        name:"Gemini Clone",
        year:"Nov 2024",
        align:"left",
        image:jemini,
        link:'https://gemini-iota.vercel.app/'
    },
    {
        name:"Media Player",
        year:"Nov 2024",
        align:"right",
        image:media,
        link:'https://mediaplayer-frontend-ashen.vercel.app/'
    },
    {
        name:"Spotify",
        year:"Nov 2024",
        align:"left",
        image:spotify,
        link:'https://spotify-zeta-dusky.vercel.app/'
    },
    {
        name:"AudioBird",
        year:"Oct 2024",
        align:"right",
        image:audio,
        link:'https://audiobird-frontend.vercel.app/'
    },
    {
        name:"SoilBoy",
        year:"Oct 2024",
        align:"left",
        image:soil,
        link:'https://spyro272.github.io/SoilBoy/'
    },
    {
        name:"Ecart",
        year:"Sept 2024",
        align:"right",
        image:ecart,
        link:'https://ecart-sandy-chi.vercel.app/'
    },
    {
        name:"3D Portfolio",
        year:"Aug 2024",
        align:"left",
        image:port,
        link:'https://spyro272.github.io/amaljportfolio/'
    },

    {
        name:"Furnicom",
        year:"July 2024",
        align:"right",
        image:furni,
        link:'https://spyro272.github.io/Furniture-website/'
    },
    {
        name:"Travellia",
        year:"July 2024",
        align:"left",
        image:travel,
        link:'https://spyro272.github.io/Porject-Travel/'
    },
     {
        name:"Employee Management",
        year:"July 2024",
        align:"right",
        image:emp,
        link:'https://emp-lyart.vercel.app/'
    }
    
]

const ProjectsMain = () => {
    const [showAll, setShowAll] = useState(false)

  // Show first 6 or all based on state
  const visibleProjects = showAll ? projects : projects.slice(0, 6)

 
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}>
        <ProjectsText />
      </motion.div>

      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {visibleProjects.map((item, index) => (
          <SingleProjects
            key={index}
            name={item.name}
            year={item.year}
            align={item.align}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>

      {projects.length > 6 && (
        <div className='text-center mt-8'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-all duration-300'
          >
            {showAll ? 'Show Less' : 'See More Projects'}
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectsMain