import React from 'react';

function Header(): JSX.Element {
  const style = {
    header: {
      margin: 0,
      padding: 0,
      lineHeight: '40px',
      textAlign: 'center',
      backgroundColor: '#7fbc39',
      color: '#fff',
    } as React.CSSProperties,
    h1: {
      margin: 0,
      padding: 0,
      fontSize: '16px',
    } as React.CSSProperties,
  };

  return (
    <header style={style.header}>
      <h1 style={style.h1}>サラリーマン巡回問題 ~最短経路を探せ！~</h1>
    </header>
  );
}

export default Header;
