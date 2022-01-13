import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/projects' />
        <Route path='/' element={<Home></Home>}>
          <Route path='profile' element={<Profile></Profile>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
