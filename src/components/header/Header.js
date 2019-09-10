import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShowMenu from './ShowMenu';
import './header.scss';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.token = localStorage.getItem('weple-token');
    this.state = {
      scroll: 0,
      isLogin: false,
    };
  }

  componentDidMount() {
  // localStorage.setItem('apk', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZ2FwZ2kxMjM0IiwiZXhwIjo5MDMyNTQ5ODUzfQ.sHKjXN8J9v216OAld-el7cWWLdoUcxf0Mtxv1y6wTeo');
    window.addEventListener('scroll', this.handleScroll);
    this.getTokenKey();
  }


  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    // console.log(window.scrollY);
    this.setState({
      scroll: window.scrollY,
    });
    this.myRef.current.className = this.state.scroll >= 480 ? 'header' : 'header header--Transparent';
  }

  getTokenKey = () => {
    // console.log(this.token);
    if (this.token) {
      this.setState({
        isLogin: !this.isLogin,
        // console.log(!prev.isLogin)
      });
    }
  }

  tokenHandler = () => {
    localStorage.removeItem('weple-token');
    this.setState((prev) => (
      { isLogin: !prev.isLogin }
    ));
  }


  render() {
    const {
      onClickEvent, mode, logoOrange, logoWhite,
    } = this.props;
    console.log(this.state.isLogin);
    return (
      <header ref={this.myRef} className="header header--Transparent">
        <a className="header_logo" href="/">
          <img
            src={this.state.scroll >= 480 ? logoOrange : logoWhite}
            className="header_logo_logoIcon"
            alt="MANGOPLATE 로고 이미지"
          />
        </a>
        <div className="header_searchBox">
          <i className="header_searchIcon" alt="전체 검색창 아이콘" />
          <label htmlFor="ms" className="heaer_searchInputWrap">
            <input
              type="text"
              id="ms"
              className="header_searchInput"
              placeholder="지역, 식당 또는 음식"
            />
          </label>
          <button type="submit" className="header_searchInputButton" />
        </div>
        <ul className="header_menulist">
          <li className="header_menuitem underline-from-left">
            {/* <a className="header_menulink" href="/"> */}
            <Link to="/" className="text_color">
              <span>EAT딜</span>
            </Link>
            {/* </a> */}
          </li>
          <li className="header_menuitem underline-from-left">
            {/* <a className="header_menulink" href="/"> */}
            <Link to="/" className="text_color">
              <span>맛집 리스트</span>
            </Link>
            {/* </a> */}
          </li>
          <li className="header_menuitem underline-from-left">
            <Link to="/" className="text_color">
              <span>망고스토리</span>
            </Link>
          </li>
          {/* <div className="header_menuitem_wrap "> */}
          {this.state.isLogin ? (
            <li
              className="header_menuitem underline-from-left"
              onClick={this.tokenHandler}
            >
              <Link to="/" className="text_color">
                <span>로그아웃</span>
              </Link>
            </li>
          )
            : (
              <li className="header_menuitem underline-from-left">
                <Link to="/login" className="text_color">
                  <span>로그인</span>
                </Link>
              </li>
            )}
          <li className="header_menuitem underline-from-left">
            <Link to="/signup" className="text_color">
              <span>회원가입</span>
            </Link>
          </li>
          {/* </div> */}
        </ul>
        <ul className="header_menuicon">
          <li className="header_menuicon_item only_mobile">
            <button
              type="button"
              className="header_menuicon_button"
              onClick={onClickEvent}
            >
              <i className="button" />
            </button>
          </li>
        </ul>
        {mode ? <ShowMenu onClickEvent={onClickEvent} /> : ' '}
      </header>
    );
  }
}
// Header.propTypes = {
//   onClickEvent: PropTypes.isRequired,
//   mode: PropTypes.string.isRequired,
//   logoOrange: PropTypes.string.isRequired,
//   logoWhite: PropTypes.string.isRequired,
// };
export default Header;
