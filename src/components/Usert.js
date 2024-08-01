import React from 'react'
import { useState, useEffect } from 'react';

function Usert() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a data fetch with a timeout
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay
  }, []);
  return (

    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>User Details</h1>
          <p>Name: Ervin Howell</p>
        </div>
      )}
    </div>
  )
}

export default Usert