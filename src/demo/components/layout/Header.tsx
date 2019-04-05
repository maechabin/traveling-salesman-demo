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
      position: 'relative',
    } as React.CSSProperties,
    h1: {
      margin: 0,
      padding: 0,
      fontSize: '16px',
    } as React.CSSProperties,
    github: {
      margin: 0,
      padding: 0,
      position: 'absolute',
      top: 0,
      right: '16px',
    } as React.CSSProperties,
    link: {
      color: '#fff',
    },
  };

  return (
    <header style={style.header}>
      <h1 style={style.h1}>サラリーマン巡回問題 ~最短経路を探せ！~</h1>
      <p style={style.github}>
        <a
          style={style.link}
          href="https://github.com/maechabin/traveling-salesman-demo"
          rel="noopener noreferrer"
          target="_blank">
          GitHub
        </a>
      </p>
    </header>
  );
}

export default Header;
