import React from 'react';
export default function Diagram() {
  return (
    <div>
      <div className="provider-container">
        <span>backblaze</span>
        <img src="" alt="backblaze icon"></img>
      </div>
      <div className="provider-container">
        <span>bunny</span>
        <img src="" alt="bunny icon"></img>
        <input type="radio" name="HDD" value="HDD" defaultChecked={true} />
        <label htmlFor="HDD">HDD</label>
        <input type="radio" name="HDD" value="SSD" />
        <label htmlFor="HDD">SSD</label>
      </div>
      <div className="provider-container">
        <span>scaleway</span>
        <img src="" alt="scaleway"></img>
        <input type="radio" name="type" value="multi" defaultChecked={true} />
        <label htmlFor="type">Multi</label>
        <input type="radio" name="type" value="single" />
        <label htmlFor="type">Single</label>
      </div>
      <div className="provider-container">
        <span>vultr</span>
        <img src="" alt="vultr icon"></img>
      </div>
    </div>
  );
}
