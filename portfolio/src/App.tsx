import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/profile' />
        <Route path='/projects' />
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;