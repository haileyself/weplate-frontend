import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import Header from '../../components/header/Header';
import SearchList from './SearchList';
import FoodImtem from './FoodItem';
import FoodDatas from './FoodDatas';
import Footer from '../../components/footer/Footer';
import './main.scss';
import logoOrange from '../../imges/logo-orange.png';
import logoWhite from '../../imges/logo-white.png';
import logo2 from '../../imges/logo2.svg';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mode: false,
      textValue: '',
      restaurantList: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.4.74:8000/main_list')
      .then((response) => response.json())
      .then((item) => {
        console.log(item);
        this.setState({
          restaurantList: item.main_restaurant,
        // item.main_restaurant_name.map((ele) => (
        //   console.log(ele)
        });
      });
  }

  loadImg = () => (
    this.restaurantList.map((ele) => (
      <Link to={`/detail/${ele.restaurant__id}`}>
        <FoodImtem
          key={ele.restaurant__id}
          id={ele.restaurant__id}
          src={ele.image}
          url={ele.url}
          descript={ele.restaurant__name}
        />
      </Link>
    ))
  )


  onChangeHandler = (e) => {
    this.setState({
      textValue: e.target.value,
    });
  }

  onClickSearchButton = () => (
    this.loadImg
    // this.props.history.push('/detail')
  )

  // onClickMainImage = () => {
  //   // console.log(history);
  //   // console.log(typeof e.target.id);
  //   // fetch(`http://10.58.4.74:8000/main_list/${Number(e.target.id)}`);
  //   // history.push('/detail');
  // }

  onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      return this.loadImg;
      // this.props.history.push('/detail');
    }
  }

  // search = async () => {
  //   await fetch();
  //   this.setState((prev) => (
  //     { valueList: [...prev] }
  //   ));
  // }


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
    console.log(this.state.textValue);
    // console.log(this.state.restaurantList);
    const { mode, restaurantList } = this.state;
    return (
      <div className="main-page">
        {/* {메인 헤더부분} */}
        <Header
          logoOrange={logoOrange}
          logoWhite={logoWhite}
          mode={mode}
          onClickEvent={this.onClickHandlerMenuIcon}
        />
        {/* {메인 리스트부분 } */}
        <main className="main">
          <article className="main_article main_padding">
            <header className="main_header">
              <p className="main_header_title">솔릭한 리뷰 믿을 수 있는 평점!</p>
              <h1 className="main_header_title">WE 플레이트</h1>
              <fieldset className="main_search">
                <legend>전체 검색</legend>
                <label className="search_word" htmlFor="m-s">
                  <span className="icon">검색 :</span>
                  <input
                    type="text"
                    className="home_searchInput"
                    id="m-s"
                    placeholder="지역, 식당 또는 음식"
                    autoComplete="off"
                    name="m-s"
                    onChange={this.onChangeHandler}
                    onKeyPress={this.onKeyPressHandler}
                  />
                  <span className="clear_btn">CLEAR</span>
                </label>
                <input
                  className="btn_search"
                  type="submit"
                  name="search"
                  value="검색"
                  onClick={this.onClickSearchButton}
                />
              </fieldset>
              {/* {textValue.length ? textValue.map((ele) => (
                <SearchList des={ele.des} />
              )) : ''} */}
              <aside className="shortcut_app type_main">
                <a className="btn inbound only_desktop" href="/">
                  <img
                    src="https://mp-seoul-image-production-s3.mangoplate.com/web/resources/nf58dxcb-7ikpwam.png"
                    alt="최대 할인 바로 이동"
                  />
                </a>
                <button type="button" className="btn android">
                  <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                    {/* <Link to={`/main/${'play.google.com'}`}> */}
                    <img
                      src="https://mp-seoul-image-production-s3.mangoplate.com/web/resources/bzdlmp2toaxrdjqg.png"
                      alt="android market button"
                      width="180px"
                    />
                    {/* </Link> */}
                  </a>
                </button>
                <button type="button" className="btn ios">
                  <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://mp-seoul-image-production-s3.mangoplate.com/web/resources/f7eokfaszt4gpkh6.svg?v=1"
                      alt="app store button"
                    />
                  </a>
                </button>
              </aside>
            </header>
            <section className="main_article_section">
              <div className="tittle_wrap">
                <div className="tittle">
                    선릉역 맛집 리스트
                </div>
              </div>
              <div className="list_contain top_list">
                <ul className="items">
                  {/* {this.loadImg} */}
                  {restaurantList.map((ele) => (
                    <Link to={`/detail/${ele.restaurant__id}`}>
                      <FoodImtem
                        key={ele.restaurant__id}
                        id={ele.restaurant__id}
                        src={ele.image}
                        url={ele.url}
                        descript={ele.restaurant__name}
                      />
                    </Link>
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
