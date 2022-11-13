import logo from './logo.svg'
import './App.css';
// import button
import { Button } from 'react-bootstrap';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import { useState, useEffect } from 'react'
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage';
import ProfilePage from './Components/ProfilePage';
import { Container, Navbar } from "react-bootstrap";


function App() {


  const [address, setAddress] = useState(null)

  const [checkedCache, setCheckedCache] = useState(false)

  console.log(address)
  console.log(checkedCache)

  if (!checkedCache) {
    cache()
  }

  async function cache() {
    const cache = await caches.open('user');
    const response = await cache.match('address');
    setAddress(response ? await response.text() : null)
    setCheckedCache(true)
  }


  const clearCacheData = async () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    setAddress(null);
  };

  const addDataIntoCache = async (cacheName, request, response) => {
    // Converting our response into Actual Response form
    if ('caches' in window) {
      // Opening given cache and putting our data into it
      caches.open(cacheName).then((cache) => {
        cache.put(request, new Response(response));
      });
    }
  };


  async function fn() {
    try {
      if (!window.tronLink.ready) {
        const res = await window.tronLink.request({ method: 'tron_requestAccounts' })
        addDataIntoCache('user', 'address', window.tronLink.tronWeb.defaultAddress.base58);
        setAddress(window.tronLink.tronWeb.defaultAddress.base58);
      }
    } catch (e) {
      console.log(e);
    }
  }



  useEffect(() => {

  }, [address])


  return (
    <Router>
      <div className="App" style={{ backgroundImage: 'url(forest.jpg)', backgroundSize: 'cover' }}>
        {
          address != null ?

            <Routes>
              <Route path="/" element={<LandingPage onClearCacheButton={clearCacheData} />} />
              <Route path="/home" element={<HomePage onClearCacheButton={clearCacheData} />} />
              <Route path="/profile" element={<ProfilePage onClearCacheButton={clearCacheData} />} />
            </Routes> :

            (

              <Container style={{
                display: "flex",
                flex: 1,
                height: "100vh",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                <Container
                  style={{
                    backgroundColor: "darkgreen",
                    borderRadius: 10,
                    padding: 20,
                    width: "fit-content"
                  }}
                >
                  <Container>

                    <Button
                      onClick={fn}
                      style={{ backgroundColor: '#b5f092', color: 'black' }}>
                      Connect Wallet
                    </Button>

                  </Container>
                </Container>
              </Container>

            )
        }
      </div>
    </Router>
  )
}
export default App;
