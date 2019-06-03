import React from 'react';

import * as RouteConst from '../../../constants/route';
import { demoEditRoute } from './demoEdit.style';

type PropsType = {
  label: string;
  title: string;
  index: number;
  callback(event: React.FormEvent<HTMLInputElement>, index: number): any;
};

function DemoEditDepartureArrival({ label, title, index, callback }: PropsType): JSX.Element {
  function handleChange(event: React.FormEvent<HTMLInputElement>): void {
    callback(event, index);
  }
  return (
    <>
      <label
        style={{ ...demoEditRoute.label, backgroundColor: RouteConst.DEPARTURE_ARRIVAL_COLOR }}>
        {label}
      </label>
      <ul style={demoEditRoute.ul}>
        <li>
          <input
            style={demoEditRoute.input}
            defaultValue={title}
            onChange={event => handleChange(event)}
          />
        </li>
      </ul>
    </>
  );
}

export default DemoEditDepartureArrival;
