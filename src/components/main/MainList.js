import React, { PureComponent } from 'react';
import './mainlist.scss';
import logo from '../../imges/mango_Logo.jpg';
import logo2 from '../../imges/logo2.svg';
import searchIcon from '../../imges/search_icon.jpg';
import bunsik from '../../imges/bunsik2.jpeg';


class MainList extends PureComponent {
  render() {
    return (
      <div className="wrap">
        <div className="main-page">
          {/* {메인 헤더부분 } */}
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
          {/* {메인 헤더부분 끝 } */}
          {/* {메인 리스트부분 } */}
          <main className="main">
            <article className="main_article">
              <section className="main_article_section">
                <div className="tittle">
                    선릉역 맛집 리스트
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <div className="item_text">
                        <span>선릉역 분식집 맛있어</span>
                      </div>
                      <img src={bunsik} alt="선릉역 맛집 리스트 분식 이미지" />
                    </li>
                    <li>
                      <img src={bunsik} alt="선릉역 맛집 리스트 분식 이미지" />
                    </li>
                    <li>
                      <img src={bunsik} alt="선릉역 맛집 리스트 분식 이미지" />
                    </li>
                    <li>
                      <img src={bunsik} alt="선릉역 맛집 리스트 분식 이미지" />
                    </li>
                    <li>
                      <img src={bunsik} alt="선릉역 맛집 리스트 분식 이미지" />
                    </li>
                    <li>
                      <img src={bunsik} alt="선릉역 맛집 리스트 분식 이미지" />
                    </li>
                  </ul>
                </div>

              </section>
            </article>
          </main>
          <footer className="footer">
            <div className="footer_inner">
              <div className="footer_logo">
                <a href="/" className="footer_logo_a">
                  <img src={logo2} alt="이밎ㅣ" />
                </a>
                <p className="subtitle">Eat, Share, Be Happy.</p>
              </div>
              <nav className="nav">
                <ul className="nav_list">
                  <li><a href="/" rel="noopener noreferrer" target="_blank">회사소개</a></li>
                  <li><a href="/" rel="noopener noreferrer" target="_blank">망고플레이트 채용</a></li>
                  <li><a href="/" rel="noopener noreferrer" target="_blank">투자 정보</a></li>
                  <li><a href="/" rel="noopener noreferrer" target="_blank">브랜드 가이드라인</a></li>
                  <li><a href="/" rel="noopener noreferrer" target="_blank">망고플레이트 비즈니스</a></li>
                  <li><a href="/" rel="noopener noreferrer" target="_blank">광고 문의</a></li>
                </ul>
                <ul className="nav_list">
                  <li><a href="/" rel="noopener noreferrer" target="_blank">공지사항</a></li>
                  <li><a href="/" rel="noopener noreferrer" target="_blank">이용약관</a></li>
                  <li><a href="/" rel="noopener noreferrer" target="_blank">비회원 이용자 이용정책</a></li>
                  <li><a href="/" rel="noopener noreferrer" target="_blank" className="bold">개인정보처리방침</a></li>
                  <li><a href="/" rel="noopener noreferrer" target="_blank">위치기반서비스 이용약관</a></li>
                  <li><a href="/" rel="noopener noreferrer" target="_blank">커뮤니티 가이드라인</a></li>
                  <li><a href="/" rel="noopener noreferrer" target="_blank">홀릭 소개</a></li>
                  <li><a href="/" rel="noopener noreferrer" target="_blank">문의하기</a></li>
                </ul>
              </nav>
              <div />
              <div />
              <div className="team_wrap">
                <div className="team_info">
                  <span className="keyword">WeCode 3기: </span>
                  <span className="keyword">고영남</span>{'|'}<span className="keyword">전창석</span>{'|'}<span className="keyword">정혜민</span>{'|'}<span className="keyword">양성호</span>{'|'}<span className="keyword">임갑기</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default MainList;
