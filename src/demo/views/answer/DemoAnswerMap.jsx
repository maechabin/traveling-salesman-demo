import React from 'react';
import PropTypes from 'prop-types';

class DemoAnswerMap extends React.PureComponent {
  constructor(props) {
    super(props);
    // 地図を表示する際のオプション
    this.mapOptions = {
      center: new this.props.google.maps.LatLng(this.props.departure.lat, this.props.departure.lng),
      zoom: 12,
      mapTypeId: this.props.google.maps.MapTypeId.ROADMAP,
    };
    this.map = '';
    // Google Maps API本体
    this.gm = this.props.google.maps;   
  }

  componentDidMount() {
    this.init();
  }

  // 初期化
  init() {
    this.map = new this.gm.Map(this.refs.DemoAnswerMap, this.mapOptions);
    this.displayMarker();
  }

  // propsから出発地、到着地、経路を取得して、地図にマーカーを表示するメソッド
  displayMarker() {
    let marker;
    const bounds = new this.gm.LatLngBounds();

    // 出発地のマーカーを地図に表示
    marker = new this.gm.Marker({
      position: { lat: this.props.departure.lat, lng: this.props.departure.lng },
      map: this.map,
      title: this.props.departure.title,
      label: this.props.departure.label,
    });
    bounds.extend(marker.position);

    // 到着地のマーカーを地図に表示
    marker = new this.gm.Marker({
      position: { lat: this.props.arival.lat, lng: this.props.arival.lng },
      map: this.map,
      title: this.props.arival.title,
      label: this.props.arival.label,
    });
    bounds.extend(marker.position);

    // 経路のマーカーを地図に表示
    this.props.routes.map((route) => {
      const image = 'https://mt.google.com/vt/icon?color=ff004C13&name=icons/spotlight/spotlight-waypoint-blue.png';
      marker = new this.gm.Marker({
        position: { lat: route.lat, lng: route.lng },
        map: this.map,
        title: route.title,
        icon: image,
        label: route.label,
      });
      bounds.extend(marker.position);
      return marker;
    });
    this.map.fitBounds(bounds);
  }

  render() {
    return (
      <div ref="DemoAnswerMap" className="DemoAnswerMap">DemoAnswerMap</div>
    );
  }
}

DemoAnswerMap.propTypes = {
  google: PropTypes.shape({
    maps: PropTypes.object,
  }).isRequired,
  departure: PropTypes.shape({
    title: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  arival: PropTypes.shape({
    title: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  routes: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default DemoAnswerMap;
