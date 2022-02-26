import React from "react";
import { Link } from "react-router-dom";
import landing_svg from '../img/landing.svg';

const LandingPage = () => {
    return (
        <div className = 'landing-page'>
            <section>
                <div className='logo'>CoderHub</div>
            </section>
            <main>
                <h1>Share, Interact,</h1>
                <h1>Connect with other Coders</h1>
                <p>Join our community where you can share your projects, get feedback and</p> 
                <p>interact with other programmers to grow together.</p>
                <div className='links-btns'>
                    <Link className="start-link" to='register'>Start Now</Link>
                    <Link className="explore-link" to='home'>Explore</Link>
                </div>
            </main>
            <section className='svg-img'>
                <img src={ landing_svg } alt='people with laptops editing code'></img>
            </section>
        </div>
    )
};

export default LandingPage;