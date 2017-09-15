import React from 'react';
import PropTypes from 'prop-types';

const DemoAnswerList = (props) => {
  const { routes, answerWaypointOrder } = props;
  const renderingList = answerWaypointOrder.map(
    order => <li key={routes[order].id} className="DemoQuestionListSorted">{routes[order].label}: {routes[order].title}</li>,
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
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  answerWaypointOrder: PropTypes.arrayOf(PropTypes.number).isRequired,
  departure: PropTypes.shape({
    label: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  arival: PropTypes.shape({
    label: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default DemoAnswerList;
