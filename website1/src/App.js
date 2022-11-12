import logo from './logo.svg'
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import React from 'react';
import { useState } from 'react'
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage';
import AnimalPostView from './Components/AnimalPostView';



function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<AnimalPostView />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
