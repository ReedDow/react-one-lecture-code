import React from 'react';
import ClassComponent from './Components/ClassComponent';
import FuncComponent from './Components/FuncComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>I am a p tag in App.js!</p>
      <ClassComponent />
      <FuncComponent />
    </div>
  );
}

export default App;