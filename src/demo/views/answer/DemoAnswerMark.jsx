import React from 'react';
import PropTypes from 'prop-types';

const DemoAnswerMark = (props) => {
  let answer = '';
  if (props.answerGross.duration > 0) {
    answer = props.gross.duration === props.answerGross.duration ? '◎ 正解' : '× 不正解';
  }

  return (
    <div className="DemoAnswerMark">{answer}</div>
  );
};

DemoAnswerMark.propTypes = {
  gross: PropTypes.shape({
    distance: PropTypes.number,
    duration: PropTypes.number,
  }).isRequired,
  answerGross: PropTypes.shape({
    distance: PropTypes.number,
    duration: PropTypes.number,
  }).isRequired,
};

export default DemoAnswerMark;
