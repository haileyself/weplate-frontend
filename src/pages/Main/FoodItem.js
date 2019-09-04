import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';


class FoodImtem extends PureComponent {
  constructor(props) {
    super(props);
  }

  onClickMainImage = () => {
    this.props.history.push('/detail');
  }

  render() {
    const {
      id, src, descript,
    } = this.props;
    return (
      <li>
        <div className="item_text" onClick={this.onClickMainImage}>
          <div className="text">{descript}</div>
        </div>
        <div className="img_wrap" onClick={this.onClickMainImage}>
          <img className="item_img" id={id} src={src} alt={`${descript} 이미지`} />
        </div>
      </li>
    );
  }
}

export default withRouter(FoodImtem);
