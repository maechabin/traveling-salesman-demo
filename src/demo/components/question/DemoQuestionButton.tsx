import React from 'react';
import { Action } from 'redux';

type PropsType = {
  handleResetClick: () => Action;
  viewAnswerFlag: boolean;
};

  function handleClick(e) {
    e.preventDefault();
    props.handleResetClick();
function DemoQuestionButton({ handleResetClick, viewAnswerFlag }: PropsType): JSX.Element {
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
}

export default DemoQuestionButton;
