import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link="https://github.com/SpYrO272" target="_blank" Icon={FaGithub }/>
        <SingleContactSocial link="http://www.linkedin.com/in/amalj272" Icon={FaLinkedin}/>
        <SingleContactSocial link="https://wa.me/+917306129867" Icon={ FaWhatsapp  }/>
    </div>
  )
}

export default ContactSocial