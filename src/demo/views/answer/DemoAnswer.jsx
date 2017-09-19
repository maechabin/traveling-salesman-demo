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
  const { gross, answerGross, handleResetClick } = props;
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
            gross={gross}
            answerGross={answerGross}
          />
          <DemoAnswerList
            departure={props.departure}
            arival={props.arival}
            routes={props.routes}
            answerWaypointOrder={props.answerWaypointOrder}
          />
          <DemoAnswerButton handleResetClick={handleResetClick} />
        </div>
      </div>
    </div>
  );
};

DemoAnswer.propTypes = {
  gross: demoType.gross.isRequired,
  answerGross: demoType.answerGross.isRequired,
  routes: demoType.routes.isRequired,
  departure: demoType.departure.isRequired,
  arival: demoType.arival.isRequired,
  answerWaypointOrder: demoType.answerWaypointOrder.isRequired,
  handleResetClick: PropTypes.func.isRequired,
};

export default DemoAnswer;
