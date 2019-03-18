import React from 'react';
import { Action } from 'redux';

type PropsType = {
  handleResetClick: () => Action;
  isAnswerSide?: boolean;
};

function DemoButton({ handleResetClick, isAnswerSide = false }: PropsType): JSX.Element {
  function handleClick() {
    handleResetClick();
  }
  return (
    <button className="DemoQuestionButton" onClick={handleClick} disabled={isAnswerSide}>
      やり直す
    </button>
  );
}

export default DemoButton;
