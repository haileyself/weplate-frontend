import React from 'react';
import './Signup.scss';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

function Signup() {
  return (
    <div className="signup-page">
      <article className="signup-content">
        <div className="input-wrap">
          <div className="signup-header">
            <Link to="/"><img className="signup-logo" src={Logo} alt="logo_img" /></Link>
          </div>
          <div className="signup-info">
            <div className="signup-title">Register.</div>
            <div className="signup-subtitle">Enter your email to create an account.</div>
          </div>
          <div className="signup-form">
            <input type="email" placeholder="Please enter your Email" maxLength="30" />
            <input type="password" placeholder="Your Password" maxLength="8" />
            <input type="password" placeholder="Your Password" maxLength="8" />
            <input type="button" className="signup-btn" value="Register" />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Signup;
