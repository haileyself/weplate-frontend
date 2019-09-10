import React from 'react';


class NearResList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('name.....', this.props);
    console.log('이미지', this.props.imgSrc);
    return (
      <div className="near_Res_Item">
        <div className="near_Res_Item_PicAndContent">
          <div className="near_Res_Item_Picwrapper">
            <a className="near_Res_Item_PicLink">
              <img className="near_Res_Item_Pic" src={this.props.imgSrc} />
            </a>
          </div>
          <div className="near_Res_Item_Content">
            <div className="near_Res_Item_NameWrap">
              <a className="near_Res_Item_NameLink">
                {this.props.name}
              </a>
              <span className="near_Res_Item_Rate">3.8</span>
            </div>
            {/* 식당 제목 평점 끝  */}
            <div className="near_Res_Item_Info">
              <div className="near_Res_Item_FoodCate near_Res_Item_InfoList">
                <span className="near_Res_Item_Info_Label">음식종류:</span>
                <span className="near_Res_Item_Info_Value">{this.props.cate}</span>
              </div>
              <div className="near_Res_Item_Place near_Res_Item_InfoList">
                <span className="near_Res_Item_Info_Label">위치:</span>
                <span className="near_Res_Item_Info_Value">{this.props.adrs}</span>
                {/* //자바스크립트 로직을 리액트 안에 사용할 수 있는지 확인하기 */}
              </div>
              <div className="near_Res_Item_Price near_Res_Item_InfoList">
                <span className="near_Res_Item_Info_Label"> 가격대:</span>
                <span className="near_Res_Item_Info_Value">{this.props.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default NearResList;
