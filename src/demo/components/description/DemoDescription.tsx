import React from 'react';
import { Step } from '../../../state.model';

import DemoDescriptionText from './DemoDescriptionText';
import DemoButton from '../common/DemoButton';

import '../../styles/DemoDescription.css';
import { Action } from '../../demoAction.model';

type PropsType = {
  dispatchUpdateQuestionStep: (step: Step) => Action;
  dispatchInitializeDemo: () => Action;
  questionStep: Step;
};

function DemoDescription({
  dispatchUpdateQuestionStep,
  dispatchInitializeDemo,
  questionStep,
}: PropsType): JSX.Element {
  function handleClick() {
    dispatchInitializeDemo();
    dispatchUpdateQuestionStep(Step.Edit);
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
        callback={() => dispatchUpdateQuestionStep(Step.Answer)}
        isDisabled={questionStep < Step.Over}
        classname={'DemoDescriptionButton'}
        label={'正解（最短経路）を見る'}
      />
    </div>
  );
}

export default DemoDescription;
