import React, { useState } from 'react';
import Header from '../Header';
import {BrowserRouter} from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function Main ()
{
    return (
        <div>
        <Header/>
        <Sidebar width={280}/>
        <h3>메인 화면</h3>
        </div>
    )
}

export default Main;