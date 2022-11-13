import logo from './logo.svg'
import './App.css';

import * as React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"

import {useState, useEffect } from 'react'
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage';
import ProfilePage from './Components/ProfilePage';
import {Container} from "react-bootstrap";
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

const style = {
  backgroundColor: 'black',
  color: 'white',
  fontSize: '20px',
  padding: '10px 60px',
  borderRadius: '5px',
  margin: '10px 0px',
  cursor: 'pointer',
 
};
const divstyle = {position: 'relative', height: '700px',  top : '350px'};


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
         (<div style = {divstyle}>
          <button onClick = {fn} style = {style}> Connect Wallet</button>
  </div>)
      }
            </div>
        </Router>
    )
}

export default App;
