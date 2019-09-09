import React, { PureComponent } from 'react';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount = async () => {
    const mapContainer = this.ref.current;

    const latlng = await fetch('http://54.180.158.61:8000/map/1');
    const latlng2 = await latlng.json();
    // console.log(latlng2.restaurant_info.latitude, latlng2.restaurant_info.longitude);

    const mapOption = {
      center: new window.kakao.maps.LatLng(latlng2.restaurant_info.latitude, latlng2.restaurant_info.longitude),
      level: 3,
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    const markerPosition = new window.kakao.maps.LatLng(latlng2.restaurant_info.latitude, latlng2.restaurant_info.longitude);

    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);

    // console.log(this.ref.current);
    // new window.kakao.maps.Map(this.ref.current, {
    //   center: new window.kakao.maps.LatLng(37.57413, 127.01757),
    //   level: 3,
    // });
    // const marker = new window.kakao.maps.Marker({
    //   position: new window.kakao.maps.LatLng(37.57084, 126.99353),
    //   map,
    // });
  }

  render() {
    return (
      <>
        <div className="map_container" style={{ width: '400px' }}>
          <div ref={this.ref} style={{ width: '100%', height: '350px' }} />
        </div>
      </>
    );
  }
}
export default Map;
