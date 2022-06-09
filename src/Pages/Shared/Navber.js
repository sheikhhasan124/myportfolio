import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    const menuItems = <>
            
            <Link to="/">item1</Link>
            <Link to="/">item2</Link>
    
    </>
    return (
        <div class="navbar bg-zinc-900">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {menuItems}
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl">Hasan</Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
          {menuItems}
          </ul>
        </div>
        <div class="navbar-end">
          <button class="btn">Resume</button>
        </div>
      </div>
    );
};

export default Navber;