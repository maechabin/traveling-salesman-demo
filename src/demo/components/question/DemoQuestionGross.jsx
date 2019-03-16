import React from 'react';

import demoType from '../../demoType';

const DemoQuestionGross = props => (
  <div className="DemoQuestionGross">
    <p>総距離: <span>{props.gross.distance}</span>km / 総時間: <span>{props.gross.duration}</span>分</p>
  </div>
);

DemoQuestionGross.propTypes = {
  gross: demoType.gross.isRequired,
};

export default DemoQuestionGross;
