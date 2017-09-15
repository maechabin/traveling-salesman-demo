import React from 'react';
import PropTypes from 'prop-types';

import DemoDescriptionText from './DemoDescriptionText';
import DemoDescriptionButton from './DemoDescriptionButton';

import '../../styles/DemoDescription.css';

const DemoDescription = props => (
  <div className="DemoDescription">
    <DemoDescriptionText />
    <DemoDescriptionButton
      handleClick={props.handleAnswerButtonClick}
      choosingRouteFinishFlag={props.choosingRouteFinishFlag}
    />
  </div>
);

DemoDescription.propTypes = {
  handleAnswerButtonClick: PropTypes.func.isRequired,
  choosingRouteFinishFlag: PropTypes.bool.isRequired,
};

export default DemoDescription;
