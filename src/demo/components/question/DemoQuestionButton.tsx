import React from 'react';
import { Action } from 'redux';

type PropsType = {
  handleResetClick: () => Action;
  viewAnswerFlag: boolean;
};

function DemoQuestionButton({ handleResetClick, viewAnswerFlag }: PropsType): JSX.Element {
  function handleClick() {
    handleResetClick();
  }
  return (
    <button className="DemoQuestionButton" onClick={handleClick} disabled={viewAnswerFlag}>
      やり直す
    </button>
  );
}

export default DemoQuestionButton;
