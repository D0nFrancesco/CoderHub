import React  from "react";
import { Link } from "react-router-dom";

import Checkbox from "../components/checkbox";
import bg from "../img/bgAuth.png";

const RegisterPage = () => {
  return (
      <div className="registerPage">
        <div className="img">
          <div className="logo">CoderHub</div>
        </div>
        <div className="form">
          <form action="" method="post">
            <h1>Register for CoderHub</h1>
            <label htmlFor="name">Name</label>
            <input type="text" required name="name" id="name" className="name"/>
            <label htmlFor="email">Email</label>
            <input type="email" required className="email" id="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required id="password" className="password" />
            <Checkbox text="I've read and agree with Terms of Service and our Privacy Policy."/>
            <input type="submit" value="Register" id="submit"/>
          </form>
          <p>Already have an account? <Link to='/login'>Sing in</Link></p>
        </div>
      </div>
  )
};

export default RegisterPage;