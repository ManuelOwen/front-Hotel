import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FcHome, FcAbout, FcMenu, FcBriefcase, FcInfo, FcTabletAndroid } from 'react-icons/fc';

export const Navbar = () => {
  return (
    <div className="navbar">
    

      <Link to="/">
        <FcHome /> <span>Home</span>
      </Link>

      <Link to="/About">
        <FcAbout />
        <span>About</span>
      </Link>

      <Link to="/Menu">
        <FcTabletAndroid />
        <span>Online order</span>
      </Link>

      <Link to="/More">
        <FcMenu />
        <span>More</span>
      </Link>

      <Link to="/Rooms">
        <FcBriefcase />
        <span>Accommodation</span>
      </Link>

      {/* <Link to="/Contacts">
        <FcInfo />
        <span>Remarks</span>
      </Link> */}

      <Link to="/Login">
        <span>Login</span>
      </Link>
      <Link to="/Register">Sign up</Link>
    </div>
  );
};
