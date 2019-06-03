import React from 'react';

import { Route } from '../../../state.model';
import * as RouteConst from '../../../constants/route';
import { demoEditRoute } from './demoEdit.style';

type PropsType = {
  routes: Route[];
  callback(event: React.FormEvent<HTMLInputElement>, index: number): any;
};

function DemoEditRoutes({ routes, callback }: PropsType): JSX.Element {
  function handleChange(event: React.FormEvent<HTMLInputElement>, index: number): void {
    callback(event, index);
  }

  const lists = routes.map((route: Route, index: number) => {
    return (
      <li key={index}>
        <input
          style={demoEditRoute.input}
          defaultValue={route.title}
          onChange={event => handleChange(event, index + 1)}
        />
      </li>
    );
  });

  return (
    <ul style={demoEditRoute.ul}>
      <label style={{ ...demoEditRoute.label, backgroundColor: RouteConst.ROUTES_COLOR }}>
        ルート
      </label>
      {lists}
    </ul>
  );
}

export default DemoEditRoutes;
