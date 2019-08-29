import React, { PureComponent } from 'react';
// import { Link } from 'react-router-dom';


class FoodImtem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { src, descript, url } = this.props;
    return (
      <li>
        <div className="item_text">
          <span>{descript}</span>
        </div>
        <a href={url}>
          <img src={src} alt={`${descript} 이미지`} />
        </a>
      </li>
    );
  }
}
export default FoodImtem;
