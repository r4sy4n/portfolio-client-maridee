import React from 'react';
import Wrapper from '../assets/wrappers/Projects';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Reveal from './Reveal';

const Projects = () => {
  return (
    <Reveal>
      <Wrapper id='projects' className='section'>
          <h2>MY PROJECTS</h2>
          <div className='line'></div>
          <p className='description'>Bringing ideas to life with impeccable project management and execution, showcasing a diverse portfolio of successful projects across industries and disciplines.</p>
          <div>
            <div className='project-section'>
              <h3 className='title'>Creative Design for Blog’s Featured Image</h3>
              <div className='work'>
                <div className='projects image1'>
                  <Project1/>
                </div>
                <div className='flex content1'>
                  <h3 className='subtitle'>Creative Design for Blog’s Featured Image</h3>
                  <p>Focuses on creating a visually striking and captivating featured image for a blog</p>
                  <a href='https://www.zicail.com/how-to-start-a-skin-care-line/' target='_blank' rel='noopener noreferrer' className='btn'>Website</a>
                </div>
              </div>
            </div>
            <div className='project-section'>
              <h3 className='title'>Creative Design for Website Page</h3>
              <div className='work'>
                <div className='projects image2'>
                  <Project2/>
                </div>
                <div className='flex content2'>
                  <h3 className='subtitle'>Creative Design for Website Page</h3>
                  <p>Aims to transform an ordinary web page into a visually captivating and engaging online experience.</p>
                  <a href='https://www.zicail.com/business-solution/' target='_blank' rel='noopener noreferrer' className='btn'>Website</a>
                </div>
              </div>
            </div>
            <div className='project-section'>
              <h3 className='title'>Creative Design for Website Page</h3>
              <div className='work'>
                <div className='projects image3'>
                  <Project3/>
                </div>
                <div className='flex content3'>
                  <h3 className='subtitle'>Creative Design for Website Page</h3>
                  <p>To enhances the aesthetics and functionality of the webpage while aligning with the website's objectives and target audience.</p>
                  <a href='https://www.zicail.com/packaging-innovation/' target='_blank' rel='noopener noreferrer' className='btn'>Website</a>
                </div>
              </div>
            </div>
            <div className='project-section'>
              <h3 className='title'>Creative Design for Tabrick Webpages</h3>
              <div className='work'>
                <div className='projects image4'>
                  <Project4/>
                </div>
                <div className='flex content4'>
                  <h3 className='subtitle'>Creative Design for Tabrick Webpages</h3>
                  <p>Aims to transform an ordinary web page into a visually captivating and engaging online experience</p>
                  <a href='https://www.tabrick.com/' target='_blank' rel='noopener noreferrer' className='btn'>Website</a>
                </div>
              </div>
            </div>
          </div>
      </Wrapper>
    </Reveal> 
  )
}

export default Projects;