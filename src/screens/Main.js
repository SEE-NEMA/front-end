import React, { useState } from 'react';
import Header from '../Header';
import {BrowserRouter} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './styles/Main.css'
import {FaSearch} from "react-icons/fa";
import SliderContainer from "../components/SliderContainer";

function Main ()
{
    return (
        <div>
        <Header/>
        <Sidebar width={280}/>

        <div>
            <input className='Mainsearch'></input>
            <SliderContainer/>
            <div className = "Rank">
            <h4>실시간 공연 랭킹</h4>
            <div className="RankBox"/>
            </div>

        </div>

       
        </div>
        
    )
}

export default Main;