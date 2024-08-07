
import React from "react";
import '../styles/App.css';
import {Route,Routes,Link} from 'react-router-dom';
import Home from "./home";
import Users from "./users"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path='/users/:itemId' element={<Users/>}/> 
      </Routes>
    </div>
  )
}

export default App
