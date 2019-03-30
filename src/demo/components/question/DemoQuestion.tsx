import React from 'react';

import { Route, State, Step } from '../../../state.model';
import { Dispatches, DisplaySide } from '../../demo.model';
import * as ButtonLabel from '../../../constants/button';
import DemoQuestionMap from './DemoQuestionMap';
import DemoQuestionOptions from './DemoQuestionOptions';
import DemoRoutesList from '../shared/DemoRoutesList';
import DemoGross from '../shared/DemoGross';
import DemoButton from '../shared/DemoButton';
import '../../styles/DemoQuestion.css';

function DemoQuestion(props: State & Dispatches): JSX.Element {
  const sortedList = props.routes.sort((routeA: Route, routeB: Route) => {
    if (routeA.sortId > routeB.sortId) return -1;
    if (routeA.sortId < routeB.sortId) return 1;
    if (routeA.id < routeB.id) return -1;
    if (routeA.id > routeB.id) return 1;
    return 0;
  });

  return (
    <div className="DemoQuestion">
      <h2>あなたが選んだ経路</h2>
      <div className="DemoQuestionMain">
        <div className="DemoQuestionMapArea">
          <DemoQuestionMap {...props} />
          <DemoGross gross={props.gross} />
        </div>
        <div className="DemoQuestionNavArea">
          <DemoQuestionOptions {...props} />
          <DemoRoutesList
            routes={sortedList}
            departure={props.departure}
            arrival={props.arrival}
            answerWaypointOrder={props.answerWaypointOrder}
            displaySide={DisplaySide.Question}
          />
          <DemoButton
            callback={props.dispatchInitializeDemo}
            isDisabled={props.questionStep === Step.Answer}
            classname={'DemoQuestionButton'}
            label={ButtonLabel.START_OVER}
          />
        </div>
      </div>
    </div>
  );
}

export default DemoQuestion;
