import React from 'react';
import PropTypes from 'prop-types';

const DemoQuestionButton = (props) => {
  function handleClick(e) {
    e.preventDefault();
    props.handleResetClick();
  }
  return (
    <button className="DemoQuestionButton" onClick={handleClick} disabled={props.viewAnswerFlag}>やり直す</button>
  );
};

DemoQuestionButton.propTypes = {
  handleResetClick: PropTypes.func.isRequired,
  viewAnswerFlag: PropTypes.bool.isRequired,
};

export default DemoQuestionButton;
