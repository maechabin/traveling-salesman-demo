import React from 'react';
import { State, Step } from '../../../state.model';
import { Dispatches } from '../../demo.model';

import DemoAnswerList from './DemoAnswerList';
import DemoAnswerMap from './DemoAnswerMap';
import DemoAnswerMark from './DemoAnswerMark';
import DemoGross from '../common/DemoGross';
import DemoButton from '../common/DemoButton';

import '../../styles/DemoAnswer.css';

function DemoAnswer(props: State & Dispatches): JSX.Element {
  const { answerGross, answerWaypointOrder, routes, dispatchInitializeDemo, questionStep } = props;
  return (
    <div className="DemoAnswer">
      <h2>Google Mapsが選んだ経路</h2>
      <div className="DemoAnswerMain">
        <div className="DemoAnswerNavArea">
          <DemoAnswerMark answerWaypointOrder={answerWaypointOrder} />
          <DemoAnswerList
            departure={props.departure}
            arrival={props.arrival}
            routes={routes}
            answerWaypointOrder={answerWaypointOrder}
          />
          <DemoButton
            callback={dispatchInitializeDemo}
            isDisabled={props.questionStep !== Step.Answer}
            classname={'DemoQuestionButton'}
            label={'やり直す'}
          />
        </div>
        <div className="DemoAnswerMapArea">
          <DemoAnswerMap {...props} />
          <DemoGross gross={answerGross} />
        </div>
      </div>
    </div>
  );
}

export default DemoAnswer;
