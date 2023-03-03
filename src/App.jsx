import React, { createContext, useReducer } from 'react';
import Spinner from './components/Spinner';
import Diagram from './components/Diagram';

const defaultState = {
  storage: 100,
  transfer: 400,
  hdd: true,
  multi: true,
};
export const StoreContext = createContext(null);
export default function App() {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    defaultState,
  );
  return (
    <StoreContext.Provider value={{ state, setState }}>
      <div className="container">
        <Spinner />
        <Diagram />
      </div>
    </StoreContext.Provider>
  );
}
