import React from 'react';

class DemoQuestionMap extends React.Component {

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
      return `Geocode was not successful for the following reason: ${status}`;
    });
  }

  displayMap() {
    const _this = this;
    const bounds = new this.props.google.maps.LatLngBounds();
    let marker;

    // 地図を表示する際のオプションを設定
    const mapOptions = {
      center: new this.props.google.maps.LatLng(this.props.departure.lat, this.props.departure.lng),
      zoom: 12,
      mapTypeId: this.props.google.maps.MapTypeId.ROADMAP
    };

    // Mapオブジェクトに地図表示要素情報とオプション情報を渡し、インスタンス生成
    const map = new this.props.google.maps.Map(this.refs.DemoQuestionMap, mapOptions);

    marker = new this.props.google.maps.Marker({
      position: { lat: this.props.departure.lat, lng: this.props.departure.lng },
      map,
      title: this.props.departure.title,
      label: this.props.departure.label,
    });
    bounds.extend(marker.position);

    marker = new this.props.google.maps.Marker({
      position: { lat: this.props.arival.lat, lng: this.props.arival.lng },
      map,
      title: this.props.arival.title,
      label: this.props.arival.label,
    });
    bounds.extend(marker.position);

    this.props.routes.map((route) => {
      marker = new this.props.google.maps.Marker({
        position: { lat: route.lat, lng: route.lng },
        map,
        title: route.title,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        label: route.label,
      });
      bounds.extend(marker.position);
      marker.addListener('click', () => {
        console.log(route);
        if (route.sortId === 0) {
          return this.props.handleMarkerClick(route.id);
        }
        return false;
      });
      return marker;
    });
    map.fitBounds(bounds);
  }

  render() {
    return (
      <div ref="DemoQuestionMap" className="DemoQuestionMap">Map</div>
    );
  }
}

DemoQuestionMap.propTypes = {

};

export default DemoQuestionMap;
