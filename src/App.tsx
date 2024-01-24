import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import Social from './screens/SocialUIKit/SocialUIKit';
import Chat from './screens/ChatUIKit/ChatUIKit';

function App() {
  return (
    <Router>
      <div className='App'>
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/social" element={<Social />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      
      </div>
    </Router>

  );
}

export default App;
