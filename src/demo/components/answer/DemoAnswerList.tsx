import React from 'react';
import { Route, Position } from '../../../state.model';

type PropsType = {
  routes: Route[];
  departure: Position;
  arrival: Position;
  answerWaypointOrder: number[];
};

function DemoAnswerList({
  routes,
  departure,
  arrival,
  answerWaypointOrder,
}: PropsType): JSX.Element {
  const renderingList = answerWaypointOrder.map(order => (
    <li key={routes[order].id} className="DemoQuestionListSorted">
      <span>{routes[order].label}:</span>
      {routes[order].title}
    </li>
  ));
  return (
    <div className="DemoAnswerList">
      <ul className="DemoAnswerListDeparture">
        <li>
          <span>{departure.label}:</span>
          {departure.title}
        </li>
      </ul>
      <ul className="DemoAnswerListRoutes">{renderingList}</ul>
      <ul className="DemoAnswerListArrival">
        <li>
          <span>{arrival.label}:</span>
          {arrival.title}
        </li>
      </ul>
    </div>
  );
}

export default DemoAnswerList;
