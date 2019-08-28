import React from 'react';
import './Login.scss';
import Logo from './logo.png';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className="login_page">
      <div className="login_container">
        <article className="login_content">
          <div className="login_wrapper">
            <div className="login_header">
              <Link to="/main"><img className="login_logo" src={Logo} alt="logo_img"></img></Link>
            </div>
            <div className="login_info">
              <div className="login_title">Log in.</div>
              <div className="login_subtitle">Please enter your Email</div>
            </div>
            <div className="login_form">
              <input className="login_input" type="email" placeholder="Your Email"/>
              <input className="login_input" type="password" placeholder="Your Password"/>
              {/* <button className="login_btn">Login</button> */}
              <input type="button" className="login_btn" value="Login" />
              <div className="login_checkbox">
                <input type="checkbox" className="login_check"></input>
                <label>Remember me</label>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div> 
        
      
  );
}
export default Login;