import React from 'react';
import PropTypes from 'prop-types';

import demoType from '../../demoType';

class DemoQuestionMap extends React.PureComponent {
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

  shouldComponentUpdate(nextProps) {
    if (!nextProps.initialFlag) {
      return (this.props.gross === nextProps.gross);
    }
    return true;
  }

  componentDidUpdate() {
    if (this.props.choosingRouteStartFlag) {
      this.renderRoute();
      this.displayMarker();
    }
    if (this.props.initialFlag) {
      this.init();
    }
  }

  // 初期化
  init() {
    console.log(this.props.departureTime);
    this.map = new this.gm.Map(this.DemoQuestionMap, this.mapOptions);
    this.displayMarker();
    this.props.handleInit();
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
      const image = route.sortId !== 0 ?
        'https://mt.google.com/vt/icon?color=ff004C13&name=icons/spotlight/spotlight-waypoint-blue.png' :
        'https://mt.google.com/vt/icon?color=ff004C13&name=icons/spotlight/spotlight-waypoint-a.png';
      marker = new this.gm.Marker({
        position: { lat: route.lat, lng: route.lng },
        map: this.map,
        title: route.title,
        icon: image,
        label: route.label,
      });
      bounds.extend(marker.position);
      marker.addListener('click', () => {
        if (route.sortId === 0) {
          return this.props.handleMarkerClick(route.id, this.props.choosingRouteStartFlag, this.props.currentSortId);
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

    // 経路
    const wayPoints = filteredRoutes.map(route => ({ location: route.title, stopover: this.props.traffic === 'standard' }));

    // 到着地
    const destination = filteredRoutes.length === this.props.routes.length ? this.props.arival.title : filteredRoutes[filteredRoutes.length - 1].title;

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
      // origin: this.props.departure.title, // 出発地
      origin: this.props.departure.title,
      waypoints: wayPoints, // 経路（配列）
      destination, // 到着地
      travelMode: this.props.transport === 'car' ? this.gm.TravelMode.DRIVING : this.gm.TravelMode.WALKING, // 車(DRIVING) or 徒歩(WALKING)
      avoidHighways: this.props.expressway !== 'no', // 高速は利用しない場合はfalse
      optimizeWaypoints: false, // 最適化を有効にする場合はtrue
      drivingOptions: {
        departureTime: this.props.departureTime,
        trafficModel: this.props.traffic === 'bestguess' ? this.gm.TrafficModel.BEST_GUESS : this.props.traffic === 'optimistic' ? this.gm.TrafficModel.OPTIMISTIC : this.gm.TrafficModel.PESSIMISTIC,
      },
    }, (response, status) => {
      if (status === this.gm.DirectionsStatus.OK) {
        // directions apiのレスポンスをセット
        directionsRenderer.setDirections(response);

        // 総距離、総時間を表示
        let distance = 0;
        let duration = 0;
        response.routes[0].legs.forEach((item) => {
          distance += item.distance.value;
          duration += this.props.transport === 'car' && this.props.traffic !== 'standard' ? item.duration_in_traffic.value : item.duration.value;
        });
        const gross = {
          distance: Math.floor((distance / 1000) * (10 ** 1)) / (10 ** 1), // 小数点第1位以下を切り捨て
          duration: Math.floor((duration / 60) * (10 ** 1)) / (10 ** 1), // // 小数点第1位以下を切り捨て
        };
        return this.props.handleUpdateGross(gross);
      }
      return `error: ${status}`;
    });
    // polylineを地図に表示
    directionsRenderer.setMap(this.map);
  }

  render() {
    return (
      <div
        ref={(div) => { this.DemoQuestionMap = div; }}
        className="DemoQuestionMap"
      />
    );
  }
}

DemoQuestionMap.propTypes = {
  google: PropTypes.shape({
    maps: PropTypes.object,
  }).isRequired,
  handleMarkerClick: PropTypes.func.isRequired,
  handleUpdateGross: PropTypes.func.isRequired,
  handleInit: PropTypes.func.isRequired,
  gross: demoType.gross.isRequired,
  departure: demoType.departure.isRequired,
  arival: demoType.arival.isRequired,
  routes: demoType.routes.isRequired,
  currentSortId: demoType.currentSortId.isRequired,
  transport: demoType.transport.isRequired,
  expressway: demoType.expressway.isRequired,
  traffic: demoType.traffic.isRequired,
  departureTime: demoType.departureTime.isRequired,
  initialFlag: demoType.initialFlag.isRequired,
  choosingRouteStartFlag: demoType.choosingRouteStartFlag.isRequired,
};

export default DemoQuestionMap;
