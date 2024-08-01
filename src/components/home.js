import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
         <h1>User List</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/o">vishnu</Link></li>
            <li><Link to="/t">Rahul</Link></li>
            <li><Link to="/tr">Shyam</Link></li>
            <li><Link to="/f">Ram</Link></li>
        </ul>
        
    </div>
  )
}

export default Home