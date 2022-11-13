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

import {useState, useEffect} from 'react'
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage';
import ProfilePage from './Components/ProfilePage';
import {Container, Navbar} from "react-bootstrap";


function App() {

  async function cache() {
    const cache = await caches.open('user');
    const response = await cache.match('address');
    Promise.resolve(response).then(async () => setAddress(response ? await response.text() : null));

  }
  
  const [address, setAddress] = useState(cache());

  const clearCacheData = async () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    setAddress(null);
    alert('Complete Cache Cleared')
  };

  const addDataIntoCache = async (cacheName, request, response) => {
    // Converting our response into Actual Response form  
    if ('caches' in window) {
      // Opening given cache and putting our data into it
      caches.open(cacheName).then((cache) => {
        cache.put(request, new Response(response));
        alert('Data Added into cache!')
      });
    }
  };
  

  async function fn() {
    try {
      if (!window.tronLink.ready) {
        const res = await window.tronLink.request({method: 'tron_requestAccounts'})
        addDataIntoCache('user', 'address', window.tronLink.tronWeb.defaultAddress.base58);
        setAddress(window.tronLink.tronWeb.defaultAddress.base58);
      }
    } catch (e) {
      console.log(e);
    }
  }



  useEffect(() => {
    // if (window.tronLink) {
    //   if (window.tronLink.ready) {
    //     addDataIntoCache('user', 'address', window.tronLink.tronWeb.defaultAddress.base58);
    //   }
    // }
    // console.log(window.tronLink.tronWeb.defaultAddress.base58);
    console.log(address);
}, [address])


  return (
    <Router>
      <div className="App" style = {{backgroundImage : 'url(forest.jpg)'}}>
        {/* <Navbar style = {{backgroundColor: "#e2ffd1"}}>
          <Container fluid>
          <Navbar.Collapse className="justify-content-end">
        
        </Navbar.Collapse>
        </Container>
        </Navbar> */}
        
        {
          address != null ? 
          
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
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
                        style = {{backgroundColor: '#b5f092', color: 'black'}}>
                            Connect Wallet
                        </Button>
                    
                </Container>
            </Container>
        </Container>
            
        )
      }
      <div style = {{height: '100px', justifyContent: 'center'}}>
            <Button onClick = {clearCacheData}> Clear Cache </Button>
      </div>
            </div>
        </Router>
    )
}
export default App;
