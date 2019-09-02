import React, { PureComponent } from 'react';
import Header from '../../components/header/Header';
import FoodImtem from './FoodItem';
import FoodDatas from './FoodDatas';
import Footer from '../../components/footer/Footer';
import './main.scss';
import logo from '../../imges/mango_Logo.jpg';
import logo2 from '../../imges/logo2.svg';

class Main extends PureComponent {
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

  onClickHandlerMenuIcon = () => (
    this.setState((prev) => (
      { mode: !prev.mode })))

  // filtering = () => {
  //   FoodDatas.map((ele) => {
  //     if (ele.des.includes(this.state.value)) {
  //       <FoodImtem
  //         key={ele.id}
  //         src={ele.img}
  //         url={ele.url}
  //         descript={ele.des}
  //       />;
  //     }
  //   });
  // };

  render() {
    console.log('온체인지 될때마다 출력!');
    return (
      <div className="main-page">
        {/* {메인 헤더부분} */}
        <Header
          logo={logo}
          mode={this.state.mode}
          onClickEvent={this.onClickHandlerMenuIcon}
          onChangeEvent={this.onChangeHandler}
        />
        {/* {메인 리스트부분 } */}
        <main className="main">
          <article className="main_article">
            <section className="main_article_section">
              <div className="tittle_wrap">
                <div className="tittle">
                    선릉역 맛집 리스트
                </div>
              </div>
              <div className="list_contain top_list">
                <ul className="item ">
                  {FoodDatas.map((ele) => (
                    ele.des.includes(this.state.value)
                      ? (

                        <FoodImtem
                          key={ele.id}
                          src={ele.img}
                          url={ele.url}
                          descript={ele.des}
                        />
                      ) : ''
                  ))}
                  {/* {filtering} */}
                </ul>

              </div>
            </section>
          </article>
        </main>
        {/* {메인 푸터부분} */}
        <Footer logo2={logo2} />
      </div>
    );
  }
}

export default Main;
