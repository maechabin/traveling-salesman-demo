import React from 'react';

import DemoDescriptionText from './DemoDescriptionText';
import DemoDescriptionButton from './DemoDescriptionButton';
import DemoEditButton from '../edit/DemoEditButton';

import '../../styles/DemoDescription.css';

type PropsType = {
  handleAnswerButtonClick: () => void;
  isOver: boolean;
};

function DemoDescription({ handleAnswerButtonClick, isOver }: PropsType): JSX.Element {
  return (
    <div className="DemoDescription">
      <DemoEditButton />
      <DemoDescriptionText />
      <DemoDescriptionButton handleAnswerButtonClick={handleAnswerButtonClick} isOver={isOver} />
    </div>
  );
}

export default DemoDescription;
