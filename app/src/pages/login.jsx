import React from "react";
import { Link } from "react-router-dom";
import Checkbox from "../components/checkbox";

const LoginPage = () => {
    return ( 
        <div className="loginPage">
            <div className="img">
                <div className="logo">CoderHub</div>
            </div>
            <section className="form">
                <form action="">
                    <h1>Sign in for CoderHub</h1>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                    />
                    <div className="forgot">
                        <Link to="/forgotPassword">Forgot Password?</Link>
                    </div>
                    <Checkbox text="Remember Me"/>
                    <input type="submit" value="Sign In" id="submit"/>
                </form>
                <p>Don't have an account? <Link to="/register">Register here</Link></p>
            </section>
        </div>
    )
};

export default LoginPage;