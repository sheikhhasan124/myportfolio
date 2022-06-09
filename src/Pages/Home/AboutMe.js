import React from 'react';
import profile from '../../asset/profile-pic.png'

const AboutMe = () => {
    return (
        <div class=" min-h-screen my-10">
          <h3 className='text-center mb-20 text-3xl font-semibold text-white'>About Me</h3>
         <div className='grid md:grid-cols-2 justify-center item-center'>
            <div>
                <img className='rounded-xl block mx-auto mb-10 w-[300px] ' src={profile} alt="" />
            </div>
            <div>
                 <h2 className='text-3xl font-semibold text-white'>I'm a web <span className='text-rose-500'>Developer</span></h2>
                 <p className='text-xl  text-gray-400'>I am a full-stack (MERN) web application developer. I have worked on front-end and back-end development, and I love to work with people on online platforms. I have been working on python Django development. I am passionate about my learning. I can learn so quickly the necessary tools and implement them so fast in a working project, and remain responsible for it.
As an IT boy, I have worked in many arenas SEO and SEM.</p>
              <button className='btn border-0 hover:text-rose-600 mt-5  text-white  bg-rose-600 px-10 text-xl'>Get Resume</button>
            </div>
         </div>  
        
      </div>
    );
};

export default AboutMe;