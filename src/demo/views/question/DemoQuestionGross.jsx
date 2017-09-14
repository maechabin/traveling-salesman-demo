import React from 'react';
import PropTypes from 'prop-types';

const DemoQuestionGross = props => (
  <div className="DemoQuestionGross">
    <p>総距離: <span>{props.gross.distance}</span>km / 総時間: <span>{props.gross.duration}</span>分</p>
  </div>
);

DemoQuestionGross.propTypes = {
  gross: PropTypes.shape({
    distance: PropTypes.number,
    duration: PropTypes.number,
  }).isRequired,
};

export default DemoQuestionGross;
