import React from 'react'
import { Link } from 'react-router-dom'

const items=[
  { id: 1, name: 'Leanne Graham', description: 'Description for Item 1',username: "Bret",email:"Sincere@april.biz" ,Phone: "1-770-736-8031 x56442",Website: "hildegard.org"},
  { id: 2, name: 'Ervin Howell', description: 'Description for Item 2' ,username: "Antonette",email:"Sincere@april.biz",Phone: "1-770-736-8031 x56442",Website: "hildegard.org" },
  { id: 3, name: 'Clenmentine Bouch', description: 'Description for Item 3',username: "Samantha",email:"Sincere@april.biz" ,Phone: "1-770-736-8031 x56442",Website: "hildegard.org" },
  { id: 4, name: 'Patricia Labsack', description: 'Description for Item 3',username: "Bret" ,email:"Sincere@april.biz",Phone: "1-770-736-8031 x56442",Website: "hildegard.org" },
  { id: 5, name: 'Clementina DuBuque', description: 'Description for Item 3',username: "Bret" ,email:"Sincere@april.biz",Phone: "1-770-736-8031 x56442",Website: "hildegard.org" }
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