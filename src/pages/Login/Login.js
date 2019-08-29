import React from 'react';
import './Login.scss';
import Logo from './logo.png';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Login extends React.Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: '',
    }
  }
    
    clickLoginBtn = () => {
      if(this.state.email.length === 0) {
        alert('Email을 입력해주세요')
      }
      if(this.state.password.length === 0) {
        alert('Password를 입력해주세요')
      } 
      this.props.history.push('/')
    };
  
    setEmail = (e) => {
      this.setState({email: e.target.value})
    }
    
    setPassword = (e) => {
      this.setState({password: e.target.value})
    }

    render() {
    return (
    <div className="login_page">
      <div className="login_container">
        <article className="login_content">
          <div className="login_wrapper">
            <div className="login_header">
              <Link to="/"><img className="login_logo" src={Logo} alt="logo_img"></img></Link>
            </div>
            <div className="login_info">
              <div className="login_title">Log in.</div>
              <div className="login_subtitle">Please enter your Email</div>
            </div>
            <div className="login_form">
              <input 
              onChange={this.setEmail}
              className="login_input" type="email" placeholder="Your Email" value={this.state.email} />
              <input 
               onChange={this.setPassword}
               className="login_input" type="password" placeholder="Your Password" value={this.state.password} />
              {/* <button className="login_btn">Login</button> */}
              <input type="button" className="login_btn" value="Login" onClick={this.clickLoginBtn} />
              <div className="login_checkbox">
                <input type="checkbox" className="login_check"></input>
                <label>Remember me</label>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div> 
             
  )
}
}

export default withRouter(Login);