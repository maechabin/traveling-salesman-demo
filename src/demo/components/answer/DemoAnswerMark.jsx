import React from 'react';

import demoType from '../../demoType';

const DemoAnswerMark = (props) => {
  let answer = '';
  if (props.answerWaypointOrder.length > 0) {
    answer = props.answerWaypointOrder.toString() === [0, 1, 2, 3, 4, 5, 6, 7].toString() ? '😃正解' : '😣残念';
  }

  return (
    <div className="DemoAnswerMark">{answer}</div>
  );
};

DemoAnswerMark.propTypes = {
  answerWaypointOrder: demoType.answerWaypointOrder.isRequired,
};

export default DemoAnswerMark;
