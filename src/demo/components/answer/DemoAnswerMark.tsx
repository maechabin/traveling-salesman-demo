import React from 'react';

type PropsType = {
  answerWaypointOrder: number[];
};

function DemoAnswerMark(props: PropsType): JSX.Element {
  const { answerWaypointOrder } = props;
  let answer = '';
  if (answerWaypointOrder.length > 0) {
    answer =
      answerWaypointOrder.toString() === [0, 1, 2, 3, 4, 5, 6, 7].toString() ? '😃正解' : '😣残念';
  }
  return <div className="DemoAnswerMark">{answer}</div>;
}

export default DemoAnswerMark;
