import React from 'react';
import './Resume Css/Resume.css'
import { Link, Outlet } from 'react-router-dom';

const Resume = () => {
    return (
        <section className='resume-card' id='resume'>
            <div className='resume-container'>
                <div>
                    <div>
                        <Link to="/#resume/education">Education</Link>
                    </div>
                    <div>
                        <Link to="/#resume/workhistory">Work History</Link>
                    </div>
                    <div>
                        <Link to="/#resume/education">Projects</Link>
                    </div>
                    <div>
                        <Link to="/#resume/education">Interest</Link>
                    </div>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default Resume;