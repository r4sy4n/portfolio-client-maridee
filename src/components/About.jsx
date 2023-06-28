import React from 'react';
import Wrapper from '../assets/wrappers/About';
import Photo from './Photo';

const About = () => {
  return (
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
                  <p>I am a driven and passionate individual who isn't afraid to take new challenges. I hold an Associate degree in Information Technology Major in Web Application Development, and have gained several months of experience as a virtual assistant.</p><p>I develop my skills in different field such as data entry, administrative assistant, and SEO content uploader. I am committed in learning new things and thrive on collaborating with others to achieve success.</p><p> When I'm not working, you can find me watching movies or enjoying the beach with my family.</p>
                </div>
                <div>
                    <a href='#contact' className='btn'>Contact Me Now</a>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default About