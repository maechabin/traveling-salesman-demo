import React from 'react';

type PropsType = {
  answerWaypointOrder: number[];
};

function DemoAnswerMark({ answerWaypointOrder }: PropsType): JSX.Element {
  let answer = <></>;
  if (answerWaypointOrder.length > 0) {
    answer =
      JSON.stringify(answerWaypointOrder) ===
      JSON.stringify(Array.from(new Array(answerWaypointOrder.length)).map((_, i) => i)) ? (
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
