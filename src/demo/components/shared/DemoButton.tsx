import React from 'react';

type PropsType = {
  callback(arg?: any): any;
  isDisabled: boolean;
  classname?: string;
  label: string;
};

function DemoButton({ callback, isDisabled, classname, label }: PropsType): JSX.Element {
  function handleClick(): void {
    callback();
  }
  return (
    <button className={classname} onClick={handleClick} disabled={isDisabled}>
      {label}
    </button>
  );
}

export default DemoButton;
