import React from 'react';
import './HomeProjects.css'
import ProjectCard from '../../Shared/ProjectCard';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const HomeProjects = () => {
    const {data:projects, isLoading} = useQuery('projects', ()=> fetch("http://localhost:5000/projects").then(res=> res.json()))

    if(isLoading){
        return <Loading />
    }
    return (
        <section>
            <div className='flex justify-center my-24 relative'>
                <span className='projects-heading absolute'>Projects</span>
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