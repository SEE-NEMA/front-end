import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import './screens/styles/Header.css';
import {CgProfile} from 'react-icons/cg';

const Header = (props) =>
{
  return(
    <div className='content'>
      <nav className='nav'>
      <div className='nav-item'>
        <Sidebar width={320}></Sidebar>
        <h6>로고</h6>
        <button className='btn_mypage'>
          <CgProfile size="30"/>
          <Link to="/Mypage"/>
        </button>
      </div>  
    </nav>
    <h3>메인 페이지</h3>
    </div>
  )
}

export default Header;