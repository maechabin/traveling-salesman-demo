import React from 'react';

import { Step } from '../../../state.model';
import { Action } from '../../demoAction.model';

type PropsType = {
  handleChangeQuestionStep: (step: Step) => Action;
  handleResetClick: () => Action;
  questionStep: Step;
};

function DemoEditButton({
  handleChangeQuestionStep,
  handleResetClick,
  questionStep,
}: PropsType): JSX.Element {
  const isDisabled = questionStep === Step.Select || questionStep === Step.Over;
  function handleClick() {
    handleResetClick();
    handleChangeQuestionStep(Step.Edit);
  }
  return (
    <button className="DemoEditButton" disabled={isDisabled} onClick={handleClick}>
      ルートを編集する
    </button>
  );
}

export default DemoEditButton;
