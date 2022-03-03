import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Checkbox from "../components/checkbox";
import { login, reset } from "../reducers/auth";

import { useAlert } from 'react-alert';

const LoginPage = () => {
    const alert = useAlert();

    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) alert.show(message);

        if (isSuccess || user) {
            alert.show("Logged in successfully");
            navigate('/');
        }
        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      }
    
    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
          email,
          password,
        }
        dispatch(login(userData));
    }

    return ( 
        <div className="loginPage">
            <div className="img">
                <div className="logo">CoderHub</div>
            </div>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <h1>Sign in for CoderHub</h1>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={onChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password}
                        onChange={onChange}
                    />
                    <div className="forgot">
                        <Link to="/forgotPassword">Forgot Password?</Link>
                    </div>
                    <Checkbox
                        text="Remember Me"
                    />
                    <input type="submit" value="Sign In" id="submit"/>
                </form>
                <p className='text'>Don't have an account? <Link to="/register">Register here</Link></p>
            </section>
        </div>
    )
};

export default LoginPage;