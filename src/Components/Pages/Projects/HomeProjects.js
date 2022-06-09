import React from 'react';
import ProjectCard from '../../Shared/ProjectCard';

const HomeProjects = () => {
    const projects = [
        {
            "_id": 1,
            "name": "AORUS",
            "img": "https://i.postimg.cc/Wzmbkyrp/Screenshot.png",
            "site": "https://aorus-world.web.app/"
        },
        {
            "_id": 2,
            "name": "Bikers Headquarter",
            "img": "https://i.postimg.cc/qBwPN06h/Screenshot.png",
            "site": "https://bikers-headquarter-assignment.web.app/"
        }
    ]
    return (
        <section>
            <div className="heading-container">
                <div className="screan-heading" id='aboutme'>
                    <span>My Projects</span>
                </div>
                <div className='screan-sub-heading'>
                    <span>Check Out Now</span>
                </div>
                <div className='a-heading-separator'>
                    <div className='a-separator-line'></div>
                    <div className='a-separator-blob'><div></div></div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-4'>
            {
                projects.map(p=> <ProjectCard key={p._id} data={p} />)
            }
        </div>
        </section>
    );
};

export default HomeProjects;