import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  onClickHandler = () => {
    console.log(this.state.value);
  };

  render() {
    const { logo, searchIcon } = this.props;
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
              <input
                type="text"
                id="mainSearch"
                placeholder="지역, 식당 또는 음식"
                className="search_text"
                onChange={this.onChangeHandler}
              />
              <input
                type="submit"
                value="검색"
                className="search_btn"
                onClick={this.onClickHandler}
              />
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
            {/* <a className="header_menulink" href="/"> */}
            <Link to="/">
              <span>망고스토리</span>
            </Link>
            {/* </a> */}
          </li>
          <li className="header_menuitem underline-from-left">
            {/* <a className="header_menulink" href="./login"> */}
            <Link to="./login">
              <span>로그인</span>
            </Link>
            {/* </a> */}
          </li>
          <li className="header_menuitem underline-from-left">
            {/* <a className="header_menulink" href="./signup"> */}
            <Link to="/signup">
              <span>회원가입</span>
            </Link>
            {/* </a> */}
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
