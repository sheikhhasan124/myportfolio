import React from 'react';
import image from '../../asset/programmin.jpg'

const Banner = () => {
    return (
    <div class=" min-h-screen  justify-evenly items-center md:flex flex-row-reverse">
        
       
       <div class="avatar my-12">
        <div class="w-[300px] mask mask-hexagon">
        <img className="  w-[500px]  " src={image} alt="img" />
        </div>
       </div>
       <div className=''>
           <h4 className='text-white text-xl font-semebold'>Hello i'm</h4>
           <h1 className='text-white text-6xl font-semibold '>Hasan Ullah</h1>
           <h4 className='text-2xl text-white font-bold'>I am a Web <span className='text-rose-500'>Developer</span></h4>
           <button className='btn  hover:text-rose-600 mt-5  text-white  bg-rose-600 px-10 text-xl'>Hire me</button>
       </div>
      
    </div>
    );
};

export default Banner;