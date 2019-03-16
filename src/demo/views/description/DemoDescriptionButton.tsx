import React from 'react';

type propsType = {
  handleAnswerButtonClick: () => void;
  choosingRouteFinishFlag: boolean;
};

function DemoDescriptionButton(props: propsType): JSX.Element {
  const { handleAnswerButtonClick, choosingRouteFinishFlag } = props;
  function handleClick(): void {
    handleAnswerButtonClick();
  }
  return (
    <button
      className="DemoDescriptionButton"
      onClick={handleClick}
      disabled={!choosingRouteFinishFlag}>
      正解（最短経路）を見る
    </button>
  );
}

export default DemoDescriptionButton;
