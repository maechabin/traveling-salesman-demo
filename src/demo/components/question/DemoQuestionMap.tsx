import React from 'react';

import Map from '../../../domains/map/Map';
import { State, Step } from '../../../state.model';
import { Dispatches } from '../../demo.model';

class DemoQuestionMap extends React.Component<State & Dispatches, never> {
  /** mapを表示する要素 */
  readonly gmapsRef = React.createRef<HTMLDivElement>();

  /** Mapのインスタンスを生成 */
  readonly map = new Map();

  componentDidMount() {
    this.init();
    this.props.dispatchUpdateQuestionStep(Step.Start);
  }

  shouldComponentUpdate(nextProps: State & Dispatches) {
    if (nextProps.questionStep !== Step.Initial) {
      return this.props.gross === nextProps.gross;
    }
    return true;
  }

  componentDidUpdate() {
    switch (this.props.questionStep) {
      case Step.Initial:
        this.init();
        this.props.dispatchUpdateQuestionStep(Step.Start);
        break;
      case Step.Select:
        this.map.initPolyLine(this.props);
        this.map.initMarker(this.props);
        break;
    }
  }

  // 初期化
  init() {
    this.map.initMap(this.gmapsRef.current, this.props.departure);
    this.map.initMarker(this.props);
  }

  render() {
    return <div ref={this.gmapsRef} className="DemoQuestionMap" />;
  }
}

export default DemoQuestionMap;
