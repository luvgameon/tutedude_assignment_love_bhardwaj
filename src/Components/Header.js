import React from 'react'
import "./Header.css";

import ArrowDown from "../assets/arrow_down.svg";
import User from "../assets/user.svg";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='container'>
    <div className='navbar'>
      <Link to='/' ><img src='logo.png' alt='tutedude logo' className='navbar__logo' /></Link>
      <div className='menuItems'>
        <div className='menuItem'>My Assignment</div>
        <div className='menuItem'>Chat with Mentor</div>
        <div className='userProfile'>
          <img src={User} alt='' className='user_logo' />
          <span>ProfileName</span>
          <img src={ArrowDown} alt='' />
        </div>
      </div>
    </div>
  </div>
  );
}
