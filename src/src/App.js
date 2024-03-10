import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;