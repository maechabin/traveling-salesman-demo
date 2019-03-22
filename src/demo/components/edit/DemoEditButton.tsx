import React from 'react';

import { Step } from '../../../state.model';
import { Action } from '../../demoAction.model';

type PropsType = {
  handleChangeQuestionStep: (step: Step) => Action;
  handleResetClick: () => Action;
};

function DemoEditButton({ handleChangeQuestionStep, handleResetClick }: PropsType): JSX.Element {
  function handleClick() {
    handleResetClick();
    handleChangeQuestionStep(Step.Edit);
  }
  return (
    <button className="DemoEditButton" disabled={false} onClick={handleClick}>
      ルートを編集する
    </button>
  );
}

export default DemoEditButton;
