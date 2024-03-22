// NumberManipulator.js

import React, { useState } from 'react';

const NumberManipulator = () => {
  const [number, setNumber] = useState(0);

  const handleIncrement = (value) => {
    setNumber((prevNumber) => prevNumber + value);
  };

  const handleDecrement = (value) => {
    setNumber((prevNumber) => prevNumber - value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <input type="number" value={number} readOnly style={{ marginBottom: '10px', fontSize: '20px', padding: '8px' }} />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => handleIncrement(1)} style={{ backgroundColor: '#5bc0de', color: 'purple', fontSize: '18px', padding: '10px 20px' }}>+1</button>
        <button onClick={() => handleDecrement(1)} style={{ backgroundColor: '#f0ad4e', color: '#fff', fontSize: '18px', padding: '10px 20px' }}>-1</button>
        <button onClick={() => handleIncrement(10)} style={{ backgroundColor: '#5cb85c', color: '#fff', fontSize: '18px', padding: '10px 20px' }}>+10</button>
        <button onClick={() => handleDecrement(10)} style={{ backgroundColor: '#d9534f', color: '#fff', fontSize: '18px', padding: '10px 20px' }}>-10</button>
      </div>
    </div>
  );
};

export default NumberManipulator;