import React from 'react';
import Wrapper from '../assets/wrappers/Services';
import {AiFillShop} from 'react-icons/ai';
import {RiSeoFill} from 'react-icons/ri';
import {FaUserCog} from 'react-icons/fa';
import {IoNewspaperSharp} from 'react-icons/io5';

const Services = () => {
  return (
    <Wrapper id='services' className='section'>
        <h2>WHAT CAN I DO FOR YOU?</h2>
        <div className='line'></div>
        <div className='grid'>
            <div>
                <div className='title' >
                    <IoNewspaperSharp className='icon'/>
                    <h3>Data Entry Specialist</h3>
                </div>
                <p>As a virtual assistant specializing in data entry, I can efficiently input and organize large volumes of data, ensuring accuracy and attention to detail. With my expertise in data management tools and software, I can help streamline your data processes and free up your time for other important tasks.</p>
            </div>
            <div>
                <div className='title' >
                    <AiFillShop className='icon'/>
                    <h3>Ecommerce Assistant</h3>
                </div>
                <p>As an ecommerce virtual assistant, I can assist you in managing your online store. From uploading product listings and optimizing descriptions to monitoring inventory levels and processing orders, I can help you streamline your operations and improve customer satisfaction. With my knowledge of popular ecommerce platforms and marketing strategies, I can also support you in driving sales and increasing conversions.</p>
            </div>
            <div>
                <div className='title' >
                    <RiSeoFill className='icon'/>
                    <h3>SEO Assistant</h3>
                </div>
                <p>As an SEO virtual assistant, I can help optimize your website and improve its visibility in search engine results. From conducting keyword research and optimizing on-page content to implementing link building strategies and analyzing website analytics, I can assist you in improving your website's organic traffic and search rankings. By staying up to date with the latest SEO trends and best practices, I can help enhance your online presence and attract more targeted visitors to your site.</p>
            </div>
             <div>
                <div className='title' >
                    <FaUserCog className='icon'/>
                    <h3>Admin Assistant</h3>
                </div>
                <p>As a virtual admin assistant, I can provide comprehensive support to help you manage your administrative tasks efficiently. From scheduling appointments, managing emails, and organizing documents to conducting research, preparing reports, and coordinating meetings, I can assist you in maintaining a well-organized and productive workflow. With excellent communication and organizational skills, I can help you stay on top of your administrative responsibilities and focus on your core business objectives.</p>
            </div>
        </div>
    </Wrapper>
  )
}

export default Services;