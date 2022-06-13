import React, { useState } from 'react';
import './Navbar.css'
import { Menu, Close } from 'react-ionicons';

const Navbar = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"SERVICE",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"BLOG'S",link:"/"},
        {name:"CONTACT",link:"/"},
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

      <ul className={`md:flex md:items-center z-50 md:pb-0 pb-12 absolute md:static bg-zinc-800  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-white bg- hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
    );
};

export default Navbar;