// components/Navbar.js
"use client"

import React, { useState } from 'react';



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white-100 rounded-box w-52">
            <li><a href='#Casestudies'>Case Studies</a></li>
            <li>
              <a href='#gui'>Gui</a>
              
            </li>
            <li><a href='mailto:rohithnairreghu@gmail.com'>Contact Me</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><svg width="60" height="46" viewBox="0 0 82 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.90625 46V0.90909H20.3693C23.7159 0.90909 26.6442 1.51823 29.1541 2.7365C31.6641 3.95478 33.6162 5.70881 35.0107 7.99858C36.4051 10.2884 37.1023 13.0331 37.1023 16.233C37.1023 19.4621 36.383 22.1849 34.9446 24.4013C33.5208 26.6177 31.5173 28.291 28.934 29.4212C26.3653 30.5514 23.3636 31.1165 19.929 31.1165H8.30398V21.6051H17.4631C18.9015 21.6051 20.1271 21.429 21.1399 21.0767C22.1674 20.7098 22.9527 20.13 23.4957 19.3374C24.0535 18.5447 24.3324 17.5099 24.3324 16.233C24.3324 14.9413 24.0535 13.8918 23.4957 13.0845C22.9527 12.2625 22.1674 11.6607 21.1399 11.2791C20.1271 10.8828 18.9015 10.6847 17.4631 10.6847H13.1477V46H0.90625ZM27.3267 25.304L38.5994 46H25.3011L14.2926 25.304H27.3267ZM81.3345 0.90909V46H71.1186L54.826 22.3097H54.5618V46H42.3203V0.90909H52.7124L68.7408 24.5114H69.093V0.90909H81.3345Z" fill="black"/>
</svg>

</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><a href='#Casestudies'>Case Studies</a></li>
        <li>
              <a href='#gui'>Gui</a>
              
            </li>
          
          <li><a href='mailto:rohithnairreghu@gmail.com'>Contact Me</a></li>
        </ul>
      </div>
      <div className="navbar-end">
      <div className="center-container">
              <a className="text-base  text-center  font-bold text-black px-6 py-2 " href="https://drive.google.com/file/d/1AOgkv5x9TBJFbj9R18JM52D1thdZK1HF/view?usp=drive_link">Resume &nbsp;	&#128640;</a>
            </div>
      </div>
    </div>
    );
}
export default Navbar;