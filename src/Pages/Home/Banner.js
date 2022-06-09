import React from 'react';
import image from '../../asset/archive5.jpg'

const Banner = () => {
    return (
    <div class="grid md:grid-cols-2  min-h-screen  justify-center items-center ">
        
       <div className=''>
           <h4 className='text-white text-xl font-semebold'>Hello i'm</h4>
           <h1 className='text-white text-6xl font-semibold '>Hasan Ullah</h1>
           <h4 className='text-2xl text-white font-bold'>I am a Web Developer</h4>
           <button className='btn  hover:text-rose-600   text-white  bg-rose-600 px-10 text-xl'>Hire me</button>
       </div>
       <div className='md:[display:block] [display:none]'>
           <img className="rounded-lg w-[500px] z-10  " src={image} alt="img" />
       </div>
      
    </div>
    );
};

export default Banner;