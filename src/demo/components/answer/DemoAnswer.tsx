import React from 'react';
import { State, Step } from '../../../state.model';
import { Dispatches, DisplaySide } from '../../demo.model';
import * as ButtonLabel from '../../../constants/button';

import DemoAnswerMap from './DemoAnswerMap';
import DemoAnswerMark from './DemoAnswerMark';
import DemoRoutesList from '../shared/DemoRoutesList';
import DemoGross from '../shared/DemoGross';
import DemoButton from '../shared/DemoButton';

import '../../styles/DemoAnswer.css';

function DemoAnswer(props: State & Dispatches): JSX.Element {
  return (
    <div className="DemoAnswer">
      <h2>Google Mapsが選んだ経路</h2>
      <div className="DemoAnswerMain">
        <div className="DemoAnswerNavArea">
          <DemoAnswerMark answerWaypointOrder={props.answerWaypointOrder} />
          <DemoRoutesList
            departure={props.departure}
            arrival={props.arrival}
            routes={props.routes}
            answerWaypointOrder={props.answerWaypointOrder}
            displaySide={DisplaySide.Answer}
          />
          <DemoButton
            callback={props.dispatchInitializeDemo}
            isDisabled={props.questionStep !== Step.Answer}
            classname={'DemoQuestionButton'}
            label={ButtonLabel.START_OVER}
          />
        </div>
        <div className="DemoAnswerMapArea">
          <DemoAnswerMap {...props} />
          <DemoGross gross={props.answerGross} />
        </div>
      </div>
    </div>
  );
}

export default DemoAnswer;
