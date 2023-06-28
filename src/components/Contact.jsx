import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Wrapper from '../assets/wrappers/Contact';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5z4okoi', 'template_rqt7ymf', form.current, 'Wrle4tqr68o3RbLaN')
        .then((result) => {
            e.target.reset();
            toast.success('Message Sent!')
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <Wrapper id='contact' className='section'>
        <h2 className='contact-title'>Let's Start Your Project Today</h2>
        <div className='line'></div>
         <div className='form'>
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
              <h3 className='title'>Tell me about your project</h3>
              <div className='contact__form-div'>
                  <label className='contact__form-tag'>Name</label>
                  <input 
                  type='text' 
                  name='name' 
                  className='contact__form-input' 
                  placeholder='Insert your name'
                  required/>
              </div>
              <div className='contact__form-div'>
                  <label className='contact__form-tag'>Mail</label>
                  <input 
                  type='email' 
                  name='email' 
                  className='contact__form-input' 
                  placeholder='Insert your email'
                  required/>
              </div>
              <div className='contact__form-div contact__form-area'>
                  <label className='contact__form-tag'>Project</label>
                  <textarea cols={30} rows={10}
                      name='project'
                      className='contact__form-input' 
                      placeholder='Write your project'
                      required>
                  </textarea>
              </div>
              <button type='submit' className='btn'>Send Message</button>
          </form>
        </div> 
    </Wrapper>
  )
}

export default Contact;