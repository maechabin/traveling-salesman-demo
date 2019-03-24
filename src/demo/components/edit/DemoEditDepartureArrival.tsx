import React from 'react';
import * as RouteConst from '../../../constants/route';

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
