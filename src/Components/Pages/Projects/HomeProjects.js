import React from 'react';
import './HomeProjects.css'
import ProjectCard from '../../Shared/ProjectCard';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const HomeProjects = () => {
    const {data:projects, isLoading} = useQuery('projects', ()=> fetch("https://secure-plains-56866.herokuapp.com/projects").then(res=> res.json()))

    if(isLoading){
        return <Loading />
    }
    return (
        <section className='px-3 -z-50'>
            <div className='flex justify-center my-24 relative'>
                <span className='projects-heading absolute' id='projects'>Projects</span>
            </div>
            <div className='grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3'>
                {
                    projects?.map(p=> <ProjectCard key={p._id} data={p} />)
                }
            </div>
        </section>
    );
};

export default HomeProjects;