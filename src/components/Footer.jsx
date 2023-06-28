import React from 'react';
import Wrapper from '../assets/wrappers/Footer';

const Footer = () => {
  return (
    <Wrapper id='footer' className='section'>
        <div className='line'></div>
        <p>Developed by <strong><a  href='https://russellramiro.netlify.app/' target='_blank'>Russell</a></strong> for <span>Maridee</span> Ramiro</p>
        <p className='subtitle'>All Rights Reserved ©2023</p>
    </Wrapper>
  )
}

export default Footer;