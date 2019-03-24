import React from 'react';
import { Step } from '../../../state.model';

import DemoDescriptionText from './DemoDescriptionText';
import DemoButton from '../common/DemoButton';

import '../../styles/DemoDescription.css';
import { Action } from '../../demoAction.model';

type PropsType = {
  handleChangeQuestionStep: (step: Step) => Action;
  handleResetClick: () => Action;
  questionStep: Step;
};

function DemoDescription({
  handleChangeQuestionStep,
  handleResetClick,
  questionStep,
}: PropsType): JSX.Element {
  function handleClick() {
    handleResetClick();
    handleChangeQuestionStep(Step.Edit);
  }
  return (
    <div className="DemoDescription">
      <DemoButton
        callback={handleClick}
        isDisabled={questionStep >= Step.Select}
        classname={'DemoEditButton'}
        label={'ルートを編集する'}
      />
      <DemoDescriptionText />
      <DemoButton
        callback={() => handleChangeQuestionStep(Step.Answer)}
        isDisabled={questionStep < Step.Over}
        classname={'DemoDescriptionButton'}
        label={'正解（最短経路）を見る'}
      />
    </div>
  );
}

export default DemoDescription;
