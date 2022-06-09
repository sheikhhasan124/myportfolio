import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    const menuItems = <>     
            <Link to="/" className='navLink' >Home</Link>
            
            <a href="#about" className='navLink'>About Me</a>
            <a href="#service" className='navLink'>Project</a>
            <a href="#contact" className='navLink'>Contact</a>
            <Link to="/" className='navLink'>Blog</Link>
    </>
    return (
        <div class="navbar bg-zinc-900">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-zinc-900 rounded-box w-52">
             {menuItems}
            </ul>
          </div>
          <Link to="/" class="btn bg-rose-600 text-white text-3xl font-mono">H</Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
          {menuItems}
          </ul>
        </div>
        <div class="navbar-end">
        <button class="btn btn-outline btn-secondary"><a href="https://drive.google.com/file/d/1DyvSrz9PdKdtbWDV8YpJsedjxBBWS4U4/view?usp=sharing" target="_blank" >Download resume</a></button>
        </div>
      </div>
    );
};

export default Navber;