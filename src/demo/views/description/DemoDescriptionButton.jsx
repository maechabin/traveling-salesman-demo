import React from 'react';
import PropTypes from 'prop-types';

import demoType from '../../demoType';

const DemoDescriptionButton = (props) => {
  function handleClick(e) {
    e.preventDefault();
    props.handleClick();
  }
  return (
    <button
      className="DemoDescriptionButton"
      onClick={handleClick}
      disabled={!props.choosingRouteFinishFlag}
    >
      正解（最短経路）を見る
    </button>
  );
};

DemoDescriptionButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  choosingRouteFinishFlag: demoType.choosingRouteFinishFlag.isRequired,
};

export default DemoDescriptionButton;
