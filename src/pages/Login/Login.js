import React from 'react';
import './Login.scss';
import { Link, withRouter } from 'react-router-dom';

import Logo from './logo.png';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
    };
  } // end constructor

  clickLoginBtn = async () => {
    if (this.state.name.length === 0) {
      alert('이름을 입력해주세요');
      return;
    }

    if (this.state.email.length === 0) {
      alert('Email을 입력해주세요');
      return;
    }
    if (this.state.password.length === 0) {
      alert('Password를 입력해주세요');
      return;
    }

    fetch('http://10.58.7.15:8003/users/login', {
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
        if (response.user_access_token) {
          localStorage.setItem('weple-token', response.user_access_token);
          this.props.history.push('/');
        } else if (response.error_message) {
          alert(response.error_message);
        }
      });
  }

    setName = (e) => {
      this.setState({ name: e.target.value });
    };


    setEmail = (e) => {
      this.setState({ email: e.target.value });
    };

    setPassword = (e) => {
      this.setState({ password: e.target.value });
    };

    render() {
      return (
        <div className="login_page">
          <div className="login_container">
            <article className="login_content">
              <div className="login_wrapper">
                <div className="login_header">
                  <Link to="/"><img className="login_logo" src={Logo} alt="logo_img" /></Link>
                </div>
                <div className="login_info">
                  <div className="login_title">Log in.</div>
                  <div className="login_subtitle">Please enter your Email</div>
                </div>
                <div className="login_form">
                  <input
                    onChange={this.setName}
                    className="login_input"
                    type="text"
                    placeholder="Your Name"
                    value={this.state.name}
                  />
                  <input
                    onChange={this.setEmail}
                    className="login_input"
                    type="email"
                    placeholder="Your Email"
                    value={this.state.email}
                  />
                  <input
                    onChange={this.setPassword}
                    className="login_input"
                    type="password"
                    placeholder="Your Password"
                    value={this.state.password}
                  />
                  <input type="button" className="login_btn" value="Login" onClick={this.clickLoginBtn} />
                  <div className="login_checkbox">
                    <input type="checkbox" className="login_check" />
                    <label>Remember me</label>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      );
    }
}


export default withRouter(Login);
