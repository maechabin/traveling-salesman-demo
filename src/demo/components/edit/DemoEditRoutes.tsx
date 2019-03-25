import React from 'react';
import { Route } from '../../../state.model';
import * as RouteConst from '../../../constants/route';

import { demoEditRoute } from './demoEditStyle';

type PropsTypes = {
  routes: Route[];
  callback(event: React.FormEvent<HTMLInputElement>, index: number): any;
};

function DemoEditRoutes({ routes, callback }: PropsTypes): JSX.Element {
  function handleChange(event: React.FormEvent<HTMLInputElement>, index: number): void {
    callback(event, index);
  }

  const lists = routes.map((route: Route, index: number) => {
    return (
      <li>
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
