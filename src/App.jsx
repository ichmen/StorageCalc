import React from 'react';
import Spinner from './components/Spinner';
import Diagram from './components/Diagram';

export default function App() {
  return (
    <div className="container">
      <Spinner />
      <Diagram />
    </div>
  );
}
