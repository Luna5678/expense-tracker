import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import About from './pages/About';
import Settings from './pages/Settings';

import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/tracker' element={<Tracker />} />
          <Route path='/about' element={<About />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
