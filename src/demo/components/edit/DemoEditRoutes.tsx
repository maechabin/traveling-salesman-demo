import React from 'react';
import { Route } from '../../../state.model';
import * as RouteConst from '../../../constants/route';

type PropsTypes = {
  routes: Route[];
  callback(event: React.FormEvent<HTMLInputElement>, index: number): any;
};

const style = {
  label: {
    color: '#fff',
    padding: '4px',
    boxSizing: 'border-box',
    textAlign: 'center',
    display: 'block',
    width: '320px',
  } as React.CSSProperties,
  ul: {
    listStyleType: 'none',
    margin: '0 0 16px 0',
    padding: 0,
  } as React.CSSProperties,
  input: {
    width: '320px',
    boxSizing: 'border-box',
    padding: '6px 4px',
    fontSize: '16px',
    imeMode: 'active',
  } as React.CSSProperties,
};

function DemoEditRoutes({ routes, callback }: PropsTypes): JSX.Element {
  function handleChange(event: React.FormEvent<HTMLInputElement>, index: number): void {
    callback(event, index);
  }

  const lists = routes.map((route: Route, index: number) => {
    return (
      <li>
        <input
          style={style.input}
          defaultValue={route.title}
          onChange={event => handleChange(event, index + 1)}
        />
      </li>
    );
  });

  return (
    <ul style={style.ul}>
      <label style={{ ...style.label, backgroundColor: RouteConst.ROUTES_COLOR }}>ルート</label>
      {lists}
    </ul>
  );
}

export default DemoEditRoutes;
