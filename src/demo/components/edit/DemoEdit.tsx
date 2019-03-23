import React, { useState, useEffect, useCallback } from 'react';
import { State, Route, Position, Step } from '../../../state.model';
import { Dispatches } from '../../demo.model';
import { fetchLatLng } from '../../../utils/functions';

function DemoEdit(props: State & Dispatches): JSX.Element {
  const [departure, setDeparture] = useState(props.departure);
  const [arrival, setArrival] = useState(props.arrival);
  const [routes, setRoutes] = useState([...props.routesCache]);

  const style = {
    demoEdit: {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    } as React.CSSProperties,
  };

  function handleChange(event: React.FormEvent<HTMLInputElement>, index: number): void {
    const target = event.currentTarget;
    switch (index) {
      case 0:
        if (target.value !== '') {
          setDeparture({ ...departure, title: target.value });
        }
        break;
      case 9:
        if (target.value !== '') {
          setArrival({ ...arrival, title: target.value });
        }
        break;
      default:
        const newRoutes = routes.map(
          (route: Route): Route => {
            if (route.id === index) {
              return {
                ...route,
                title: target.value,
              };
            }
            return route;
          },
        );
        setRoutes(newRoutes);
        break;
    }
  }

  const callback = useCallback((position: Position) => {}, []);

  async function handleClick() {
    let newDeparture = departure;
    if (props.departure.title !== departure.title) {
      const departureLatlng = await fetchLatLng(departure.title);
      newDeparture = {
        ...departure,
        ...departureLatlng,
      };
    }

    let newArrival = arrival;
    if (props.arrival.title !== arrival.title) {
      const arrivalLatlng = await fetchLatLng(arrival.title);
      newArrival = {
        ...arrival,
        ...arrivalLatlng,
      };
    }

    const newRoutes = await Promise.all(
      routes.map(async (route: Route, i: number) => {
        if (props.routesCache[i].title !== route.title) {
          const latlng = await fetchLatLng(route.title);
          return { ...route, lat: latlng.lat, lng: latlng.lng, sortId: 0 };
        }
        return { ...route, sortId: 0 };
      }),
    );

    props.handleUpdateRoutes(newDeparture, newArrival, newRoutes);
    props.handleChangeQuestionStep(Step.Initial);
  }

  const lists = routes.map((route: Route, index: number) => {
    return (
      <li key={route.title}>
        <input defaultValue={route.title} onChange={event => handleChange(event, index + 1)} />
      </li>
    );
  });

  return (
    <div style={style.demoEdit}>
      <ul>
        <li>
          <input defaultValue={props.departure.title} onChange={event => handleChange(event, 0)} />
        </li>
        {lists}
        <li>
          <input defaultValue={props.arrival.title} onChange={event => handleChange(event, 9)} />
        </li>
      </ul>
      <button onClick={handleClick}>設定する</button>
    </div>
  );
}

export default DemoEdit;
