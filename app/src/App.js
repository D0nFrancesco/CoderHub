import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";


// styling
import './styling/main.scss';

// pages

import LandingPage from './pages/landing';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import Chat from './pages/chat';
import HomePage from './pages/home';
import UserProfilePage from './pages/userProfilePage';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <BrowserRouter>
            
              <div className="container">

                <Routes>

                  <Route  path="/" element={<LandingPage />} />
                  <Route  path="/home" element={<HomePage />} />
                  
                  <Route  path="/register" element={<RegisterPage />} />
                  <Route  path="/login" element={<LoginPage />} />                  
                  
                  <Route  path="/chat" element={<Chat />} />

                  <Route  path="/user-profile" element={<UserProfilePage />} />
                  
                </Routes>

              </div>
      </BrowserRouter>
        
        
            
    );
  }
}




export default App;