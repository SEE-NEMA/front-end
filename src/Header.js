import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Main  from './screens/Main';
import Login from './screens/Login';
import './screens/styles/Header.css';
import {CgProfile} from 'react-icons/cg';

const Header = (props) =>
{
  return(
    <div className='content'>
      <nav className='nav'>
      <div className='nav-item'>
        <Sidebar width={280}></Sidebar>
        <Link to="/">
        <h3>SEEnema</h3>
        </Link>
        <Link className='btn_mypage' to="/Login">
          <button  className='btn_mypage'>
            <CgProfile size="35"/>
          </button>
        </Link>
      </div>  
    </nav>
    </div>
  )
}

export default Header;