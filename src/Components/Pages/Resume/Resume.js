import React from 'react';
import './Resume Css/Resume.css'
import { Link, Outlet } from 'react-router-dom';
import { AcademicCapIcon, DocumentSearchIcon, DocumentReportIcon, CodeIcon, HomeIcon } from '@heroicons/react/solid'

const Resume = () => {
    return (
        <section className='resume-card' id='resume'>
            <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col px-12 mt-4">
    <Outlet></Outlet>
    <label for="my-drawer-2" class="btn btn-primary drawer-button absolute top-0 right-2 lg:hidden">Open</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 overflow-y-auto text-base-content">
      <li className='py-1'>
        <Link to="/resume">
          <CodeIcon className="h-5 w-5 text-black" />
          Skills</Link>
      </li>
      <li className='py-1'>
        <Link to="/resume/education">
        <AcademicCapIcon className="h-5 w-5 text-black"/>
          Education</Link>
      </li>
      <li className='py-1'>
        <Link to="/resume/workHistory">
          <DocumentSearchIcon className="h-5 w-5 text-black" />
          Work History</Link>
      </li>
      <li className='py-1'>
        <Link to="/resume/projects">
          <DocumentReportIcon className="h-5 w-5 text-black" />
          Projects</Link>
      </li>
      <li>
      <Link to="/">
        <HomeIcon className="h-5 w-5 text-black" />
        Back to Home</Link>
      </li>
    </ul>
  
  </div>
</div>
        </section>
    );
};

export default Resume;