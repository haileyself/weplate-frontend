import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import ShowMenu from './ShowMenu';
import './header.scss';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mode: false,
      value: '',
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  // onClickHandler = () => {
  //   console.log(this.state.value);
  // };

  onClickHandlerMenuIcon = () => (
    this.setState((prev) => (
      { mode: !prev.mode })))

  render() {
    return (
      <header className="header">
        <a className="header_logo" href="/">
          <i className="header_logo_logoIcon" alt="MANGOPLATE 로고 이미지" />
        </a>
        <i className="search_icon" alt="전체 검색창 아이콘" />
        <form className="form_wrap">
          <fieldset className="fieldset_wrap">
            <legend className="form_fieldset">전체 검색</legend>
            <label htmlFor="mainSearch" className="label_wrap">
              <input
                type="text"
                id="mainSearch"
                placeholder="지역, 식당 또는 음식"
                className="search_text"
                onChange={this.onChangeHandler}
              />
              <button
                type="button"
                className="search_btn"
                onClick={this.onClickHandler}
              >CLEAR
              </button>


            </label>
          </fieldset>
        </form>
        <ul className="header_menulist">
          <li className="header_menuitem underline-from-left">
            {/* <a className="header_menulink" href="/"> */}
            <Link to="/">
              <span>EAT딜</span>
            </Link>
            {/* </a> */}
          </li>
          <li className="header_menuitem underline-from-left">
            {/* <a className="header_menulink" href="/"> */}
            <Link to="/">
              <span>맛집 리스트</span>
            </Link>
            {/* </a> */}
          </li>
          <li className="header_menuitem underline-from-left">
            <Link to="/">
              <span>망고스토리</span>
            </Link>
          </li>
          <div className="header_menuitem_wrap ">
            <li className="header_menuitem underline-from-left">
              <Link to="./login">
                <span>로그인</span>
              </Link>
            </li>
            <li className="header_menuitem underline-from-left">
              <Link to="/signup">
                <span>회원가입</span>
              </Link>
            </li>
          </div>
        </ul>
        <ul className="header_menuicon">
          <li className="header_menuicon_item only_mobile">
            <button
              type="button"
              className="header_menuicon_button"
              onClick={this.onClickHandlerMenuIcon}
            >
              <i className="button" />
            </button>
          </li>
        </ul>
        {this.state.mode ? <ShowMenu onClick={this.onClickHandlerMenuIcon} /> : ' '}
      </header>
    );
  }
}

export default Header;
