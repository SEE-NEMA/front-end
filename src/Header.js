import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import Main  from './screens/Main';
import Login from './screens/Login';
import './screens/styles/Header.css';
import {CgProfile} from 'react-icons/cg';

const Header = (props) =>
{
  const [modal, setmodal]= useState(false);
  return(
    <div className='content'>
      <nav className='nav'>
      <div className='nav-item'>
        <Sidebar width={280}></Sidebar>
        <Link to="/">
        <h3 className = "HeaderLogo">Logo</h3>
        </Link>
        <button className='btn_mypage' onClick={()=>setmodal(!modal)}><CgProfile size="35"/></button>
        {modal && (
          <Modal closeModal={()=>setmodal(!modal)}>
            <h3>모달창</h3>
          </Modal>
        )}
      </div>  
    </nav>
    </div>
  )
}

export default Header;