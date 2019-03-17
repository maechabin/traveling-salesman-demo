import React from 'react';
import { Gross } from '../../../state.model';

type PropsType = {
  gross: Gross;
};

function DemoGross({ gross }: PropsType): JSX.Element {
  return (
    <div className="DemoQuestionGross">
      <p>
        総距離: <span>{gross.distance}</span>km / 総時間: <span>{gross.duration}</span>分
      </p>
    </div>
  );
}

export default DemoGross;
