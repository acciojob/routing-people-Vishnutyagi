import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const items=[
  { id: 1, name: 'Leanne Graham', description: 'Description for Item 1',username: "Bret",email:"Sincere@april.biz" ,Phone: "1-770-736-8031 x56442",Website: "hildegard.org"},
  { id: 2, name: 'Ervin Howell', description: 'Description for Item 2' ,username: "Antonette",email:"Sincere@april.biz",Phone: "1-770-736-8031 x56442",Website: "hildegard.org" },
  { id: 3, name: 'Clenmentine Bouch', description: 'Description for Item 3',username: "Samantha",email:"Sincere@april.biz" ,Phone: "1-770-736-8031 x56442",Website: "hildegard.org" },
  { id: 4, name: 'Patricia Labsack', description: 'Description for Item 3',username: "Bret" ,email:"Sincere@april.biz",Phone: "1-770-736-8031 x56442",Website: "hildegard.org" },
  { id: 5, name: 'Clementina DuBuque', description: 'Description for Item 3',username: "Moriah.Stanton" ,email:"Rey.Padberg@karina.biz",Phone: "024-648-3804",Website: "ambrose.net" }
];

function Users() {
  const [loading, setLoading] = useState(true);
  const {itemId}=useParams();
  const item = items.find(i => i.id === parseInt(itemId));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);
  return (
    <div>{loading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <h1>User Details</h1>
        <p>Name: {item.name}</p>
        <p>Username: {item.username} </p>
        <p>Email: {item.email} </p>
        <p>Phone: {item.Phone} </p>
        <p>Website: {item.Website}</p>
      </div>
    )}</div>
  )
}

export default Users