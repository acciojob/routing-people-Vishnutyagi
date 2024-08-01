import React from 'react'
import { Link } from 'react-router-dom'


function Home() {

  return (
    <div>
        <h1>User List</h1>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/users/1">Leanne Graham</Link></li>
              <li><Link to="/users/2">Ervin Howell</Link></li>
              <li><Link to="/users/3">Clenmentine Bouch</Link></li>
              <li><Link to="/users/4">Ram</Link></li>
          </ul>
         
        
    </div>
  )
}

export default Home