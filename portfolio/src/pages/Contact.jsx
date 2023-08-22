import React from 'react'

const Contact = () => {

    const handleSubmit = (event)=>{
        event.preventDefault()
        const clientName = event.target.name.value;
        const clientEmail = event.target.email.value;
        const clientMessage = event.target.message.value;



    }
  return (
    <div className='form'>
        <p className='title'>Write me a message</p>
        <form className='contactForm' onSubmit={(event)=>handleSubmit(event)}>
            <label className='label' htmlFor='name'>You name</label>
            <input className='input' type='text' id="name" name='name'/>
            <label className='label' htmlFor='email'>Your email</label>
            <input className='input' type='email' id="email" name = 'email'/>
            <label className='label' htmlFor='message'>Massage</label>
            <textarea className='input' id="message" name='message'/>
            <button className='button'>Send</button>
        </form>
    </div>
  )
}

export default Contact