import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const items=[
  { id: 1, name: 'Leanne Graham', description: 'Description for Item 1' },
  { id: 2, name: 'Ervin Howell', description: 'Description for Item 2' },
  { id: 3, name: 'Clenmentine Bouch', description: 'Description for Item 3' },
  { id: 3, name: 'Patricia Labsack', description: 'Description for Item 3' },
  { id: 3, name: 'Item 1', description: 'Description for Item 1' },
  { id: 3, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' }
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
      </div>
    )}</div>
  )
}

export default Users