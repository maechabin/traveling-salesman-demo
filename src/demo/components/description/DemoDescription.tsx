import React from 'react';
import { Step } from '../../../state.model';
import { Action } from '../../demoAction.model';
import * as ButtonLabel from '../../../constants/button';

import DemoDescriptionText from './DemoDescriptionText';
import DemoButton from '../common/DemoButton';

import '../../styles/DemoDescription.css';

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
        label={ButtonLabel.EDIT_ROUTES}
      />
      <DemoDescriptionText />
      <DemoButton
        callback={() => dispatchUpdateQuestionStep(Step.Answer)}
        isDisabled={questionStep < Step.Over}
        classname={'DemoDescriptionButton'}
        label={ButtonLabel.SEE_CORRECT_ANSWER}
      />
    </div>
  );
}

export default DemoDescription;
