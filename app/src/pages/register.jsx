import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Checkbox from "../components/checkbox";
import { register, reset } from "../reducers/auth";

import { useAlert } from 'react-alert';

const RegisterPage = () => {
  const alert = useAlert();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) alert.show(message);

    if (isSuccess) {
      // console.log(message);
      alert.show("user created succesfully");
      navigate('/');
    }

    if(user) {
      alert.show("You are logged in 😸");
      navigate('/');
    }
    dispatch(reset())
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
      name,
      email,
      password,
    }
    dispatch(register(userData));
  }

    return (
      <div className="registerPage">
        <div className="img">
          <div className="logo">CoderHub</div>
        </div>
        <div className="form">
          <form onSubmit={onSubmit}>
            <h1>Register for CoderHub</h1>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              required 
              name="name" 
              id="name" 
              className="name"
              onChange={onChange}
              value={name}
            />
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              required 
              className="email" 
              id="email" 
              name="email"
              onChange={onChange}
              value={email}
            />
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              required 
              id="password" 
              className="password" 
              onChange={onChange}
              value={password}
            />
            <Checkbox
              text="I've read and agree with Terms of Service and our Privacy Policy."
            />
            <input type="submit" value="Register" id="submit"/>
          </form>
          <p>Already have an account? <Link to='/login'>Sing in</Link></p>
        </div>
      </div>
    )
}

export default RegisterPage;