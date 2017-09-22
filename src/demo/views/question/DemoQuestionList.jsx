import React from 'react';

import demoType from '../../demoType';

const DemoQuestionList = (props) => {
  const sortedList = props.routes.sort((a, b) => {
    if (a.sortId > b.sortId) return -1;
    if (a.sortId < b.sortId) return 1;
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  });
  const renderingList = sortedList.map((route, i) => {
    const sort = route.sortId !== 0 ? 'DemoQuestionListSorted' : 'DemoQuestionListNotSorted';
    const mistake = props.answerWaypointOrder[i] !== i ? 'DemoQuestionListMistake' : '';
    const listClassName = props.answerWaypointOrder.length > 0 ? `${sort} ${mistake}` : sort;

    return (
      <li key={route.id} className={listClassName}><span>{route.label}:</span>{route.title}</li>
    );
  });
  return (
    <div className="DemoQuestionList">
      <ul className="DemoQuestionListDeparture">
        <li><span>{props.departure.label}:</span>{props.departure.title}</li>
      </ul>
      <ul className="DemoQuestionListRoutes">
        {renderingList}
      </ul>
      <ul className="DemoQuestionListArival">
        <li><span>{props.arival.label}:</span>{props.arival.title}</li>
      </ul>
    </div>
  );
};

DemoQuestionList.propTypes = {
  answerWaypointOrder: demoType.answerWaypointOrder.isRequired,
  routes: demoType.routes.isRequired,
  departure: demoType.departure.isRequired,
  arival: demoType.arival.isRequired,
};

export default DemoQuestionList;
