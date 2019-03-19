import React from 'react';

function DemoEditButton(): JSX.Element {
  function handleClick() {}
  return (
    <button className="DemoEditButton" disabled={false} onClick={handleClick}>
      ルートを編集する
    </button>
  );
}

export default DemoEditButton;
