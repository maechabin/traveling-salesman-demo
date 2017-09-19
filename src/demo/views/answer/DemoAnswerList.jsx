import React from 'react';

import demoType from '../../demoType';

const DemoAnswerList = (props) => {
  const { routes, answerWaypointOrder } = props;
  const renderingList = answerWaypointOrder.map(
    order => (<li key={routes[order].id} className="DemoQuestionListSorted">
      {routes[order].label}: {routes[order].title}
    </li>),
  );
  return (
    <div className="DemoAnswerList">
      <ul className="DemoAnswerListDeparture">
        <li>{props.departure.label}: {props.departure.title}</li>
      </ul>
      <ul className="DemoAnswerListRoutes">
        {renderingList}
      </ul>
      <ul className="DemoAnswerListArival">
        <li>{props.arival.label}: {props.arival.title}</li>
      </ul>
    </div>
  );
};

DemoAnswerList.propTypes = {
  routes: demoType.routes.isRequired,
  answerWaypointOrder: demoType.answerWaypointOrder.isRequired,
  departure: demoType.departure.isRequired,
  arival: demoType.arival.isRequired,
};

export default DemoAnswerList;
