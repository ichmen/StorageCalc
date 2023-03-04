import React, { useContext } from 'react';
import { StoreContext } from '../App';

export default function Diagram() {
  const { state, setState } = useContext(StoreContext);
  function handleStoreChange(value) {
    setState({ hdd: value === 'HDD' });
  }
  function handleModeChange(value) {
    setState({ multi: value === 'multi' });
  }

  return (
    <div className="providers">
      <div className="provider-container">
        <span>backblaze</span>
      </div>
      <div className="provider-container">
        <span>bunny</span>

        <div className="radio">
          <input
            type="radio"
            name="HDD"
            value="HDD"
            defaultChecked={true}
            onChange={e => handleStoreChange(e.target.value)}
          />
          <label htmlFor="HDD">HDD</label>
          <div className="radio">
            <input
              type="radio"
              name="HDD"
              value="SSD"
              onChange={e => handleStoreChange(e.target.value)}
            />
            <label htmlFor="HDD">SSD</label>
          </div>
        </div>
      </div>
      <div className="provider-container">
        <span>scaleway</span>
        <div className="radio">
          <input
            type="radio"
            name="type"
            value="multi"
            defaultChecked={true}
            onChange={e => handleModeChange(e.target.value)}
          />
          <label htmlFor="type">Multi</label>
          <div className="radio">
            <input
              type="radio"
              name="type"
              value="single"
              onChange={e => handleModeChange(e.target.value)}
            />
            <label htmlFor="type">Single</label>
          </div>
        </div>
      </div>
      <div className="provider-container">
        <span>vultr</span>
      </div>
    </div>
  );
}
