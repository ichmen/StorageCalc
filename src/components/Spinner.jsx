import React, { useContext, useReducer } from 'react';

import { StoreContext } from '../App';

export default function Spinner() {
  const { state, setState } = useContext(StoreContext);

  return (
    <div>
      <span className="amount-info">{`${state.storage} GB`}</span>
      <input
        type="range"
        min="0"
        max="1000"
        onChange={e => setState({ storage: e.target.value })}
      ></input>
      <span className="amount-info">{`${state.transfer} GB`}</span>
      <input
        type="range"
        min="0"
        max="1000"
        step="1"
        onChange={e => setState({ transfer: e.target.value })}
      ></input>
    </div>
  );
}
