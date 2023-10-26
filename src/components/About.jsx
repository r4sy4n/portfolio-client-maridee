import React from 'react';
import Wrapper from '../assets/wrappers/About';
import Photo from './Photo';
import Reveal from './Reveal';

const About = () => {
  return (
    <Reveal>
      <Wrapper id='about' className='section'>
          <h2>About Me</h2>
          <div className='line'></div>
          <div className='grid'>
              <div className='pic'>
                <Photo />
              </div>
              <div className='flex'>
                  <h2 className='about'>Hi, I'm Maridee,<br/> a skilled Virtual Assistant</h2>
                  <div className='description'>
                    <p>I'm here to make things easier for your business. I'm good at keeping things organized and paying very close attention to details. I hold an Associate degree in Information Technology, which means I know a lot about computers and the internet.</p>
                    <p>I can help with many things like organizing stuff, doing basic graphic design, editing photos, using Microsoft Office, managing emails, setting appointments, handling websites and databases, scheduling meetings, and setting reminders.</p>
                    <p>As a Virtual Assistant, I'm all about making businesses work better. I can learn new things quickly, and I'm very careful about getting things right. I can work independently as well as thrive on collaborating with others to achieve success.</p>
                    <p>I know how to use important software like Microsoft Office, Google Suite, Canva, Zoho CRM, Trello, WordPress, and e-commerce platforms like Shopify and Amazon Seller Central.
                    I can help with lots of tasks, from typing in data to helping with online projects and e-commerce.</p><p>Let's work together to make your business a success!</p>
                  </div>
                  <div>
                      <a href='#contact' className='btn'>Contact Me Now</a>
                  </div>
              </div>
          </div>
      </Wrapper>
    </Reveal>
  )
}

export default About