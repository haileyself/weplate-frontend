import React, { PureComponent } from 'react';
import './header.scss';

const Header = (props) => {
  const { logo, searchIcon } = props;
  return (
    <header className="header">
      <a className="header_logo" href="/">
        <img className="header_logo_logoIcon" src={logo} alt="MANGOPLATE 로고 이미지" />
      </a>
      <form className="form_wrap">
        <fieldset className="fieldset_wrap">
          <legend className="form_fieldset">전체 검색</legend>
          <label htmlFor="mainSearch" className="label_wrap">
            <img className="search_icon" src={searchIcon} alt="전체 검색창 아이콘" />
            <input type="text" id="mainSearch" placeholder="지역, 식당 또는 음식" className="search_text" />
            <input type="submit" value="검색" className="search_btn" />
          </label>
        </fieldset>
      </form>
      <ul className="header_menulist">
        <li className="header_menuitem">
          <a className="header_menulink" href="/">
            <span>EAT딜</span>
          </a>
        </li>
        <li className="header_menuitem">
          <a className="header_menulink" href="/">
            <span>맛집 리스트</span>
          </a>
        </li>
        <li className="header_menuitem">
          <a className="header_menulink" href="/">
            <span>망고스토리</span>
          </a>
        </li>
        <li className="header_menuitem">
          <a className="header_menulink" href="/">
            <span>로그인</span>
          </a>
        </li>
        <li className="header_menuitem">
          <a className="header_menulink" href="/">
            <span>회원가입</span>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
