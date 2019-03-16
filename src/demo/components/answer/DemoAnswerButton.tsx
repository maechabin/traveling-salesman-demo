import React from 'react';
import { Action } from 'redux';

type PropsType = {
  handleResetClick: () => Action;
};

function DemoAnswerButton({ handleResetClick }: PropsType): JSX.Element {
  function handleClick() {
    handleResetClick();
  }
  return (
    <button className="DemoAnswerButton" onClick={handleClick} disabled={false}>
      やり直す
    </button>
  );
}

export default DemoAnswerButton;
