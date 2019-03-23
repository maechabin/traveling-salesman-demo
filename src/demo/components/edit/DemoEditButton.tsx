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
  function handleClick() {
    handleResetClick();
    handleChangeQuestionStep(Step.Edit);
  }
  return (
    <button className="DemoEditButton" disabled={questionStep >= Step.Select} onClick={handleClick}>
      ルートを編集する
    </button>
  );
}

export default DemoEditButton;
