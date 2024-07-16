import React from 'react';
import { name, socialProfiles, backgroundImageURL } from '../../../your_info'; // Importing name and socialProfiles from your_info
import Navbar from '../Navbar/Navbar';
import Typewriter from '../Typewriter/Typewriter';
import './Hero.css'; // Importing CSS styles for Hero component

// Define the background image URL directly in the component
// const backgroundImageURL = './src/assets/images/me.jpg'; // Adjust the path based on your project structure

const Hero = () => {
  const { firstname, lastname } = name; // Destructure 'name' object to get firstname and lastname

  const heroStyle = {
    backgroundImage: `url(${backgroundImageURL})`, // Use backgroundImageURL for setting background image
  };

  return (
    <section id='Home' className='hero-area' style={heroStyle}>
      <Navbar />
      <img src="{backgroundImageURL}" alt="" style={heroStyle}/>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='hero-content'>
            <div className='name-container wow fadeInLeft' data-wow-delay='.4s'>
              <div>
                <h1 className='first-name'>{firstname}</h1>
                <h1 className='last-name'>{lastname}</h1>
              </div>
            </div>
            <div className='typewriter-container wow fadeInLeft' data-wow-delay='.6s'>
              <Typewriter />
            </div>
            <div className='btn-pos'>
              {socialProfiles.map((profile, index) => (
                <a
                  href={profile.url}
                  id={`button-${index}`} // Assign a unique ID based on index or profile.id
                  className='btn wow fadeInLeft'
                  target='_blank'
                  rel='noopener noreferrer'
                  data-wow-delay={`${index * 0.2 + 0.8}s`}
                  key={index} // Use index as key, ensure each item has a unique key
                >
                  <i className={`icon ${profile.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
