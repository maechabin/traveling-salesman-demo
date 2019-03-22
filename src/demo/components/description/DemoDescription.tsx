import React from 'react';
import { Step } from '../../../state.model';

import DemoDescriptionText from './DemoDescriptionText';
import DemoDescriptionButton from './DemoDescriptionButton';
import DemoEditButton from '../edit/DemoEditButton';

import '../../styles/DemoDescription.css';
import { Action } from '../../demoAction.model';

type PropsType = {
  handleChangeQuestionStep: (step: Step) => Action;
  questionStep: Step;
};

function DemoDescription({
  handleChangeQuestionStep,
  questionStep,
}: PropsType): JSX.Element {
  return (
    <div className="DemoDescription">
      <DemoEditButton
        handleChangeQuestionStep={handleChangeQuestionStep}
      />
      <DemoDescriptionText />
      <DemoDescriptionButton
        handleChangeQuestionStep={handleChangeQuestionStep}
        questionStep={questionStep}
      />
    </div>
  );
}

export default DemoDescription;
