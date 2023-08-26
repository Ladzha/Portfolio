import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_9ngabai', 'template_dgix9t8', form.current, 'hjzuAvyXM_HWZftw8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };
  return (
    <div className='form column' id='contact'>
        <h2 className='title'>Write me a message</h2>
        <form className='contactForm column' ref={form} onSubmit={sendEmail}>
            <label className='label' htmlFor='name' >You name</label>
            <input className='input' type='text' name='user_name' placeholder='Enter your name'/>
            <label className='label' htmlFor='email'>Your email</label>
            <input className='input' type='email' name = 'user_email' placeholder='Enter your email'/>
            <label className='label' htmlFor='message'>Message</label>
            <textarea className='input' name='message' placeholder='Enter your message'/>
            <button className='button' type="submit" value="Send"> Send </button> 
        </form>
    </div>
  )
}

export default Contact