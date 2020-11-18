import React, { createContext, Dispatch, useState } from 'react';

export const CounterContext = createContext<
  [number, React.Dispatch<React.SetStateAction<number>> | null]
>([0, null]);

export const CounterProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={[count, setCount]}>
      {props.children}
    </CounterContext.Provider>
  );
};
