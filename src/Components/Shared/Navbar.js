import React, { useState } from 'react';
import './Navbar.css'
import { Menu, Close } from 'react-ionicons';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    let Links =[
        {name:"HOME",link:"#profile"},
        {name:"ABOUT",link:"#aboutme"},
        {name:"PROJECTS",link:"#projects"},
        {name:"BLOG'S",link:"#blogs"},
        {name:"CONTACT",link:"#contactme"},
      ];
      let [open,setOpen]=useState(false);
    return (
        <div className='fixed md:static w-full top-0 left-0'>
      <div className='md:flex items-center justify-center py-4 md:px-10 px-7'>
      
      <div className='text-3xl absolute text-white right-8 top-6 cursor-pointer md:hidden'>
      {
          open ? <Close onClick={()=>setOpen(!open)} className="w-4 h-4 text-white"/> : <Menu onClick={()=>setOpen(!open)} className="text-white w-4 h-4"/>
      }
      </div>

      <ul className={`md:flex md:items-center z-50 md:pb-0 pb-12 absolute md:static bg-zinc-700 md:bg-transparent  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-lg md:my-0 my-6'>
              <HashLink to={link.link}
              className='text-white bg- hover:text-orange-500 duration-500'
              >{link.name}</HashLink>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
    );
};

export default Navbar;