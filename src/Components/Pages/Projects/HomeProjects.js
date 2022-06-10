import React from 'react';
import './HomeProjects.css'
import ProjectCard from '../../Shared/ProjectCard';

const HomeProjects = () => {
    const projects = [
        {
            "_id": 1,
            "name": "AORUS",
            "img": "https://i.postimg.cc/Wzmbkyrp/Screenshot.png",
            "img2": "https://i.ibb.co/vh3hzQb/a-1.png",
            "img3": "https://i.ibb.co/JBr5Hqw/a-3.png",
            "site": "https://aorus-world.web.app/"
        },
        {
            "_id": 2,
            "name": "Bikers Headquarter",
            "img": "https://i.postimg.cc/qBwPN06h/Screenshot.png",
            "img2": "https://i.postimg.cc/wT2QcpnC/b-1.png",
            "img3": "https://i.ibb.co/bzgSr3w/b-3.png",
            "site": "https://bikers-headquarter-assignment.web.app/"
        },
        {
            "_id": 3,
            "name": "Penguin Fashion",
            "img": "https://i.postimg.cc/5yv8CcLR/p-1.png",
            "img2": "https://i.postimg.cc/zB7sYMV4/p-2.png",
            "img3": "https://i.postimg.cc/KjdQ6rrd/p-3.png",
            "site": "https://bikers-headquarter-assignment.web.app/"
        }

    ]
    return (
        <section>
            <div className='flex justify-center my-24 relative'>
                <span className='projects-heading absolute'>Projects</span>
            </div>
            <div className='grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3'>
                {
                    projects.map(p=> <ProjectCard key={p._id} data={p} />)
                }
            </div>
        </section>
    );
};

export default HomeProjects;