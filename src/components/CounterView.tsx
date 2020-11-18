import React, { useContext } from 'react';

import { CounterContext } from '../context/CounterContext';

export default function CounterView() {
  const [count, setCount] = useContext(CounterContext);
  return (
    <div
      style={{
        border: '2px solid red',
        backgroundColor: '#f1f3f6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
      }}
    >
      <h2>Counter: {count}</h2>
      <i>This is CounterView component</i>
    </div>
  );
}
