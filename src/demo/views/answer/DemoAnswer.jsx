import React from 'react';
import PropTypes from 'prop-types';

import DemoAnswerButton from './DemoAnswerButton';
import DemoAnswerGross from './DemoAnswerGross';
import DemoAnswerList from './DemoAnswerList';
import DemoAnswerMap from './DemoAnswerMap';
import DemoAnswerMark from './DemoAnswerMark';

import demoType from '../../demoType';
import '../../styles/DemoAnswer.css';

const DemoAnswer = (props) => {
  const { answerGross, answerWaypointOrder, routes, handleResetClick } = props;
  return (
    <div className="DemoAnswer">
      <h2>正 解</h2>
      <div className="DemoAnswerMain">
        <div className="DemoAnswerMapArea">
          <DemoAnswerMap {...props} />
          <DemoAnswerGross answerGross={answerGross} />
        </div>
        <div className="DemoAnswerNavArea">
          <DemoAnswerMark
            answerWaypointOrder={answerWaypointOrder}
            routes={routes}
          />
          <DemoAnswerList
            departure={props.departure}
            arival={props.arival}
            routes={routes}
            answerWaypointOrder={answerWaypointOrder}
          />
          <DemoAnswerButton handleResetClick={handleResetClick} />
        </div>
      </div>
    </div>
  );
};

DemoAnswer.propTypes = {
  answerGross: demoType.answerGross.isRequired,
  routes: demoType.routes.isRequired,
  departure: demoType.departure.isRequired,
  arival: demoType.arival.isRequired,
  answerWaypointOrder: demoType.answerWaypointOrder.isRequired,
  handleResetClick: PropTypes.func.isRequired,
};

export default DemoAnswer;
