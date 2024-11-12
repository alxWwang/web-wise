// Header.js
/*global chrome*/
import React from 'react';
import { useState, useEffect } from 'react';

import UserProfile from './UserProfile';
import Header from './Header'
import Footer from './Footer'
import CheckLink from './CheckLink';

const App = () => {
    const [currentView, setCurrentView] = useState(0)
    const [tabUrl, setTabUrl] = useState("");
    useEffect(()=>{
        console.log(currentView)
    }, [currentView])

    useEffect(() => {
        // Connect to the background script
        const port = chrome.runtime.connect();
    
        port.onMessage.addListener(function (message) {
        console.log("connected recieving")
          if (message.type === "NEW_URL") {
            console.log("Received URL via port:", message.url);
            // Trigger your hook or update state here
          }
        });
    
        return () => {
          port.disconnect();
        };
      }, []);

    return (
        <div style={{backgroundColor: '#', height: 
            '100vh'}}>
            <Header currentView={currentView} setCurrentView={setCurrentView}/>
            <div>
                {currentView === 0 && <UserProfile />}
                {currentView === 1 && <CheckLink onFirstButtonClick={()=>{console.log('continue')}} onSecondButtonClick={()=>{console.log('stay safe')}}/>}
                {currentView === 2 && <p>View2</p>}
            </div>
            <Footer/>
        </div>
    );




};

export default App;
