import React from 'react';
import PropTypes from 'prop-types';

const DemoAnswerButton = (props) => {
  function handleClick(e) {
    e.preventDefault();
    props.handleResetClick();
  }
  return (
    <button className="DemoAnswerButton" onClick={handleClick}>やり直す</button>
  );
};

DemoAnswerButton.propTypes = {
  handleResetClick: PropTypes.func.isRequired,
};

export default DemoAnswerButton;
