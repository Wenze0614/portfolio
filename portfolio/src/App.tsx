import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/profile' />
        <Route path='/projects' />
      </Routes>
    </div>
  );
}

export default App;
