import React from 'react';

import DemoDescriptionText from './DemoDescriptionText';
import DemoDescriptionButton from './DemoDescriptionButton';

import '../../styles/DemoDescription.css';

type propsType = {
  handleAnswerButtonClick: () => void;
  choosingRouteFinishFlag: boolean;
};

function DemoDescription(props: propsType): JSX.Element {
  const { handleAnswerButtonClick, choosingRouteFinishFlag } = props;
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
