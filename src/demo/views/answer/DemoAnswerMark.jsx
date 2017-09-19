import React from 'react';

import demoType from '../../demoType';

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
  gross: demoType.gross.isRequired,
  answerGross: demoType.answerGross.isRequired,
};

export default DemoAnswerMark;
