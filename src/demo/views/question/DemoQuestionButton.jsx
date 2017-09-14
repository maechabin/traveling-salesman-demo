import React from 'react';

const DemoQuestionButton = (props) => {
  function handleClick(e) {
    e.preventDefault();
    props.handleResetClick();
  }
  return (
    <button className="DemoQuestionButton" onClick={handleClick}>やり直す</button>
  );
};

export default DemoQuestionButton;
