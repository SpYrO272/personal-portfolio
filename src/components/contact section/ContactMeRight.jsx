import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'
import mail from '../../assets/mail.png'

const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <img src={mail}alt="" className='max-w-[300px]' />
        <ContactInfo/>
        <ContactSocial/>
    
    </div>
  )
}

export default ContactMeRight