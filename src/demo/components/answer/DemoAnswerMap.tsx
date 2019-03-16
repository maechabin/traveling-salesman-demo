import React from 'react';
import PropTypes from 'prop-types';

import demoType from '../../demoType';

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
    this.map = new this.gm.Map(this.DemoAnswerMap, this.mapOptions);
    this.displayMarker();
    this.renderRoute();
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
      position: { lat: this.props.arrival.lat, lng: this.props.arrival.lng },
      map: this.map,
      title: this.props.arrival.title,
      label: this.props.arrival.label,
    });
    bounds.extend(marker.position);

    // 経路のマーカーを地図に表示
    this.props.routes.map(route => {
      const image =
        'https://mt.google.com/vt/icon?color=ff004C13&name=icons/spotlight/spotlight-waypoint-blue.png';
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

  // propsから出発地、到着地、経路、オプションを取得して、マーカーを結ぶ線（polyline）を地図に表示するメソッド
  renderRoute() {
    const directionsService = new this.gm.DirectionsService();
    const directionsRenderer = new this.gm.DirectionsRenderer();

    // 経路
    const wayPoints = this.props.routes.map(route => ({ location: route.title, stopover: true }));

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
    directionsService.route(
      {
        origin: this.props.departure.title, // 出発地
        destination: this.props.arrival.title, // 到着地
        drivingOptions: {
          departureTime: this.props.departureTime,
          trafficModel:
            this.props.traffic === 'bestguess'
              ? this.gm.TrafficModel.BEST_GUESS
              : this.props.traffic === 'optimistic'
              ? this.gm.TrafficModel.OPTIMISTIC
              : this.gm.TrafficModel.PESSIMISTIC,
        }, // 交通量を見積もる場合のオプション
        optimizeWaypoints: true, // 最適化を有効にする場合はtrue
        waypoints: wayPoints, // 経路（配列）
        travelMode:
          this.props.transport === 'car' ? this.gm.TravelMode.DRIVING : this.gm.TravelMode.WALKING, // 車(DRIVING) or 徒歩(WALKING)
        provideRouteAlternatives: false, // 複数の代替ルートをレスポンスに返す場合はtrue
        avoidHighways: this.props.expressway === 'no', // 高速道路を利用しない場合はtrue
        avoidTolls: this.props.expressway === 'no', // 有料道路を利用しない場合はtrue
      },
      (response, status) => {
        if (status === this.gm.DirectionsStatus.OK) {
          // directions apiのレスポンスをセット
          directionsRenderer.setDirections(response);

          // 総距離、総時間を表示
          let distance = 0;
          let duration = 0;
          response.routes[0].legs.forEach(item => {
            distance += item.distance.value;
            duration += item.duration.value;
          });
          const gross = {
            distance: Math.floor((distance / 1000) * 10 ** 1) / 10 ** 1, // 小数点第1位以下を切り捨て
            duration: Math.floor((duration / 60) * 10 ** 1) / 10 ** 1, // // 小数点第1位以下を切り捨て
          };
          return [
            directionsRenderer.setMap(this.map), // polylineを地図に表示
            this.props.handleUpdateAnswerData(gross, response.routes[0].waypoint_order),
          ];
        }
        return `error: ${status}`;
      },
    );
  }

  render() {
    return (
      <div
        ref={div => {
          this.DemoAnswerMap = div;
        }}
        className="DemoAnswerMap"
      />
    );
  }
}

DemoAnswerMap.propTypes = {
  google: PropTypes.shape({
    maps: PropTypes.object,
  }).isRequired,
  departure: demoType.departure.isRequired,
  departureTime: demoType.departureTime.isRequired,
  arrival: demoType.arrival.isRequired,
  routes: demoType.routes.isRequired,
  transport: demoType.transport.isRequired,
  expressway: demoType.expressway.isRequired,
  traffic: demoType.traffic.isRequired,
  handleUpdateAnswerData: PropTypes.func.isRequired,
};

export default DemoAnswerMap;
