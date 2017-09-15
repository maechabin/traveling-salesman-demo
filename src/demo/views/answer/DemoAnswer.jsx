import React from 'react';
import PropTypes from 'prop-types';

import DemoAnswerButton from './DemoAnswerButton';
import DemoAnswerGross from './DemoAnswerGross';
import DemoAnswerList from './DemoAnswerList';
import DemoAnswerMap from './DemoAnswerMap';
import DemoAnswerMark from './DemoAnswerMark';

import '../../styles/DemoAnswer.css';

const DemoAnswer = (props) => {
  const { google, gross, handleResetClick, ...rest } = props;
  return (
    <div className="DemoAnswer">
      <h2>正解</h2>
      <div className="DemoAnswerMain">
        <div className="DemoAnswerMapArea">
          <DemoAnswerMap {...props} />
          <DemoAnswerGross gross={gross} />
        </div>
        <div className="DemoAnswerNavArea">
          <DemoAnswerMark {...rest} />
          <DemoAnswerList {...rest} />
          <DemoAnswerButton handleResetClick={handleResetClick} />
        </div>
      </div>
    </div>
  );
};

DemoAnswer.propTypes = {
  google: PropTypes.shape({
    maps: PropTypes.object,
  }).isRequired,
  gross: PropTypes.shape({
    distance: PropTypes.number,
    duration: PropTypes.number,
  }).isRequired,
  handleResetClick: PropTypes.func.isRequired,
};

export default DemoAnswer;
