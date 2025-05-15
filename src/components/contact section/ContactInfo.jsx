import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text="princeaj272@gmail.com" Image={MdOutlineEmail}/>
        <SingleInfo text="+91 7306129867" Image={FaPhoneAlt }/>
        <SingleInfo text="Athulya, AIckarakonam, Kakkodu P.O, Punalur, Kollam, Kerala, 691331" Image={IoLocationSharp}/>
    </div>
  )
}

export default ContactInfo