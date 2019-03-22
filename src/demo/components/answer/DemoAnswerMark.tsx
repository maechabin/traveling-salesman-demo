import React from 'react';

type PropsType = {
  answerWaypointOrder: number[];
};

function DemoAnswerMark(props: PropsType): JSX.Element {
  const { answerWaypointOrder } = props;
  let answer = <></>;
  if (answerWaypointOrder.length > 0) {
    answer =
      answerWaypointOrder.toString() === [0, 1, 2, 3, 4, 5, 6, 7].toString() ? (
        <>
          😃
          <span>正 解</span>
        </>
      ) : (
        <>
          😣
          <span>残 念</span>
        </>
      );
  }
  return <div className="DemoAnswerMark">{answer}</div>;
}

export default DemoAnswerMark;
