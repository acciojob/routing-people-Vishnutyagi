import React from 'react'
import { Link } from 'react-router-dom'

const items=[
  { id: 1, name: 'Leanne Graham', description: 'Description for Item 1' },
  { id: 2, name: 'Ervin Howell', description: 'Description for Item 2' },
  { id: 3, name: 'Clenmentine Bouch', description: 'Description for Item 3' },
  { id: 3, name: 'Patricia Labsack', description: 'Description for Item 3' },
  { id: 3, name: 'Item 1', description: 'Description for Item 1' },
  { id: 3, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' }
];

function Home() {

  return (
    <div>
        <h1>User List</h1>
          <ul>
              {items.map(item => (
              <li key={item.id}>
                <Link to={`/users/${item.id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
    </div>
  )
}

export default Home