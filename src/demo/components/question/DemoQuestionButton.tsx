import React from 'react';
import PropTypes from 'prop-types';

import demoType from '../../demoType';

const DemoQuestionButton = (props) => {
  function handleClick(e) {
    e.preventDefault();
    props.handleResetClick();
  }
  return (
    <button
      className="DemoQuestionButton"
      onClick={handleClick}
      disabled={props.viewAnswerFlag}
    >
      やり直す
    </button>
  );
};

DemoQuestionButton.propTypes = {
  handleResetClick: PropTypes.func.isRequired,
  viewAnswerFlag: demoType.viewAnswerFlag.isRequired,
};

export default DemoQuestionButton;
