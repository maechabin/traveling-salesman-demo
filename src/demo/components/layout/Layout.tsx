import React from 'react';
import Header from './Header';

type propsType = {
  children: JSX.Element | JSX.Element[];
};

function Layout(props: propsType): JSX.Element {
  const { children } = props;
  return (
    <div className="Demo">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
