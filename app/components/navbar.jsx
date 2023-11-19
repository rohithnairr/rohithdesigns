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
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href='#Casestudies'>Case Studies</a></li>
            <li>
              <a href='#gui'>Gui</a>
              
            </li>
            <li><a href='mailto:rohithnairreghu@gmail.com'>Contact Me</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><svg width="66" height="31" viewBox="0 0 66 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.2 30V0.5H13.28C16.64 0.5 19.12 1.24667 20.72 2.74C22.3333 4.22 23.14 6.28666 23.14 8.94C23.14 10.4333 22.8533 11.7067 22.28 12.76C21.7067 13.8133 20.9933 14.6267 20.14 15.2C19.2867 15.7733 18.44 16.0933 17.6 16.16C18.4667 16.2133 19.2733 16.42 20.02 16.78C20.7667 17.14 21.3667 17.72 21.82 18.52C22.2867 19.3067 22.52 20.3733 22.52 21.72C22.52 22.5733 22.52 23.3867 22.52 24.16C22.52 24.9333 22.52 25.7467 22.52 26.6C22.52 27.3067 22.5733 27.98 22.68 28.62C22.8 29.2467 22.98 29.7067 23.22 30H15.14C14.9267 29.6667 14.76 29.1933 14.64 28.58C14.5333 27.9667 14.48 27.3067 14.48 26.6C14.48 25.8667 14.48 25.2067 14.48 24.62C14.48 24.0333 14.48 23.3733 14.48 22.64C14.48 21.5733 14.2533 20.7333 13.8 20.12C13.3467 19.4933 12.5267 19.18 11.34 19.18H5.98L8.08 16.72V30H0.2ZM8.08 16L5.98 13.18H11.42C12.1 13.18 12.6933 13.04 13.2 12.76C13.72 12.48 14.12 12.08 14.4 11.56C14.6933 11.0267 14.84 10.4067 14.84 9.7C14.84 8.83333 14.5267 8.08 13.9 7.44C13.2867 6.8 12.4467 6.48 11.38 6.48H5.78L8.08 4.08V16ZM34.6616 30H26.8016V0.5H39.1216L47.2616 27.58L45.7016 27.9V0.5H53.5616V30H41.1416L33.0016 3.02L34.6616 2.7V30ZM62.0734 30.64C60.9801 30.64 60.0468 30.26 59.2734 29.5C58.5134 28.7267 58.1334 27.7933 58.1334 26.7C58.1334 25.62 58.5134 24.7 59.2734 23.94C60.0468 23.1667 60.9801 22.78 62.0734 22.78C63.1534 22.78 64.0734 23.1667 64.8334 23.94C65.6068 24.7 65.9934 25.62 65.9934 26.7C65.9934 27.7933 65.6068 28.7267 64.8334 29.5C64.0734 30.26 63.1534 30.64 62.0734 30.64Z" fill="white"/>
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
              <a className="text-base  text-center  font-bold text-white px-6 py-2 gradient-border inline-block animate-fade-up animate-duration-[3000ms]  " href="https://drive.google.com/file/d/1AOgkv5x9TBJFbj9R18JM52D1thdZK1HF/view?usp=drive_link">Resume &nbsp;	&#128640;</a>
            </div>
      </div>
    </div>
    );
}
export default Navbar;