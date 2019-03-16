import React from 'react';

import DemoDescriptionText from './DemoDescriptionText';
import DemoDescriptionButton from './DemoDescriptionButton';

import '../../styles/DemoDescription.css';

type PropsType = {
  handleAnswerButtonClick: () => void;
  choosingRouteFinishFlag: boolean;
};

function DemoDescription({
  handleAnswerButtonClick,
  choosingRouteFinishFlag,
}: PropsType): JSX.Element {
  return (
    <div className="DemoDescription">
      <DemoDescriptionText />
      <DemoDescriptionButton
        handleAnswerButtonClick={handleAnswerButtonClick}
        choosingRouteFinishFlag={choosingRouteFinishFlag}
      />
    </div>
  );
}

export default DemoDescription;
