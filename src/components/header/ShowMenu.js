import React from 'react';
import './showmenu.scss';

const ShowMenu = (props) => {
  const { onClickEvent } = props;
  return (
    <div className="ShowMenu ShowMenu_opnen">
      <header className="ShowMenu_header">
        <a href="/" className="ShowMenu_logo">
          <i className="ShowMenu_logo_img sprite" />
        </a>
        <button type="button" className="ShowMenu_closeButton" onClick={onClickEvent}>
          <i className="ShowMenu_closeButton_Icon sprite" />
        </button>
      </header>
      <nav className="ShowMenu_nav">
        <ul className="ShowMenu_navlist">
          <li className="ShowMenu_navitem">
            <a href="/" className="ShowMenu_navlink ShowMenu_homelink">
              <span className="ShowMenu_navtext">홈</span>
            </a>
          </li>
          <li className="ShowMenu_navitem">
            <a href="/" className="ShowMenu_navlink ShowMenu_homelink">
              <span className="ShowMenu_navtext">로그인</span>
            </a>
          </li>
          <li className="ShowMenu_navitem">
            <a href="/" className="ShowMenu_navlink ShowMenu_homelink">
              <span className="ShowMenu_navtext">회원가입</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ShowMenu;
