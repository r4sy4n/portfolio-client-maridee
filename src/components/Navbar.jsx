import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';
import Reveal from './Reveal';

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  const [isLightMode, setIsLightMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

   useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const aboutSectionHeight = document.getElementById('navbar').offsetHeight;
      setIsVisible(scrollTop < aboutSectionHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBarsClick = () => {
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    setIsMobileNavOpen(!isMobileNavOpen);
     if (!isMobileNavOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }else{
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            setIsMobileNavOpen(false)
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
  };

  const handleNavLinkClick = (sectionId) => {
    setIsMobileNavOpen(false);
    setActiveNav(sectionId);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const darkModeHandle = () => {
    setIsLightMode(prevMode => !prevMode);
    document.body.classList.toggle('light-mode');
  }

  return (
    <Reveal>
      <Wrapper id='navbar' className='container'>
        <a href='index.html' className='logo'>Maridee <span>Ramiro</span></a>
        {isVisible && ( <a href='index.html'>
          <Logo/>
        </a>)}
        <ul className={`menu ${isMobileNavOpen ? 'open' : ''}`}>
          <li>
            <a href="#home" onClick={() => handleNavLinkClick('#home')}  className={activeNav === '#home' ? 'active' : ''}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => handleNavLinkClick('#about')}  className={`${activeNav === '#about' ? 'active' : ''}`}>About</a>
          </li>
          <li>
            <a href="#services" onClick={() => handleNavLinkClick('#services')} className={`${activeNav === '#services' ? 'active' : ''}`}>Services</a>
          </li>
          <li>
            <a href="#projects" onClick={() => handleNavLinkClick('#projects')} className={`${activeNav === '#projects' ? 'active' : ''}`}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => handleNavLinkClick('#contact')} className={`${activeNav === '#contact' ? 'active' : ''}`}>Contact</a>
          </li>
          <li className='line'></li>
          <li>
            <button id='theme-toggle' className='sun' onClick={darkModeHandle}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            </button>
          </li>
        </ul>
        {isVisible && ( <button className='bars' onClick={handleBarsClick} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
          </svg>
        </button>)}
        
      </Wrapper>
    </Reveal>
  )
}

export default Navbar;