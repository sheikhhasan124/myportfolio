import React from 'react';
import Project from './Project';
import img1 from '../../asset/solarMotor.PNG'
import img2 from '../../asset/furnitureStore.PNG'
import img3 from '../../asset/health.PNG'

const Projects = () => {
    const projects = [
        {
            id:1,
            name:'Solar Motor',
            img:img1,
            link:'https://sustainable-energy-tools.web.app/'
        },
        {
            id:2,
            name:'Furniture Store',
            img:img2,
            link:'https://furniture-warehouse-35670.web.app/'

        },
        {
            id:3,
            name:'Health Center',
            img:img3,
            link:'https://bien-health-4c6ec.web.app/'
        }
    ]
    return (
        <div class="min-h-screen bg-zinc-800  ">
            <h2 className='text-white text-4xl font-semibold text-center py-10'>My Project</h2>
             <div className='grid md:grid-cols-3 gap-12'>
               {projects.map(project=><Project key={project.id} project={project}></Project>)}    
             </div> 
        </div>
    );
};

export default Projects;