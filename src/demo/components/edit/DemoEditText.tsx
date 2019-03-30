import React from 'react';

function DemoEditText() {
  const style = {
    div: {
      textAlign: 'center',
    } as React.CSSProperties,
  };
  return (
    <div style={style.div}>
      <p>出発地、到着地は入力必須です。</p>
      <p>また、ルートは2箇所以上の入力が必要です。</p>
    </div>
  );
}

export default DemoEditText;
