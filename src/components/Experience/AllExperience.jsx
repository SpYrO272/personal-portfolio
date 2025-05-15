import React from 'react'
import SingleExperience from './SingleExperience'

const experiences = [
    {
        job:'MEARN Stack Developer',
        company:'Luminar Technolab',
        date:'JUN 24 - Dec 24',
        responsibilites:[
            "Developed full-stack web application using MERN stack (MongoDB, Express.js, Re act, Node.js) for building responsive, dynamic solutions."," Implemented RESTful APIs for seamless communication between the frontend and the backend, allowing users to interact with the database.","Worked on end-to-end project development, comprising API integrations, debug ging and optimizing application performance while following best coding practices."
        ]
    }
]

const AllExperience = () => {
  return (
    <div>
       {experiences.map((experience,index)=>{
        return(
            <>
                <SingleExperience key={index} experience={experience} />            
            </>
        )
       })}
    </div>
  )
}

export default AllExperience