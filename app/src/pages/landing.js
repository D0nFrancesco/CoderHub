import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import landing_svg from '../img/landing.svg';

const LandingPage = () => {
    return (
        <div className = 'landing-page'>
            <h1 className='logo'>CoderHub</h1>

            <h1>Share, Interact,</h1>

            <h1>Connect with other Coders</h1>

            <p>Join our community where you can share your projects, get feedback and</p> 
            
            <p>interact with other programmers to grow together.</p>

            <div className='btns'>
            <button className='start-btn'>
                <Link to='/'>Start Now</Link>
            </button>

            <button className='explore-btn'>
                <Link to='/'>Explore</Link>
            </button>
            </div>

            <div className='svg-img'>
                <img src={ landing_svg } alt=''></img>
            </div>

        </div>
    )
};

export default LandingPage;