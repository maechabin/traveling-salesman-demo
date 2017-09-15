import React from 'react';
import PropTypes from 'prop-types';

const DemoAnswerGross = props => (
  <div className="DemoQuestionGross">
    <p>総距離: <span>{props.answerGross.distance}</span>km / 総時間: <span>{props.answerGross.duration}</span>分</p>
  </div>
);

DemoAnswerGross.propTypes = {
  answerGross: PropTypes.shape({
    distance: PropTypes.number,
    duration: PropTypes.number,
  }).isRequired,
};

export default DemoAnswerGross;
