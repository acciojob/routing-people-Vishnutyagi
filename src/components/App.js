
import React from "react";
import '../styles/App.css';
import {Route,Routes,Link} from 'react-router-dom';
import Usero from './Usero';
// import Usero from "../components/Usero"
import Usert from './Usert';
import Usertr from './Usertr';
import Userf from './Userf';
import Home from "./home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path='/o' element={<Usero/>}/> 
          <Route path='/t' element={<Usert/>}/> 
          <Route path='/tr' element={<Usertr/>}/> 
          <Route path='/f' element={<Userf/>}/> 
      </Routes>
    </div>
  )
}

export default App
