import React from 'react';
import * as RouteConst from '../../../constants/route';

import { style } from './demoEdit.style';

type PropsTypes = {
  label: string;
  title: string;
  index: number;
  callback(event: React.FormEvent<HTMLInputElement>, index: number): any;
};

function DemoEditDepartureArrival({ label, title, index, callback }: PropsTypes): JSX.Element {
  function handleChange(event: React.FormEvent<HTMLInputElement>): void {
    callback(event, index);
  }
  return (
    <>
      <label style={{ ...style.label, backgroundColor: RouteConst.DEPARTURE_ARRIVAL_COLOR }}>
        {label}
      </label>
      <ul style={style.ul}>
        <li>
          <input style={style.input} defaultValue={title} onChange={event => handleChange(event)} />
        </li>
      </ul>
    </>
  );
}

export default DemoEditDepartureArrival;
