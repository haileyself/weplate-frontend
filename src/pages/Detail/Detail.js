import React from 'react';
import './Detail.scss';
import Header from '../../components/header/Header';
import ReviewContent from './review_Content';

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


class Detail extends React.Component {
  componentDidMount() {
    fetch('http://10.58.4.74:8003/comment', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <div className="detail_page">
        <div className="detail_wrapper">
          <header className="detail_header">
            <Header />
          </header>
          <aside className="detail_Photolist">
            <div className="photoList">
              <img className="photoItem" src={Food1} alt="음식사진1" />
              <img className="photoItem" src={Food2} alt="음식사진2" />
              <img className="photoItem" src={Food3} alt="음식사진3" />
              <img className="photoItem" src={Food4} alt="음식사진4" />
              <img className="photoItem" src={Food5} alt="음식사진5" />
            </div>
          </aside>
          <div className="detail_contentWrapper">
            <div className="column_content">
              <section className="restaurant_detail">
                <header className="restaurant_header">
                  <div className="restaurant_title_wrap">
                    <div className="res_titlewrap">
                      <span className="res_title">
                        <h1 className="res_name">반룡산</h1>
                        <strong className="res_rate">
                          <span>4.3</span>
                        </strong>
                        <p className="branch" />
                      </span>
                      <div className="res_button_wrap">
                        <button className="review_write_btn">
                          {/* <div className="review_write_icon" /> */}
                          <i className="far fa-edit icon_review" />
                          <span className="review_write_txt">리뷰쓰기</span>
                        </button>
                        <button className="wannago_btn">
                          <i className="far fa-star icon_wannago" />
                          <p className="wannago_txt">가고싶다</p>
                        </button>
                      </div>
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
                <div className="res_into_table">
                  <table className="restaurant_Info">
                    <tbody>
                      <tr>
                        <th>주소</th>
                        <td>서울시 강남구 대치동 894-4</td>
                      </tr>
                      <tr>
                        <th>전화번호</th>
                        <td>02-3446-8966</td>
                      </tr>
                      <tr>
                        <th>음식 종류</th>
                        <td>
                          <span>국수 / 면요리</span>
                        </td>
                      </tr>
                      <tr>
                        <th>가격대</th>
                        <td>만원-2만원</td>
                      </tr>
                      <tr>
                        <th className="res_openingHour">영업시간</th>
                        <td>
                          "월-금: 11:00 - 22:00"
                          <br />
                          "토-일: 11:00 - 21:30"
                        </td>
                      </tr>
                      <tr>
                        <th>웹 사이트</th>
                        <td>
                          <a
                            href="http://www.banryongsan.com/"
                            className="res_homepage"
                          >식당 홈페이지로 가기
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>메뉴</th>
                        <td className="menu_td">
                          <ul className="menuList">
                            <li className="menuItem">
                              <span className="Res_Menulist">가릿국밥</span>
                              <span className="Res_MenuPrice">10,000원</span>
                            </li>
                            <li className="menuItem">
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
                            </li>
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
                    <span className="title_Review_count">(100)</span>
                  </h2>
                  <ul className="restaurant_RvList_filterList">
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
                  </ul>
                </header>
                { /* 리뷰만들기 */}
                <div className="user_Review_Wrap">
                  <div className="user_Review">
                    <textarea
                      className="user_Text"
                      placeholder="소중한 리뷰를 남겨주세요!"
                      maxLength="200"
                    />
                    <div className="user_Review_BtnBox">
                      <input className="user_Review_Btn" type="button" value="리뷰 등록" />
                    </div>
                  </div>
                </div>
                <ul className="restaurantRvList">
                  {/* 반복되는 부분 */}
                  <ReviewContent />
                  <ReviewContent />
                  <ReviewContent />
                </ul>
              </section>
            </div>
            <div className="column_aside">
              <div className="aside_inner">
                <section className="near_Res">
                  <span className="near_Res_Title">주변 인기 식당</span>
                  {/* 리스트 시작  */}
                  <div className="near_Res_List">
                    {/* 주변식당리스트 each 시작 */}
                    <div className="near_Res_Item">
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
                          </div>
                          {/* 식당 제목 평점 끝  */}
                          <div className="near_Res_Item_Info">
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
                    </div>
                    {/* 리스트 1개끝 */}
                    {/* 주변식당리스트 each 시작 */}
                    <div className="near_Res_Item">
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
                          </div>
                          {/* 식당 제목 평점 끝  */}
                          <div className="near_Res_Item_Info">
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
                    </div>
                    {/* 리스트 1개끝 */}
                    {/* 주변식당리스트 each 시작 */}
                    <div className="near_Res_Item">
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
                          </div>
                          {/* 식당 제목 평점 끝  */}
                          <div className="near_Res_Item_Info">
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
                    </div>
                    {/* 리스트 1개끝 */}
                    {/* 주변식당리스트 each 시작 */}
                    <div className="near_Res_Item">
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
                          </div>
                          {/* 식당 제목 평점 끝  */}
                          <div className="near_Res_Item_Info">
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
                    </div>
                    {/* 리스트 1개끝 */}
                    {/* 주변식당리스트 each 시작 */}
                    <div className="near_Res_Item">
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
                          </div>
                          {/* 식당 제목 평점 끝  */}
                          <div className="near_Res_Item_Info">
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
                    </div>
                    {/* 리스트 1개끝 */}
                  </div>
                </section>
                <section className="tagWithRestaurant">
                  <span className="tag_Title">이 식당 관련 태그</span>
                  <p className="tag_List">
                    <a>태그</a>
                    <a>태그</a>
                    <a>태그</a>
                    <a>태그</a>
                    <a>태그</a>
                  </p>
                </section>
              </div>
            </div>
          </div>
          {/* detailwrapper 위에서 끝 */}
        </div>
      </div>
    );
  }
}

export default Detail;
