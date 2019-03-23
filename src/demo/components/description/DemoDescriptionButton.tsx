import React from 'react';
import { Step } from '../../../state.model';
import { Action } from '../../demoAction.model';

type PropsType = {
  handleChangeQuestionStep: (step: Step) => Action;
  questionStep: Step;
};

function DemoDescriptionButton({ handleChangeQuestionStep, questionStep }: PropsType): JSX.Element {
  function handleClick(): void {
    handleChangeQuestionStep(Step.Answer);
  }
  return (
    <button
      className="DemoDescriptionButton"
      onClick={handleClick}
      disabled={questionStep < Step.Over}>
      正解（最短経路）を見る
    </button>
  );
}

export default DemoDescriptionButton;
