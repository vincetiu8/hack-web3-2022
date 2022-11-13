import logo from './logo.svg'
import './App.css';

import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import { useState , useEffect } from 'react'
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage';
import ProfilePage from './Components/ProfilePage';
import User from './Components/User';


function App() {
  const [address, setAddress] = useState(null);
  async function fn() {
    try {
          if (!window.tronLink.ready) {
              const res = await window.tronLink.request({method: 'tron_requestAccounts'})
          }

          if (!window.tronLink.defaultAddress) {
            User.setAddress(window.tronLink.tronWeb.defaultAddress.base58);
            setAddress(window.tronLink.tronWeb.defaultAddress.base58);
          }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (window.tronLink.ready) {
      User.setAddress(window.tronLink.tronWeb.defaultAddress.base58);
      setAddress(window.tronLink.tronWeb.defaultAddress.base58);
    }
}, [])

  return (
    <Router>
      <div className="App">
        {
          address != null ? 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes> : 
        <button onClick = {fn}> Connect Wallet</button>
      }
      </div>
    </Router>
  )
}

export default App;
