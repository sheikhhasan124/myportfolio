import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './FakeData';

const ProjectDetails = () => {
    const {id}=useParams()
    const newData = data.find(d=>d.id == id)
      console.log(newData)
         const {name,img, desc,tech,link}=newData;
    return (
        <div className='min-h-screen mt-12'>
            <h2 className='text-white text-3xl font-semibold underline decoration-rose-600'>Project Details</h2>
            <p className='text-white my-4 text-2xl text-rose-500 font-semibold'>Features</p>
            <div className='grid md:grid-cols-2 gap-5'>
               <div>
                <img className='mb-3' src={img[0]} alt="" />
                <img className='mb-3' src={img[1]} alt="" />
                <img className='mb-3' src={img[2]} alt="" />
               </div>
               <div className='border-2 border-solid border-amber-600 p-2'>
                  <h2 className='text-white text-2xl font-semibold'>{name}</h2>
                  
                  <p className='text-gray-300 text-xl font-thin my-5'>{desc}</p>
                  <p className='text-white text-xl  text-rose-300'><span className='bg-green-500 text-white rounded-lg px-2 font-semibold text-xl mr-2'>Technology : </span> {tech}</p>
                  <div className='mt-3'>
                  <button class="btn btn-outline btn-primary mr-3"><a href={link[0]}>client code</a></button>
                  <button class="btn btn-outline btn-secondary"><a href={link[1]}>server code</a></button>
                  </div>
               </div>
            </div>
        </div>
    );
};

export default ProjectDetails;