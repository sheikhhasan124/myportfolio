import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Contactme from './Contactme';
import Projects from './Projects';

const Home = () => {
    return (
        <div className='bg-zinc-800'>
          <Banner/> 
          <AboutMe/> 
          <Projects/>
          <Contactme/>
        </div>
    );
};

export default Home;