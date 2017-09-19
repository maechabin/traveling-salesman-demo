import React from 'react';

import demoType from '../../demoType';

const DemoAnswerGross = props => (
  <div className="DemoQuestionGross">
    <p>総距離: <span>{props.answerGross.distance}</span>km / 総時間: <span>{props.answerGross.duration}</span>分</p>
  </div>
);

DemoAnswerGross.propTypes = {
  answerGross: demoType.answerGross.isRequired,
};

export default DemoAnswerGross;
