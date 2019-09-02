import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import ShowMenu from './ShowMenu';
import './header.scss';

class Header extends PureComponent {
  constructor(props) {
    super(props);
  }

  token = localStorage.getItem('weple-token');

  render() {
    const {
      onClickHandlerMenuIcon, onClickEvent, onChangeEvent, mode,
    } = this.props;
    console.log(this.token);
    return (
      <header className="header">
        <a className="header_logo" href="/">
          <i className="header_logo_logoIcon" alt="MANGOPLATE 로고 이미지" />
        </a>
        <i className="search_icon" alt="전체 검색창 아이콘" />
        <form className="form_wrap">
          <fieldset className="fieldset_wrap">
            <legend className="form_fieldset">전체 검색</legend>
            <label htmlFor="mms" className="label_wrap">
              <input
                type="text"
                id="mms"
                placeholder="지역, 식당 또는 음식"
                className="search_text"
                onChange={onChangeEvent}
              />
              <button
                type="button"
                className="search_btn"
                onClick={onClickHandlerMenuIcon}
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
            {this.token ? (
              <li className="header_menuitem underline-from-left">
                <Link to="./login">
                  <span>로그아웃</span>
                </Link>
              </li>
            )
              : (
                <li className="header_menuitem underline-from-left">
                  <Link to="./login">
                    <span>로그인</span>
                  </Link>
                </li>
              )}
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
              onClick={onClickEvent}
            >              <i className="button" />
            </button>
          </li>
        </ul>
        {mode ? <ShowMenu onClick={this.onClickHandlerMenuIcon} onClickEvent={onClickEvent} /> : ' '}
      </header>
    );
  }
}

export default Header;
