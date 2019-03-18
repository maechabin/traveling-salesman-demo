import React from 'react';

type PropsType = {
  handleAnswerButtonClick: () => void;
  isOver: boolean;
};

function DemoDescriptionButton(props: PropsType): JSX.Element {
  const { handleAnswerButtonClick, isOver } = props;
  function handleClick(): void {
    handleAnswerButtonClick();
  }
  return (
    <button className="DemoDescriptionButton" onClick={handleClick} disabled={!isOver}>
      正解（最短経路）を見る
    </button>
  );
}

export default DemoDescriptionButton;
