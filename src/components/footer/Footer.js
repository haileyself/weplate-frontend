import React from 'react';
import './footer.scss';

const Footer = (props) => {
  const { logo2 } = props;
  return (
    <footer className="footer">
      <div className="footer_inner">
        <div className="footer_logo">
          <a href="/" className="footer_logo_a">
            <img src={logo2} alt="망고플레이트 이미지" />
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
  );
};
export default Footer;
