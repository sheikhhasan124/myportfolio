import React from 'react';

const Project = ({project}) => {
    const {name,img,link}=project;
    return (
        <div class="card md:w-full w-3/4 mx-auto  bg-zinc-900 shadow-xl">
        <figure class="">
          <img src={img} alt="Shoes" class="rounded-xl w-full" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-white ">{name}</h2>
          
          <div class="card-actions">
          <button class="btn btn-outline btn-secondary"><a href={link}>Live Site</a></button>
          </div>
        </div>
      </div>
    );
};

export default Project;