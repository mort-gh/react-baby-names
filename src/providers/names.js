import React, { createContext, useContext } from 'react';
import { names } from '../data';

// 1. Create Context
const NamesContext = createContext();

// 2. Context Provider
export function NamesProvider({ children }) {
  return (
    <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
  );
}

// 3. Create custom context
export function useNames() {
  const context = useContext(NamesContext);

  if (!context) {
    throw new Error('You probably forgot a <NamesProvider> context provider');
  }

  return context;
}
