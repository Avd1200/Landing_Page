import React, { useState }from 'react';
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import profile_logo from '../../assets/profile_logo.svg'; 
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
       <div className="navbar-links">
          <div className="navbar_links_logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="navbar_links_container">
                <p><a href='#'>My Assignment</a></p>
                <p><a href='#'>Chat With Mentor</a></p>
          </div>
       </div>
       <div className="navbar_profile flex flex-row text-[#800080]">
       <img src={profile_logo} alt='profile_logo'/>
        <select>
          <option>ProfileName</option>
        </select>
       </div>
    </div>
  )
}

export default Navbar