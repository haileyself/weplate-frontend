import React, { PureComponent } from 'react';
import './main.scss';
import bunsik from '../../imges/bunsik.jpg';

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-page">
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
      </div>
    );
  }
}

export default Main;
