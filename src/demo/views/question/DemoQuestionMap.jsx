import React from 'react';

class DemoQuestionMap extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.displayMap();
  }

  getGeocode(address) {
    // ジオコーディング用インスタンスを生成
    const geocoder = new this.props.google.maps.Geocoder();
    const geocoderStatusOK = this.props.google.maps.GeocoderStatus.OK
    // 与えた住所から位置情報を取得する関数
    geocoder.geocode({ address }, (results, status) => {
      if (status === geocoderStatusOK) {
        return results[0].geometry.location;
      }
      return console.log(`Geocode was not successful for the following reason: ${status}`);
    });
  }

  displayMap() {
    const _this = this;
    // 地図を表示する際のオプションを設定
    const mapOptions = {
      center: new this.props.google.maps.LatLng(-34.397, 150.644),
      zoom: 8,
      mapTypeId: this.props.google.maps.MapTypeId.ROADMAP
    };

    // Mapオブジェクトに地図表示要素情報とオプション情報を渡し、インスタンス生成
    const map = new this.props.google.maps.Map(this.refs.DemoQuestionMap, mapOptions);

    const departurePoint = new this.props.google.maps.Marker({
      position: { lat: -25.363, lng: 131.044 },
      map,
      title: 'Hello World!',
    });
    const arivalPoint = new this.props.google.maps.Marker({
      position: { lat: 25.33, lng: 133.044 },
      map,
      title: 'Hello World!',
    });
    const routes = [
      { title: '秋葉原駅', lat: -34.397, lng: 11.044 },
      { title: '文京区役所', lat: 11, lng: 14 },
      { title: '明治大学', lat: 13, lng: 12 },
      { title: '浜離宮', lat: -44.397, lng: 11.044 },
      { title: '国会議事堂', lat: -54.397, lng: 11.044 },
    ];
    routes.map((route) => {
      return new this.props.google.maps.Marker({
        position: { lat: route.lat, lng: route.lng },
        map,
        title: route.title,
      });
    });
  }

  render() {
    return (
      <div ref="DemoQuestionMap" className="DemoQuestionMap" style={{ width: '30vw', height: '100vh' }}>Map</div>
    );
  }
}

export default DemoQuestionMap;
