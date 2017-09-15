import React from 'react';
import PropTypes from 'prop-types';

import DemoAnswerButton from './DemoAnswerButton';
import DemoAnswerGross from './DemoAnswerGross';
import DemoAnswerList from './DemoAnswerList';
import DemoAnswerMap from './DemoAnswerMap';
import DemoAnswerMark from './DemoAnswerMark';

import '../../styles/DemoAnswer.css';

const DemoAnswer = (props) => {
  const { gross, answerGross, handleResetClick } = props;
  return (
    <div className="DemoAnswer">
      <h2>正解</h2>
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
  gross: PropTypes.shape({
    distance: PropTypes.number,
    duration: PropTypes.number,
  }).isRequired,
  answerGross: PropTypes.shape({
    distance: PropTypes.number,
    duration: PropTypes.number,
  }).isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  departure: PropTypes.object.isRequired,
  arival: PropTypes.object.isRequired,
  answerWaypointOrder: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleResetClick: PropTypes.func.isRequired,
};

export default DemoAnswer;
