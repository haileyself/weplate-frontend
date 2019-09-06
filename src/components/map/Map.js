import React, { PureComponent } from 'react';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    console.log(this.ref.current);
    new window.kakao.maps.Map(this.ref.current, {
      center: new window.kakao.maps.LatLng(37.57413, 127.01757),
      level: 3,
    });
    // const marker = new window.kakao.maps.Marker({
    //   position: new window.kakao.maps.LatLng(37.57084, 126.99353),
    //   map,
    // });
  }

  render() {
    return (
      <>
        <div className="map_container">
          <div ref={this.ref} className="map_style" id="map" />
        </div>
      </>
    );
  }
}
export default Map;
