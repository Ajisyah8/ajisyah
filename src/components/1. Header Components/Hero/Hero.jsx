import React from 'react';
import { name, socialProfiles} from '../../../your_info'; // Importing name, socialProfiles, and backgroundImageURL from your_info
import Navbar from '../Navbar/Navbar';
import Typewriter from '../Typewriter/Typewriter';
import './Hero.css'; // Importing CSS styles for Hero component
import { backgroundImage } from '../../../your_info';

const Hero = () => {
  const { firstname, lastname } = name; // Destructuring 'name' object to get firstname and lastname

  return (
    <section id='Home' className='hero-area' style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Navbar component */}
      <Navbar />

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
              {/* Typewriter component */}
              <Typewriter />
            </div>
            <div className='btn-pos'>
              {/* Mapping through socialProfiles to render social profile buttons */}
              {socialProfiles.map((profile, index) => (
                <a
                  href={profile.url}
                  id={`button-${index}`} // Assigning a unique ID based on index or profile.id
                  className='btn wow fadeInLeft'
                  target='_blank'
                  rel='noopener noreferrer'
                  data-wow-delay={`${index * 0.2 + 0.8}s`}
                  key={index} // Using index as key to ensure each item has a unique key
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
