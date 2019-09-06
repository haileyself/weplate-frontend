import React, { Component } from 'react';
import './Signup.scss';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../imges/logo-orange.png';

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      repassword: '',
      name: '',
    };
  }

  clickSignupBtn = () => {
    const {
      email,
      password,
      name,
      repassword,
    } = this.state;

    if (name.length === 0) {
      alert('이름을 입력해주세요');
      return;
    }

    if (email.length === 0) {
      alert('Email을 입력해주세요');
      return;
    }

    if (password.length === 0) {
      alert('Password를 입력해주세요');
      return;
    }

    if (repassword.length === 0) {
      alert('Password 재입력을 입력해주세요');
      return;
    }

    if (repassword !== password) {
      alert('Password와 Password 재입력이 일치하지 않습니다.');
      return;
    }

    fetch('http://10.58.7.15:8000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_name: this.state.name,
        user_email: this.state.email,
        user_password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.message === 'SUCCESS') {
          alert('회원가입을 축하합니다.');
          this.props.history.push('/login');
        } else {
          alert(response.error_message);
        }
      });
  };

  setName = (e) => {
    this.setState({ name: e.target.value });
  }

  setEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  setPassword = (e) => {
    this.setState({ password: e.target.value });
  }

  setRePassword = (e) => {
    this.setState({ repassword: e.target.value });
  }

  render() {
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
              <input
                onChange={this.setEmail}
                type="email"
                placeholder="Please enter your Email"
                value={this.state.email}
                maxLength="30"
              />
              <input
                onChange={this.setName}
                type="text"
                placeholder="Please enter your Name"
                value={this.state.name}
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
                onChange={this.setRePassword}
                type="password"
                placeholder="Your Password"
                value={this.state.repassword}
                maxLength="8"
              />
              <input type="button" className="signup-btn" value="Register" onClick={this.clickSignupBtn} />
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default withRouter(Signup);
