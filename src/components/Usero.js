import React from 'react'
import { useState, useEffect } from 'react';

function Usero() {
  const [loading, setLoading] = useState(true);
  return (
    <div>
        <h1>User Details</h1>
        <p>Name: Leanne Graham</p>
    </div>
  )
}

export default Usero