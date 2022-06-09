import React from 'react';
import './Resume Css/Resume.css'
import { Link, Outlet } from 'react-router-dom';

const Resume = () => {
    return (
        <section className='resume-card' id='resume'>
            <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col px-12 mt-4">
    <Outlet></Outlet>
    <label for="my-drawer-2" class="btn btn-primary drawer-button absolute top-0 right-2 lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 overflow-y-auto text-base-content">
      <li className='py-1'>
        <Link to="/resume/skills">Skills</Link>
      </li>
      <li className='py-1'>
        <Link to="/resume/education">Education</Link>
      </li>
      <li className='py-1'>
        <Link to="/resume/workHistory">Work History</Link>
      </li>
      <li className='py-1'>
        <Link to="/resume/projects">Projects</Link>
      </li>
      <li>

      </li>
    </ul>
    <Link to="/">Back to Landing Page</Link>
  
  </div>
</div>
        </section>
    );
};

export default Resume;