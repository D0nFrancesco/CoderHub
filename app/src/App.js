// styling
import './styling/main.scss';

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

// pages
import LandingPage from './pages/landing';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import Chat from './pages/chat';
import HomePage from './pages/home';
import UserProfilePage from './pages/userProfilePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/* we are gonna change this routing later */}
          <Routes>
            <Route  path="/" element={<LandingPage />} />
            <Route  path="home" element={<HomePage />} />
            <Route  path="register/*" element={<RegisterPage />} />
            <Route  path="login" element={<LoginPage />} />                  
            <Route  path="chat" element={<Chat />} />
            <Route  path="user-profile" element={<UserProfilePage />} />
          </Routes>
        </div>
      </BrowserRouter>    
    );
  }
}




export default App;