// pages/Home.js
import React from 'react';
import ComingSoon from './coming-soon.svg'
import './ChatUIKit.css'

const Home = () => {
    return (

        <div className='chat-container'>
            <div>
            <img src={ComingSoon}/>
            <p className='description'>Coming soon...</p>
            <p className='subtitle'>Please keep in touch for the Chat UIkit playground update</p>
            </div>
        
        </div>
    );
};

export default Home;
