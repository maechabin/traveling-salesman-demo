import React from 'react';
import PropTypes from 'prop-types';

class DemoQuestionMap extends React.Component {
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
    this.map = new this.gm.Map(this.refs.DemoQuestionMap, this.mapOptions);
    this.displayMarker();
  }

  componentDidUpdate() {
    // this.map = new this.gm.Map(this.refs.DemoQuestionMap, this.mapOptions);
    this.renderRoute();
    this.displayMarker();
  }

  // propsから出発地、到着地、経路を取得して、地図にマーカーを表示するメソッド
  displayMarker() {
    let marker;
    const bounds = new this.gm.LatLngBounds();

    marker = new this.gm.Marker({
      position: { lat: this.props.departure.lat, lng: this.props.departure.lng },
      map: this.map,
      title: this.props.departure.title,
      label: this.props.departure.label,
    });
    bounds.extend(marker.position);

    marker = new this.gm.Marker({
      position: { lat: this.props.arival.lat, lng: this.props.arival.lng },
      map: this.map,
      title: this.props.arival.title,
      label: this.props.arival.label,
    });
    bounds.extend(marker.position);

    this.props.routes.map((route) => {
      marker = new this.gm.Marker({
        position: { lat: route.lat, lng: route.lng },
        map: this.map,
        title: route.title,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        label: route.label,
      });
      bounds.extend(marker.position);
      marker.addListener('click', () => {
        if (route.sortId === 0) {
          return this.props.handleMarkerClick(route.id);
        }
        return false;
      });
      return marker;
    });
    this.map.fitBounds(bounds);
  }

  // propsから出発地、到着地、経路、オプションを取得して、マーカーを結ぶ線（polyline）を地図に表示するメソッド
  renderRoute() {
    const directionsService = new this.gm.DirectionsService();
    const directionsRenderer = new this.gm.DirectionsRenderer();
    const filteredRoutes = this.props.routes.filter(route => route.sortId !== 0);
    const wayPoints = filteredRoutes.map(route => ({ location: route.title }));
    const destination = filteredRoutes.length === this.props.routes.length ? this.props.arival.title : filteredRoutes[filteredRoutes.length - 1];

    // polylineをレンダリングする際のオプション
    directionsRenderer.setOptions({
      suppressMarkers: true, // マーカーを非表示にする場合はtrue
      preserveViewport: true, // zoomさせないようにする場合はtrue
      polylineOptions: {
        strokeOpacity: 1.0, // polylineの透明度0.0~1.0
        strokeWeight: 6, // polylineの幅（ピクセル）
        strokeColor: '#6991fd', // polylineの色
      },
    });
    // directions apiへのリクエスト
    directionsService.route({
      origin: this.props.departure.title, // 出発地
      waypoints: wayPoints, // 経路（配列）
      destination, // 到着地
      travelMode: this.props.transport === 'car' ? this.gm.TravelMode.DRIVING : this.gm.TravelMode.WALKING, // 車(DRIVING) or 徒歩(WALKING)
      avoidHighways: this.props.expressway !== 'no', // 高速は利用しない場合はfalse
      optimizeWaypoints: false, // 最適化を有効にする場合はtrue
    }, (response, status) => {
      console.log(response);
      console.log(status);
      directionsRenderer.setDirections(response);
    });
    // polylineを地図に表示
    directionsRenderer.setMap(this.map);
  }

  render() {
    return (
      <div ref="DemoQuestionMap" className="DemoQuestionMap">Map</div>
    );
  }
}

DemoQuestionMap.propTypes = {
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
  handleMarkerClick: PropTypes.func.isRequired,
};

export default DemoQuestionMap;
