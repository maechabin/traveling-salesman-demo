import React from 'react';
import { Gross } from '../../../state.model';

type PropsType = {
  answerGross: Gross;
};

function DemoAnswerGross({ answerGross }: PropsType): JSX.Element {
  return (
    <div className="DemoQuestionGross">
      <p>
        総距離: <span>{answerGross.distance}</span>km / 総時間: <span>{answerGross.duration}</span>
        分
      </p>
    </div>
  );
}

export default DemoAnswerGross;
