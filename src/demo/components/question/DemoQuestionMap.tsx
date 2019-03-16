import React from 'react';
import Map from '../../utils/Map';

import { State } from '../../../state.model';
import { Dispatches } from '../../demo.model';

class DemoQuestionMap extends React.PureComponent<State & Dispatches, any> {
  /** mapを表示する要素 */
  readonly gmapsRef = React.createRef<HTMLDivElement>();

  /** Mapのインスタンスを生成 */
  readonly map = new Map();

  componentDidMount() {
    this.init();
  }

  shouldComponentUpdate(nextProps: State & Dispatches) {
    if (!nextProps.initialFlag) {
      return this.props.gross === nextProps.gross;
    }
    return true;
  }

  componentDidUpdate() {
    if (this.props.choosingRouteStartFlag) {
      this.map.initPolyLine(this.props);
      this.map.initMarker(this.props);
    }
    if (this.props.initialFlag) {
      this.init();
    }
  }

  // 初期化
  init() {
    this.map.initMap(this.gmapsRef.current, this.props.departure);
    this.map.initMarker(this.props);
    this.props.handleInit();
  }

  render() {
    return <div ref={this.gmapsRef} className="DemoQuestionMap" />;
  }
}

export default DemoQuestionMap;
