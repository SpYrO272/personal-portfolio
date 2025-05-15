import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const ContactForm = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [success,setSuccess] = useState('');

    const handleName = (e)=>(
        setName(e.target.value)
    )
    const handleEmail = (e)=>(
        setEmail(e.target.value)
    )
    const handleMessage = (e)=>(
        setMessage(e.target.value)
    )

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_j2y8vpe', 'template_h9ih7j7', form.current, {
            publicKey: 'AQQTgTmYvrrJkqjLy',
          })
          .then(
            () => {
              setName('');
              setEmail('');
              setMessage('');
              setSuccess('Message Sent!')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div>
        <p className='text-cyan'>{success}</p>
        <form className='flex flex-col gap-4 text-white' ref={form} onSubmit={sendEmail}>
            <input className='h-12 rounded-lg bg-violet px-2'
             name='from_name'
             type="text" 
             placeholder='Your Name' 
             required
             value={name}
             onChange={handleName}/>
            
            <input className='h-12 rounded-lg bg-violet px-2' 
            name='from_email'
            type="email" 
            placeholder='Your Email' 
            required 
            value={email}
             onChange={handleEmail}/>
            
            <textarea className=' rounded-lg bg-violet p-2' 
            name='message'
            type='text' placeholder='Message' rows='9' cols='50' required
            value={message}
            onChange={handleMessage}/>

            <button type='submit' className='w-full rounded-lg border border-violet text-white h-12 font-bold text-xl hover:bg-darkCyan bg-orange transition-all duration-500'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm