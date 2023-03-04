import React from 'react';
import { costCalculator } from '../utils/utils';
const scaleRatio = 5;

export default function Bars({ state }) {
  const barsHeight = costCalculator(state);
  //   console.log(barsHeight);
  const smallestValue = Math.min(...Object.values(barsHeight));
  return (
    <div className="bars">
      <div
        className="bars__item"
        style={{
          width: `${barsHeight.backblaze * scaleRatio}px`,
          background: `${barsHeight.backblaze === smallestValue ? 'red' : 'aqua'}`,
        }}
      >
        {`${Math.round(barsHeight.backblaze * 100) / 100}$`}
      </div>
      <div
        className="bars__item"
        style={{
          width: `${barsHeight.bunny * scaleRatio}px`,
          background: `${barsHeight.bunny === smallestValue ? 'red' : 'aqua'}`,
        }}
      >
        {`${Math.round(barsHeight.bunny * 100) / 100}$`}
      </div>
      <div
        className="bars__item"
        style={{
          width: `${barsHeight.scaleway * scaleRatio}px`,
          background: `${barsHeight.scaleway === smallestValue ? 'red' : 'aqua'}`,
        }}
      >
        {`${Math.round(barsHeight.scaleway * 100) / 100}$`}
      </div>
      <div
        className="bars__item"
        style={{
          width: `${barsHeight.vultr * scaleRatio}px`,
          background: `${barsHeight.vultr === smallestValue ? 'red' : 'aqua'}`,
        }}
      >
        {`${Math.round(barsHeight.vultr * 100) / 100}$`}
      </div>
    </div>
  );
}
