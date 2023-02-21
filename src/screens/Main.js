import React, { useState } from 'react';
import Header from '../Header';
import {BrowserRouter} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './styles/Main.css'
import {FaSearch} from "react-icons/fa";

function Main ()
{
    return (
        <div>
        <Header/>
        <Sidebar width={280}/>

        <div>

            <h4 className="MainTitle">SEEnema</h4>
          
            <div className = 'WrapSearch'>
            <input className='Mainsearch'></input>
            </div>
            <p className = "Rank"> 실시간 공연 랭킹 </p>

            <div className = "RankBox"></div>

        </div>

       
        </div>
        
    )
}

export default Main;