import React, { Component } from 'react';
import './Signup.scss';
import Logo from './logo.png';
import {Link, withRouter } from 'react-router-dom';

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  clickLoginBtn = () => {
    const {
      email,
      password,
      history,
    } = this.state;

    if (email.length === 0) {
      alert('Email을 입력해주세요');
    }
    if (password.length === 0) {
      alert('Password를 입력해주세요');
    }
    history.push('/');
  };

    setEmail = (e) => {
      this.setState({ email: e.target.value });
    }

    setPassword = (e) => {
      this.setState({ password: e.target.value });
    }

    render() {
      return (
        <div className="signup-page">  
          <article className="signup-content">
            <div className="input-wrap">
              <div className="signup-header">
                  <Link to="/"><img class="signup-logo" src={Logo} alt="logo_img"></img></Link>
              </div>
              <div className="signup-info">
                <div className="signup-title">Register.</div>
                <div className="signup-subtitle">Enter your email to create an account.</div>
              </div>
              <div className="signup-form">
                <input 
                  onChange={this.setEmail} 
                  type="email" 
                  placeholder="Please enter your Email" 
                  value={this.state.email}
                  maxLength="30" 
                /> 
                <input 
                  onChange={this.setPassword}
                  type="password" 
                  placeholder="Your Password" 
                  value={this.state.password}
                  maxLength="8" 
                /> 
                <input 
                  onChange={this.setPassword}
                  type="password" 
                  placeholder="Your Password" 
                  value={this.state.password}
                  maxLength="8" 
                />
                <input type="button" className="signup-btn" value="Register"  onClick={this.clickLoginBtn} />
              </div>
            </div>
          </article>
        </div>
      );
    }
}

export default withRouter(Signup);
