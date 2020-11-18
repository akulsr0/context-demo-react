import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import '../App.css';

export default function CounterEdit() {
  const [count, setCount] = useContext(CounterContext);
  return (
    <div
      style={{
        border: '2px solid red',
        backgroundColor: '#f1f3f6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
        padding: 10,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button
          onClick={() => {
            if (setCount) setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            if (setCount) setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          if (setCount) setCount(0);
        }}
      >
        Reset
      </button>
      <i style={{ marginTop: 10 }}>This is CounterEdit component</i>
    </div>
  );
}
