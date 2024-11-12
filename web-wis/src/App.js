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
