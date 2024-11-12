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
    })

    useEffect(() => {
        const messageListener = (message, sender, sendResponse) => {
          if (message.type === 'NEW_URL') {
            console.log('Received NEW_URL message:', message.url);
            // Handle the new URL as needed
          }
        };
    
        chrome.runtime.onMessage.addListener(messageListener);
    
        // Clean up the listener when the component unmounts
        return () => {
          chrome.runtime.onMessage.removeListener(messageListener);
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
