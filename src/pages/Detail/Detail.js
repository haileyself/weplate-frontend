import React from 'react';
import './Detail.scss';
import { withRouter } from 'react-router-dom';
import SubHeader from '../../components/header/SubHeader';
import ReviewContent from './review_Content';
import NearResList from './near_Res_List';

import Food1 from './food1.jpg';
import Food2 from './food2.jpg';
import Food3 from './food3.jpg';
import Food4 from './food4.jpg';
import Food5 from './food5.jpg';
import Profile from './profile.png';
import NearRes1 from './nearRes1.jpg';
import NearRes2 from './nearRes1.jpg';
import NearRes3 from './nearRes1.jpg';
import NearRes4 from './nearRes1.jpg';
import Map from '../../components/map/Map';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      comments: [],
      nearList: [],
      resInfo: {
        restaurant_info: {
          restaurantimage__image: '',
          menu: [],
        },
      },
    };
  } // 코멘트라는 값에 대한 state를 설정


  componentDidMount() {
    fetch('http://54.180.158.61:8000/comment', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log('reponse다', response);
        this.setState({
          comments: response.reverse(),
        });
      });

    fetch(`http://54.180.158.61:8000/restaurant/${this.props.match.params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log('상세정보야 와라', response);
        this.setState({
          resInfo: response,
        });
        fetch(`http://54.180.158.61:8000/near/${response.restaurant_info.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((response) => {
            // console.log('id값확인', response);
            this.setState({
              nearList: response,
            });
          });
      });

    // 주변식당정보가 안옴...
    // console.log('다음', this.state.resInfo);
    // fetch(`http://54.180.158.61:8000/near/${this.state.resInfo.restaurant_info.id}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log('id값확인', response);
    //     // console.log(this.state.resInfo.restaurant_info.id);
    //     this.setState({
    //       nearList: response,
    //     });
    //   });
  }

   loginHandler = () => {
     if (!localStorage.getItem('weple-token')) {
       this.props.history.push('/login');
     }
   }

  clickHandler = () => {
    // console.log('hello');
    // this.setState({
    //   tweetList: [
    //     {
    //     //  console.log('코멘트가나오려나',this.state.comment);
    //       id: 'hailey',
    //       message: this.state.text,
    //     },
    //     ...this.state.tweetList,
    //   ],
    // });
    fetch('http://54.180.158.61:8000/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2Vjb2RlQGdtYWlsLmNvbSIsImV4cCI6MTU2ODM3Njc2NSwiaWF0IjoxNTY3OTQ0NzY1fQ.eHqN2I3EJIh56zxtwW0WeYbIUUmCAqp-Jz-IQOX-FvY',
      },
      body: JSON.stringify({
        content: this.state.text,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log('reponse다', response);
        if (response.message === 'SUCCESS') {
          fetch('http://54.180.158.61:8000/comment', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((response) => {
              // console.log('reponse다', response);
              this.setState({
                comments: response.reverse(),
                text: '',
              });
            });
        }
      });
  }

    setComment = (e) => {
      this.setState({ text: e.target.value });
    }

    render() {
      // console.log('스테이트값 확인', this.state.resInfo);
      // console.log('키값확인', this.state.resInfo.restaurant_info);
      // console.log('프롭스값', this.state);
      // console.log('!!!', this.state.nearList);
      return (
        <div className="detail_page">
          <div className="headerWrapper">
            <SubHeader />
          </div>
          <div className="detail_Photolist">
            {this.state.resInfo.restaurant_info.menu.map((e) =>
              // console.log('야야양', e);
              (
                <div className="photoList">
                  <div className="photoItem photoItem1" style={{ backgroundImage: `url(${e.image})` }} />
                </div>
              ))}
            {/* <div className="photoList">
              <div className="photoItem photoItem1">
              </div>
              <div className="photoItem photoItem2">
              </div>
              <div className="photoItem photoItem3">
              </div>
              <div className="photoItem photoItem4">
              </div>
              <div className="photoItem photoItem5">
              </div>
            </div> */}
          </div>
          <div className="detail_wrapper">
            <div className="detail_contentWrapper">
              <div className="column_content">
                <section className="restaurant_detail">
                  <header className="restaurant_header">
                    <div className="restaurant_title_wrap">
                      <div className="res_titlewrap">
                        <span className="res_title">
                          <h1 className="res_name">{this.state.resInfo.restaurant_info.name}</h1>
                          <strong className="res_rate">
                            <span>{this.state.resInfo.restaurant_info.ratings}</span>
                          </strong>
                          <p className="branch" />
                        </span>
                        {/* <div className="res_button_wrap">
                          <button className="review_write_btn">
                            {/* <div className="review_write_icon" /> */}
                        {/* <i className="far fa-edit icon_review" />
                            <span className="review_write_txt">리뷰쓰기</span>
                          </button>
                          <button className="wannago_btn">
                            <i className="far fa-star icon_wannago" />
                            <p className="wannago_txt">가고싶다</p>
                          </button>
                        </div>  */}
                      </div>
                    </div>
                    <div className="restaurant_subtitle">
                      <span className="count hit">
                        <i className="far fa-eye icon_eye" />본사람
                      </span>
                      <span className="count review">
                        <i className="fas fa-pen icon_pen" />리뷰수
                      </span>
                      <span className="count favorite">
                        <i className="fas fa-star icon_star" />즐찾수
                      </span>
                    </div>
                  </header>
                  <div className="res_Info_table">
                    <table className="restaurant_Info">
                      <tbody>
                        {/* {
                          this.state.resInfo.map(el) => ( */}
                        <tr>
                          <th>주소</th>
                          <td>{this.state.resInfo.restaurant_info.address}</td>
                        </tr>
                        <tr>
                          <th>전화번호</th>
                          <td>{this.state.resInfo.restaurant_info.phone}</td>
                        </tr>
                        <tr>
                          <th>음식 종류</th>
                          <td>
                            <span>데이터준비전</span>
                          </td>
                        </tr>
                        <tr>
                          <th>가격대</th>
                          <td>{this.state.resInfo.restaurant_info.price_range}</td>
                        </tr>
                        <tr>
                          <th className="res_openingHour">영업시간</th>
                          <td>
                            {this.state.resInfo.restaurant_info.opening} - {this.state.resInfo.restaurant_info.closing}

                          </td>
                        </tr>
                        <tr>
                          <th>주차</th>
                          <td>
                            {this.state.resInfo.restaurant_info.parking}
                          </td>
                        </tr>
                        <tr>
                          <th>메뉴</th>
                          <td className="menu_td">
                            <ul className="menuList">
                              {this.state.resInfo.restaurant_info.menu.map((e) =>
                                // console.log('e야 어딨니', e);
                                (
                                  <div>
                                    <li className="menuItem">
                                      <div className="Res_Menulist">{e.menu_name}</div>
                                      <div className="Res_MenuPrice"> {Math.floor(e.price)}원</div>
                                    </li>
                                    {/* <li className="menuItem">
                                      <span className="Res_Menulist">냉면(육수/비빔)</span>
                                      <span className="Res_MenuPrice">10,000원</span>
                                    </li>
                                    <li className="menuItem">
                                      <span className="Res_Menulist">왕만두</span>
                                      <span className="Res_MenuPrice">8,000원</span>
                                    </li>
                                    <li className="menuItem">
                                      <span className="Res_Menulist">갈비찜</span>
                                      <span className="Res_MenuPrice">48,000원</span>
                                    </li>
                                    <li className="menuItem">
                                      <span className="Res_Menulist">수육무침</span>
                                      <span className="Res_MenuPrice">35,000원</span>
                                    </li> */}
                                  </div>
                                ))}
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="update_date">업데이트: 2018. 5. 31</p>
                  </div>
                </section>
                <section className="restaurant_Reviews">
                  <header className="restaurantRvHeader">
                    <h2 className="RvHeader_title">
                      <span className="title_Review">리뷰</span>
                      {/* <span className="title_Review_count">(100)</span> */}
                    </h2>
                    {/* <ul className="restaurant_RvList_filterList">
                      <li className="restaurant_RvList_filterItem">
                        <button>
                          <span>전체</span>
                          <span>(100)</span>
                        </button>
                      </li>
                      <li className="restaurant_RvList_filterItem">
                        <button>
                          <span>맛있다</span>
                          <span>(66)</span>
                        </button>
                      </li>
                      <li className="restaurant_RvList_filterItem">
                        <button>
                          <span>괜찮다</span>
                          <span>(27)</span>
                        </button>
                      </li>
                      <li className="restaurant_RvList_filterItem">
                        <button>
                          <span>별로</span>
                          <span>(7)</span>
                        </button>
                      </li>
                    </ul> */}
                  </header>
                  { /* 리뷰만들기 */}
                  <div className="user_Review_Wrap">
                    <div className="user_Review">
                      <textarea
                        className="user_Text"
                        placeholder="소중한 리뷰를 남겨주세요!"
                        maxLength="200"
                        onChange={this.setComment}
                        value={this.state.text}
                        onClick={this.loginHandler}
                      />
                      <div className="user_Review_BtnBox">
                        <input className="user_Review_Btn" type="button" value="리뷰 등록" onClick={this.clickHandler} />
                      </div>
                    </div>
                  </div>
                  <ul className="restaurantRvList">
                    {

                    this.state.comments.map((el) =>
                    // <div>
                    //    <h3>{el.name}</h3>
                    //    <p>{el.message}</p>
                    //  </div>;
                    // console.log('detail 컴포넌트...', el);
                      <ReviewContent comment={el} />)
                  }
                    {/* <ReviewContent />
                    <ReviewContent />
                    <ReviewContent /> */}
                  </ul>
                </section>
              </div>
              <div className="column_aside">
                <div className="aside_inner">
                  <section className="near_Res">
                    <span className="near_Res_Title">주변 인기 식당</span>
                    {/* 리스트 시작  */}
                    <div className="near_Res_List">
                      {this.state.nearList.map((el) => <NearResList name={el.name} cate={el.food_type__name} adrs={el.address} price={el.price_range} imgSrc={el.restaurantimage__image} />)}


                      {/* 주변식당리스트 each 시작 */}
                      {/* <div className="near_Res_Item">
                        <div className="near_Res_Item_PicAndContent">
                          <div className="near_Res_Item_Picwrapper">
                            <a className="near_Res_Item_PicLink">
                              <img className="near_Res_Item_Pic" src={NearRes1} />
                            </a>
                          </div>
                          <div className="near_Res_Item_Content">
                            <div className="near_Res_Item_NameWrap">
                              <a className="near_Res_Item_NameLink">
                                    하동관
                              </a>
                              <span className="near_Res_Item_Rate">3.8</span>
                            </div> */}
                      {/* 식당 제목 평점 끝  */}
                      {/* <div className="near_Res_Item_Info">
                              <div className="near_Res_Item_FoodCate near_Res_Item_InfoList">
                                <span className="near_Res_Item_Info_Label">음식종류:</span>
                                <span className="near_Res_Item_Info_Value">탕/찌개/전골</span>
                              </div>
                              <div className="near_Res_Item_Place near_Res_Item_InfoList">
                                <span className="near_Res_Item_Info_Label">위치:</span>
                                <span className="near_Res_Item_Info_Value">역삼/선릉</span>
                              </div>
                              <div className="near_Res_Item_Price near_Res_Item_InfoList">
                                <span className="near_Res_Item_Info_Label"> 가격대:</span>
                                <span className="near_Res_Item_Info_Value">만원-2만원</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* 리스트 1개끝 */}
                      {/* 주변식당리스트 each 시작 */}
                    </div>
                  </section>
                  <section>
                    <Map info={this.props.match.params.id} />
                  </section>
                  {/* <section className="tagWithRestaurant">
                    <span className="tag_Title">이 식당 관련 태그</span>
                    <p className="tag_List">
                      <a>태그</a>
                      <a>태그</a>
                      <a>태그</a>
                      <a>태그</a>
                      <a>태그</a>
                    </p>
                  </section> */}
                </div>
              </div>
            </div>
            {/* detailwrapper 위에서 끝 */}
          </div>
        </div>
      );
    }
}
export default withRouter(Detail);
