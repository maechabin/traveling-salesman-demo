import React from 'react';
import { State } from '../../../state.model';
import { Dispatches } from '../../demo.model';

import DemoQuestionMap from './DemoQuestionMap';
import DemoQuestionGross from './DemoQuestionGross';
import DemoQuestionList from './DemoQuestionList';
import DemoQuestionOption from './DemoQuestionOptions';
import DemoQuestionButton from './DemoQuestionButton';

import '../../styles/DemoQuestion.css';

function DemoQuestion(props: State & Dispatches): JSX.Element {
  const { gross, handleResetClick, ...rest } = props;
  return (
    <div className="DemoQuestion">
      <h2>あなたが選んだ経路</h2>
      <div className="DemoQuestionMain">
        <div className="DemoQuestionMapArea">
          <DemoQuestionMap {...props} />
          <DemoQuestionGross gross={gross} />
        </div>
        <div className="DemoQuestionNavArea">
          <DemoQuestionOption {...rest} />
          <DemoQuestionList {...rest} />
          <DemoQuestionButton
            handleResetClick={handleResetClick}
            viewAnswerFlag={props.viewAnswerFlag}
          />
        </div>
      </div>
    </div>
  );
}

export default DemoQuestion;
