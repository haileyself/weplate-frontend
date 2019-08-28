import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './main.scss';
import logo from '../../imges/mango_Logo.jpg';
import logo2 from '../../imges/logo2.svg';
import searchIcon from '../../imges/search_icon.jpg';
import bunsik from '../../imges/bunsik.jpg';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="main-page">
        <Header logo={logo} searchIcon={searchIcon} />
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
                    <Link to="/">
                      <img src={bunsik} alt="선릉역 맛집 리스트 분식 이미지" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={bunsik} alt="선릉역 맛집 리스트 분식 이미지" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={bunsik} alt="선릉역 맛집 리스트 분식 이미지" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={bunsik} alt="선릉역 맛집 리스트 분식 이미지" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={bunsik} alt="선릉역 맛집 리스트 분식 이미지" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={bunsik} alt="선릉역 맛집 리스트 분식 이미지" />
                    </Link>
                  </li>
                </ul>
              </div>

            </section>
          </article>
        </main>
        <Footer logo2={logo2} />
      </div>
    );
  }
}

export default Main;
