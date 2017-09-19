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
  const renderingList = sortedList.map((route) => {
    const listClassName = route.sortId !== 0 ? 'DemoQuestionListSorted' : 'DemoQuestionListNotSorted';
    return (
      <li key={route.id} className={listClassName}>{route.label}: {route.title}</li>
    );
  });
  return (
    <div className="DemoQuestionList">
      <ul className="DemoQuestionListDeparture">
        <li>{props.departure.label}: {props.departure.title}</li>
      </ul>
      <ul className="DemoQuestionListRoutes">
        {renderingList}
      </ul>
      <ul className="DemoQuestionListArival">
        <li>{props.arival.label}: {props.arival.title}</li>
      </ul>
    </div>
  );
};

DemoQuestionList.propTypes = {
  routes: demoType.routes.isRequired,
  departure: demoType.departure.isRequired,
  arival: demoType.arival.isRequired,
};

export default DemoQuestionList;
