import React, { useState, useEffect, useCallback } from 'react';
import { State, Route, Step } from '../../../state.model';
import { Dispatches } from '../../demo.model';

async function fetchLatLng(address: string): Promise<{ lat: number; lng: number }> {
  const res = await fetch(
    `https://us-central1-maps-functions-6b26b.cloudfunctions.net/geocoding?address=${address}`,
  );
  const latlng = await res.json();
  return latlng.results[0].geometry.location;
}

function DemoEdit(props: State & Dispatches): JSX.Element {
  const [departure, setDeparture] = useState(props.departureCache);
  const [arrival, setArrival] = useState(props.arrivalCache);
  const [routes, setRoutes] = useState([...props.routesCache]);

  const style = {
    demoEdit: {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    } as React.CSSProperties,
  };

  const lists = routes.map((route: Route, index: number) => {
    return (
      <li>
        <input defaultValue={route.title} onChange={event => handleChange(event, index)} />
      </li>
    );
  });

  function handleChange(event: React.FormEvent<HTMLInputElement>, index: number): void {
    const target = event.currentTarget;
    const newRoutes = routes.map(
      (route: Route): Route => {
        if (route.id - 1 === index) {
          return {
            ...route,
            title: target.value,
            sortId: 0,
          };
        }
        return { ...route, sortId: 0 };
      },
    );
    setRoutes(newRoutes);
  }

  const callback = useCallback((route: Route) => {}, routes);

  async function handleClick() {
    const newRoutes = await Promise.all(
      routes.map(async (route: Route, i: number) => {
        if (props.routes[i].title !== route.title) {
          const latlng = await fetchLatLng(route.title);
          return { ...route, lat: latlng.lat, lng: latlng.lng };
        }
        return route;
      }),
    );
    props.handleUpdateRoutes(newRoutes);
    props.handleChangeQuestionStep(Step.Initial);
  }

  return (
    <div style={style.demoEdit}>
      <ul>
        <li>
          <input defaultValue={props.departure.title} onChange={event => handleChange(event, 1)} />
        </li>
        {lists}
        <li>
          <input defaultValue={props.arrival.title} onChange={event => handleChange(event, 1)} />
        </li>
      </ul>
      <button onClick={handleClick}>設定する</button>
    </div>
  );
}

export default DemoEdit;
