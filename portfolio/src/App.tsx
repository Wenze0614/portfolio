import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='profile' element={<Profile></Profile>}/>
          <Route path='projects' element={<Projects></Projects>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
