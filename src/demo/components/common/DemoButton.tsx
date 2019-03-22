import React from 'react';
import { Action } from 'redux';
import { Step } from '../../../state.model';

type PropsType = {
  handleResetClick: () => Action;
  isDisabled: boolean;
};

function DemoButton({ handleResetClick, isDisabled }: PropsType): JSX.Element {
  function handleClick() {
    handleResetClick();
  }
  return (
    <button className="DemoQuestionButton" onClick={handleClick} disabled={isDisabled}>
      やり直す
    </button>
  );
}

export default DemoButton;
