import React from 'react';
import './Signup.scss';
import Logo from './logo.png';
import {Link} from 'react-router-dom';

function Signup() {
  return (
    <div class="signup-page">  
      <article class="signup-content">
        <div class="input-wrap">
          <div class="signup-header">
              <Link to="/"><img class="signup-logo" src={Logo} alt="logo_img"></img></Link>
          </div>
          <div class="signup-info">
            <div class="signup-title">Register.</div>
            <div class="signup-subtitle">Enter your email to create an account.</div>
          </div>
          <div class="signup-form">
            <input type="email" placeholder="Please enter your Email" maxLength="30" /> 
            <input type="password" placeholder="Your Password" maxLength="8" /> 
            <input type="password" placeholder="Your Password" maxLength="8" />
            <input type="button" class="signup-btn" value="Register" />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Signup;
