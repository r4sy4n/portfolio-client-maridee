import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/Mobile';

const Mobile = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');


  const darkModeHandle = () => {
    setIsLightMode(prevMode => !prevMode);
    document.body.classList.toggle('light-mode');
  };

  return (
      <Wrapper>    
          <div className='mobile-nav'>
              <nav>
              <ul className='mobile-nav__menu'>
                  <li>
                  <a href="#home" className={`mobile-nav__link ${activeNav === '#home' ? 'active' : ''}`}>Home</a>
                  </li>
                  <li>
                  <a href="#about" className='mobile-nav__link'>About</a>
                  </li>
                  <li>
                  <a href="#services" className='mobile-nav__link'>Services</a>
                  </li>
                  <li>
                  <a href="#projects" className='mobile-nav__link'>Projects</a>
                  </li>
                  <li>
                  <a href="#contact" className='mobile-nav__link'>Contact</a>
                  </li>
                  <li className='mobile-nav__link-line'></li>
                  <li>
                  <button id='theme-toggle' className='mobile-nav__sun' onClick={darkModeHandle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                  </button>
                  </li>
              </ul>
              </nav>
          </div>
      </Wrapper>
  )
}

export default Mobile;