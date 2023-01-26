import React, { useState } from 'react';
import Header from './Header';
import { AiOutlineBars } from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import Sidebar from './components/Sidebar';
import {BrowserRouter,Switch, Route} from "react-router-dom";

function App ()
{
  return(
    <BrowserRouter>
      <Header/>
      <Sidebar/>
    </BrowserRouter>
  )
}

export default App;