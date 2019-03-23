import React from 'react';
import { Route, Position } from '../../../state.model';

type PropsType = {
  routes: Route[];
  departure: Position;
  arrival: Position;
  answerWaypointOrder: number[];
};

function DemoQuestionList({
  routes,
  departure,
  arrival,
  answerWaypointOrder,
}: PropsType): JSX.Element {
  const sortedList = routes.sort((routeA: Route, routeB: Route) => {
    if (routeA.sortId > routeB.sortId) return -1;
    if (routeA.sortId < routeB.sortId) return 1;
    if (routeA.id < routeB.id) return -1;
    if (routeA.id > routeB.id) return 1;
    return 0;
  });
  const renderingList = sortedList.map((route: Route, i: number) => {
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

export default DemoQuestionList;
