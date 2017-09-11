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
      label: '出発地',
    });
    const arivalPoint = new this.props.google.maps.Marker({
      position: { lat: 25.33, lng: 133.044 },
      map,
      title: 'Hello World!',
      label: '到着地',
    });
    const routes = [
      { title: '秋葉原駅', lat: -34.397, lng: 11.044, label: '経路A' },
      { title: '文京区役所', lat: 11, lng: 14, label: '経路B' },
      { title: '明治大学', lat: 13, lng: 12, label: '経路C' },
      { title: '浜離宮', lat: -44.397, lng: 11.044, label: '経路D' },
      { title: '国会議事堂', lat: -54.397, lng: 11.044, label: '経路E' },
    ];
    routes.map((route) => {
      return new this.props.google.maps.Marker({
        position: { lat: route.lat, lng: route.lng },
        map,
        title: route.title,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        label: route.label,
      });
    });
  }

  render() {
    return (
      <div ref="DemoQuestionMap" className="DemoQuestionMap">Map</div>
    );
  }
}

export default DemoQuestionMap;
