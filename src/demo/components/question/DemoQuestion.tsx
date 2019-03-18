import React from 'react';
import { State } from '../../../state.model';
import { Dispatches } from '../../demo.model';

import DemoQuestionMap from './DemoQuestionMap';
import DemoQuestionList from './DemoQuestionList';
import DemoQuestionOption from './DemoQuestionOptions';
import DemoGross from '../common/DemoGross';
import DemoButton from '../common/DemoButton';

import '../../styles/DemoQuestion.css';

function DemoQuestion(props: State & Dispatches): JSX.Element {
  const { gross, handleResetClick, ...rest } = props;
  return (
    <div className="DemoQuestion">
      <h2>あなたが選んだ経路</h2>
      <div className="DemoQuestionMain">
        <div className="DemoQuestionMapArea">
          <DemoQuestionMap {...props} />
          <DemoGross gross={gross} />
        </div>
        <div className="DemoQuestionNavArea">
          <DemoQuestionOption {...rest} />
          <DemoQuestionList {...rest} />
          <DemoButton handleResetClick={handleResetClick} isAnswerSide={props.isAnswerSide} />
        </div>
      </div>
    </div>
  );
}

export default DemoQuestion;
