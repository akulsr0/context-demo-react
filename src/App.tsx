import React from 'react';
import { CounterProvider } from './context/CounterContext';
import CounterView from './components/CounterView';
import CounterEdit from './components/CounterEdit';

function App() {
  return (
    <CounterProvider>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'moccasin',
        }}
      >
        <h1>React Context API Demo</h1>
        <CounterView />
        <CounterEdit />
      </div>
    </CounterProvider>
  );
}

export default App;
