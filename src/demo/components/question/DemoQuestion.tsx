import React from 'react';
import { State, Step } from '../../../state.model';
import { Dispatches } from '../../demo.model';

import DemoQuestionMap from './DemoQuestionMap';
import DemoQuestionList from './DemoQuestionList';
import DemoQuestionOption from './DemoQuestionOptions';
import DemoGross from '../common/DemoGross';
import DemoButton from '../common/DemoButton';

import '../../styles/DemoQuestion.css';

function DemoQuestion(props: State & Dispatches): JSX.Element {
  const { gross, dispatchInitializeDemo, ...rest } = props;
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
          <DemoButton
            callback={dispatchInitializeDemo}
            isDisabled={props.questionStep === Step.Answer}
            classname={'DemoQuestionButton'}
            label={'やり直す'}
          />
        </div>
      </div>
    </div>
  );
}

export default DemoQuestion;
