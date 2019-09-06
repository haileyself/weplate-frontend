import React from 'react';
import './Login.scss';
import { Link, withRouter } from 'react-router-dom';
// import kakao from 'react-kakao-login';
import Logo from '../../imges/logo-orange.png';

window.Kakao.init('f8649f9322f32e7bc59c64a23e9ae213');
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      Kakao: {},
    };
  }


  componentDidMount() {
    window.Kakao.Auth.createLoginButton({
      container: '#kakao_login_btn',
      success(authObj) {
        alert(JSON.stringify(authObj));
        // console.log(authObj);
      },
      fail(err) {
        alert(JSON.stringify(err));
      },
    });
    this.setState({
      Kakao: window.Kakao,
    });
  }

  onClickHandleKakaoLogin = () => {
    this.state.Kakao.Auth.login({
      success: (kakaotoken) => {
        fetch('http://10.58.7.15:8000/users/kakaologin', {
          headers: {
            Authorization: kakaotoken.access_token,
          },
        }).then((response) => response.json())
          .then((response) => {
            if (response.access_token) {
              localStorage.setItem('weple-token', response.access_token);
              this.props.history.push('/');
            }
          });
      },
    });
  }


  clickLoginBtn = async () => {
    if (this.state.email.length === 0) {
      alert('Email을 입력해주세요');
      return;
    }
    if (this.state.password.length === 0) {
      alert('Password를 입력해주세요');
      return;
    }

    fetch('http://10.58.7.15:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_email: this.state.email,
        user_password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.user_access_token) {
          localStorage.setItem('weple-token', response.user_access_token);
          this.props.history.push('/');
        } else if (response.error_message) {
          alert(response.error_message);
        }
      });
  }


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
                  <div className="login_checkbox">
                    <input type="checkbox" className="login_check" />
                    <label>Remember me</label>
                  </div>
                  <input type="button" className="login_btn" value="Login" onClick={this.clickLoginBtn} />
                 

                  <div id="kakao_login_btn" onClick={this.onClickHandleKakaoLogin} />

                </div>
              </div>
            </article>
          </div>
        </div>
      );
    }
}


export default withRouter(Login);
