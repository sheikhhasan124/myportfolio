import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    const {name,img,link1,id}=project;
    return (
        <div class="card md:w-full w-3/4 mx-auto  bg-zinc-900 shadow-xl">
        <figure class="">
          <img src={img[0]} alt="Shoes" class="rounded-xl w-full" />
        </figure>
        <div class="card-body  ">
          <p className='text-white'><span className='border-2 rounded-lg border-amber-600 px-2'>Service</span></p>
          <h2 class=" text-gray-300 text-2xl font-semibold font-serif">{name}</h2>
          
          
          <div class="">
          <button class="btn btn-sm btn-outline btn-secondary mr-3"><a href={link1}>Live Site</a></button>
          <button class="btn btn-sm btn-outline btn-secondary"><Link to={`/details/${id}`}>Details</Link></button>

          </div>
        </div>
      </div>
    );
};

export default Project;