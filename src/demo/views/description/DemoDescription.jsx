import React from 'react';
import PropTypes from 'prop-types';

import demoType from '../../demoType';

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
  choosingRouteFinishFlag: demoType.choosingRouteFinishFlag.isRequired,
};

export default DemoDescription;
