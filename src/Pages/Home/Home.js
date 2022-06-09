import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
          <Banner/> 
          <AboutMe/> 
          <Projects/>
        </div>
    );
};

export default Home;