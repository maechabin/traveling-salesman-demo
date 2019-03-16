import React from 'react';
import { State } from '../../../state.model';
import { Dispatches } from '../../demo.model';

import DemoAnswerButton from './DemoAnswerButton';
import DemoAnswerGross from './DemoAnswerGross';
import DemoAnswerList from './DemoAnswerList';
import DemoAnswerMap from './DemoAnswerMap';
import DemoAnswerMark from './DemoAnswerMark';

import '../../styles/DemoAnswer.css';

function DemoAnswer(props: State & Dispatches): JSX.Element {
  const { answerGross, answerWaypointOrder, routes, handleResetClick } = props;
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
          <DemoAnswerButton handleResetClick={handleResetClick} />
        </div>
        <div className="DemoAnswerMapArea">
          <DemoAnswerMap {...props} />
          <DemoAnswerGross answerGross={answerGross} />
        </div>
      </div>
    </div>
  );
}

export default DemoAnswer;
