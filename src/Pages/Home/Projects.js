import React, { useEffect, useState } from 'react';
import Project from './Project';


const Projects = () => {
    const [projects,setProjects]=useState([])

    useEffect(()=>{
     fetch('./Data.json')
     .then(res=>res.json())
     .then(data=>setProjects(data))
    },[])
    return (
        <div id='service' class="min-h-screen   ">
            <h2 className='text-white text-4xl font-semibold text-center py-10'>My Project</h2>
             <div className='grid md:grid-cols-3 gap-12'>
               {projects.map(project=><Project key={project.id} project={project}></Project>)}    
             </div> 
        </div>
    );
};

export default Projects;