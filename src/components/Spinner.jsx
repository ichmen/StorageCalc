import React, { useContext, useReducer } from 'react';

import { StoreContext } from '../App';

export default function Spinner() {
  const { state, setState } = useContext(StoreContext);

  return (
    <div className="spinner">
      <span className="amount-info">{`STORAGE:  ${state.storage} GB`}</span>
      <input
        className="spin"
        type="range"
        min="0"
        max="1000"
        value={state.storage}
        onChange={e => setState({ storage: e.target.value })}
      ></input>
      <span className="amount-info">{`TRANSFER:  ${state.transfer} GB`}</span>
      <input
        className="spin"
        type="range"
        min="0"
        max="1000"
        step="1"
        value={state.transfer}
        onChange={e => setState({ transfer: e.target.value })}
      ></input>
    </div>
  );
}
