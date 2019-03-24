import React from 'react';
import { Route, Position } from '../../../state.model';
import { DisplaySide } from '../../demo.model';

type PropsType = {
  routes: Route[];
  departure: Position;
  arrival: Position;
  answerWaypointOrder: number[];
  displaySide: DisplaySide;
};

function DemoRoutesList({
  routes,
  departure,
  arrival,
  answerWaypointOrder,
  displaySide,
}: PropsType): JSX.Element {
  let renderingList: JSX.Element[] = [<></>];

  switch (displaySide) {
    case DisplaySide.Question:
      renderingList = routes.map((route: Route, i: number) => {
        const sort = route.sortId !== 0 ? 'DemoQuestionListSorted' : 'DemoQuestionListNotSorted';
        const mistake = answerWaypointOrder[i] !== i ? 'DemoQuestionListMistake' : '';
        const listClassName = answerWaypointOrder.length > 0 ? `${sort} ${mistake}` : sort;

        return (
          <li key={route.id} className={listClassName}>
            <span>{route.label}:</span>
            {route.title}
          </li>
        );
      });
      break;

    case DisplaySide.Answer:
      renderingList = answerWaypointOrder.map(order => (
        <li key={routes[order].id} className="DemoQuestionListSorted">
          <span>{routes[order].label}:</span>
          {routes[order].title}
        </li>
      ));
      break;
  }

  return (
    <div className="DemoQuestionList">
      <ul className="DemoQuestionListDeparture">
        <li key={departure.title}>
          <span>{departure.label}:</span>
          {departure.title}
        </li>
      </ul>
      <ul className="DemoQuestionListRoutes">{renderingList}</ul>
      <ul className="DemoQuestionListArrival">
        <li key={arrival.title}>
          <span>{arrival.label}:</span>
          {arrival.title}
        </li>
      </ul>
    </div>
  );
}

export default DemoRoutesList;
