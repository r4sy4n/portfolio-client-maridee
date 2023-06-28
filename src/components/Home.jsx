import React from 'react';
import Wrapper from '../assets/wrappers/Home';
// import Reveal from './Reveal';

const Hero = () => {
  return (
    // <Reveal>
      <Wrapper id='home' className='hero'>
        <div className='container'>
          <h1 className='title'>Maximize Your Full Potential</h1>
          <h2 className='subtitle'>Virtual Assistant at Your Service</h2>
          <p className='description'>Here you can explore my professional journey<br/> and see the projects I've worked on.<br/> I hope my work gives you a sense of my passion, dedication,<br/> and expertise in my field..</p>
          <a href="#contact" className='btn'>Contact Me Now</a>
        </div>
      </Wrapper>
    // </Reveal>
  )
}

export default Hero;