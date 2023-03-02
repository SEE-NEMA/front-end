import React, { useState } from 'react';
import Header from './Header';
import { AiOutlineBars } from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import Sidebar from './components/Sidebar';
import Main from './screens/Main';
import {BrowserRouter,Switch, Route, Routes} from "react-router-dom";
import Login from './screens/Login';
import Review from './screens/Review/Review';
import Perform_Review from './screens/Review/ReviewWrite';
import Signup from './screens/Signup'


function App ()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main/>}></Route>
        <Route path={"/Login"} element={<Login/>}></Route>
        <Route path={"/Signup"} element={<Signup/>}></Route>
        <Route path={"/Review"} element={<Review/>}></Route>
        <Route path={"/perform_review"} element={<Perform_Review/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;