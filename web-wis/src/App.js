// Header.js
import React from 'react';
import { useState, useEffect } from 'react';

import UserProfile from './UserProfile';
import Header from './Header'
import Footer from './Footer'
import CheckLink from './CheckLink';

const App = () => {
    const [currentView, setCurrentView] = useState(0)
    useEffect(()=>{
        console.log(currentView)
    })

    useEffect(() => {
        // Set up the message listener
        const handleMessage = (message) => {
          if (message.type === "NEW_URL") {
            console.log("Received URL in React component:", message.url);
            setTabUrl(message.url);
          }
        };
    
        // Listen for messages from the background script
        chrome.runtime.onMessage.addListener(handleMessage);
    
        // Cleanup listener when component unmounts
        return () => {
          chrome.runtime.onMessage.removeListener(handleMessage);
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
