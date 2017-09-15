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
    // this.displayMarker();
    this.props.handleInit();
  }

  render() {
    return (
      <div ref="DemoAnswerMap" className="DemoAnswerMap">DemoAnswerMap</div>
    );
  }
}

DemoAnswerMap.propTypes = {

};

export default DemoAnswerMap;
