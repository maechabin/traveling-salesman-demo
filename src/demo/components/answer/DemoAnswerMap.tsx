import React from 'react';
import Map from '../../utils/Map';

import { State } from '../../../state.model';
import { Dispatches } from '../../demo.model';

class DemoAnswerMap extends React.PureComponent<State & Dispatches, any> {
  /** mapを表示する要素 */
  readonly gmapsRef = React.createRef<HTMLDivElement>();

  /** Mapのインスタンスを生成 */
  readonly map = new Map();

  componentDidMount() {
    this.init();
  }

  // 初期化
  init() {
    this.map.initMap(this.gmapsRef.current, this.props.departure);
    this.map.initAnswerPolyLine(this.props);
    this.map.initMarker(this.props);
  }

  render() {
    return <div ref={this.gmapsRef} className="DemoAnswerMap" />;
  }
}

export default DemoAnswerMap;
