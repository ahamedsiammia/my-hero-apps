import React from 'react';
import { Link, NavLink } from 'react-router';
const Navber = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm text-[#9F62F2]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/Apps">Apps</NavLink>
        </li>
        <li>
            <NavLink to="/Installation">Installation</NavLink>
        </li>
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl"><img className='w-[40px] h-[40px]' src="/logo.png" alt="" />HERO.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/Apps">Apps</NavLink>
        </li>
        <li>
            <NavLink to="/Installation">Installation</NavLink>
        </li>
    </ul>
  </div>
  <div className="navbar-end text-white">
    <NavLink ><button className='bg-gradient-to-l from-[#9f62f2] to-[#632ee3] flex rounded-lg gap-2 p-2'> <img src="/github.png" alt="" />Contribute</button></NavLink>
  </div>
</div>
    );
};

export default Navber;