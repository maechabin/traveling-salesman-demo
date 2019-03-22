import React from 'react';

function DemoEditButton(): JSX.Element {
import { Step } from '../../../state.model';
import { Action } from '../../demoAction.model';

type PropsType = {
  handleChangeQuestionStep: (step: Step) => Action;
};

  function handleClick() {
    handleChangeQuestionStep(Step.Edit);
  }
  return (
    <button className="DemoEditButton" disabled={false} onClick={handleClick}>
      ルートを編集する
    </button>
  );
}

export default DemoEditButton;
