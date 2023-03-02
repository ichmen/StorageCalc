import React, { useReducer } from 'react';

const initialState = { storageValue: 100, transferValue: 400 };

export default function Spinner() {
  const [values, setValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState,
  );
  function transferChangeHandler(value) {
    setValues({ transferValue: value });
  }
  function storageChangeHandler(value) {
    setValues({ storageValue: value });
  }
  return (
    <div>
      <span>{values.storageValue}</span>
      <input
        type="range"
        min="0"
        max="1000"
        onChange={e => storageChangeHandler(e.target.value)}
      ></input>
      <span>{values.transferValue}</span>
      <input
        type="range"
        min="0"
        max="1000"
        step="1"
        onChange={e => transferChangeHandler(e.target.value)}
      ></input>
    </div>
  );
}
