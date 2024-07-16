import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Achievement.css';

const achievements = [
  { word: 'Certification in Front-end Developer', value: 1, unit: '', certificateUrl: './src/assets/images/developer.png' },
  { word: 'Certification in Red Hat Administrator', value: 2, unit: '', certificateUrl: './src/assets/images/mycertife.png' },
  { word: 'Certification in IBM Artificial Intelligence', value: 3, unit: '', certificateUrl: './src/assets/images/IBMAI.png' },
  { word: 'Certification in Python for Data Science', value: 4, unit: '', certificateUrl: './src/assets/images/python.png' },
  { word: 'Certification in React Problem Solving', value: 5, unit: '', certificateUrl: './src/assets/images/reactsertifikat.png' },
  { word: 'Certification in Enterprise Design', value: 6, unit: '', certificateUrl: './src/assets/images/enterprise.png' }
];

const Achievement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className="our-achievement section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
            <div className="title">
              <h2>"Showcase Your Achievements"</h2>
              <p>Explore our diverse certifications that demonstrate expertise in various domains.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
            <div className="row">
              {achievements.map((info, index) => (
                <div className="col-lg-4 col-md-4 col-12" key={index}>
                  <div ref={ref} className="single-achievement wow fadeInUp" data-wow-delay={(index * 0.2) + 's'}>
                    {isVisible && (
                      <h3 className="counter">
                        <CountUp start={0} end={info.value} duration={4} separator="," />
                        <span>{info.unit}</span>
                      </h3>
                    )}
                    <p>{info.word}</p>
                    {info.certificateUrl && (
                      <img src={info.certificateUrl} alt={`Certificate ${index}`} className="certificate-image" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
