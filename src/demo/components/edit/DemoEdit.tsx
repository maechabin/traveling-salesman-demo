import React, { useState, useEffect } from 'react';
import { State, Route } from '../../../state.model';
import { Dispatches } from '../../demo.model';

enum ActionType {
  Route,
}

function reducer(state: Route, action: { type: ActionType; payload?: any }) {
  switch (action.type) {
    case ActionType.Route:
      return state;
    default:
      return state;
  }
}

async function fetchLatLng(address: string) {
  const latlng = await fetch('');
}

function DemoEdit(props: State & Dispatches): JSX.Element {
  const [departure, setDeparture] = useState(props.departure);
  const [arrival, setArrival] = useState(props.arrival);
  const [route, setRoute] = useState(props.routes);

  const r = [...route];

  const style = {
    demoEdit: {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    } as React.CSSProperties,
  };

  const routes = props.routes.map((route: Route, index: number) => {
    return (
      <li>
        <input
          defaultValue={route.title}
          className={route.id.toString()}
          id={index.toString()}
          onChange={handleChange}
        />
      </li>
    );
  });

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    const a = route.map(r => {
      if (r.id - 1 === Number(event.currentTarget.id)) {
        return { ...r, title: event.currentTarget.value };
      }
      return r;
    });
    setRoute(a);
  }

  function handleClick() {}

  return (
    <div style={style.demoEdit}>
      <ul>
        <li>
          <input defaultValue={props.departure.title} onChange={handleChange} />
        </li>
        {routes}
        <li>
          <input defaultValue={props.arrival.title} onChange={handleChange} />
        </li>
      </ul>
      <button onClick={handleClick}>設定する</button>
    </div>
  );
}

export default DemoEdit;
