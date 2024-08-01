import React, { useState, useEffect } from 'react';

function Userf() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch with a timeout
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>User Details</h1>
          <p>Name: Ram</p>
        </div>
      )}
    </div>
  );
}

export default Userf;
