
import React from "react";
import '../styles/App.css';
import {Route,Routes,Link} from 'react-router-dom';
import Usero from './Usero';
import Usert from './Usert';
import Usertr from './Usertr';
import Userf from './Userf';
import Home from "./home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path='/users/1' element={<Usero/>}/> 
          <Route path='/users/2' element={<Usert/>}/> 
          <Route path='/users/3' element={<Usertr/>}/> 
          <Route path='/users/4' element={<Userf/>}/> 
      </Routes>
    </div>
  )
}

export default App
