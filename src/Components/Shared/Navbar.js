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
    //     <div className='fixed md:static w-full top-0 left-0'>
    //   <div className='md:flex items-center justify-center py-4 md:px-10 px-7'>
      
    //   <div className='text-3xl absolute text-white right-8 top-6 cursor-pointer md:hidden'>
    //   {
    //       open ? <Close onClick={()=>setOpen(!open)} className="w-4 h-4 text-white"/> : <Menu onClick={()=>setOpen(!open)} className="text-white w-4 h-4"/>
    //   }
    //   </div>

    //   <ul className={`md:flex md:items-center z-50 md:pb-0 pb-12 absolute md:static bg-zinc-700 md:bg-transparent  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
    //     {
    //       Links.map((link)=>(
    //         <li key={link.name} className='md:ml-8 text-lg md:my-0 my-6'>
    //           <HashLink to={link.link}
    //           className='text-white bg- hover:text-orange-500 duration-500'
    //           >{link.name}</HashLink>
    //         </li>
    //       ))
    //     }
    //   </ul>
    //   </div>
    // </div>

    <div class="navbar ">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {
          Links.map(link=> <li><a href={link.link}>{link.name}</a></li>)
        }
      </ul>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0 text-white">
      {
        Links.map(link=> <li><a href={link.link}>{link.name}</a></li>)
      }
    </ul>
  </div>
  <div class="navbar-end">
    <div className='flex flex-col text-left text-xs text-white'>
      <span>Email: monirhrabby.developer@gmail.com</span>
      <span>Phone: 01956306002</span>
    </div>
  </div>
</div>
    );
};

export default Navbar;