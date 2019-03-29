import React from 'react';

import Header from './Header';

type PropsType = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: PropsType): JSX.Element {
  return (
    <div className="Demo">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
