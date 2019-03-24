import React, { useState, useEffect, useCallback } from 'react';
import { State, Route, Position, Step } from '../../../state.model';
import { Dispatches } from '../../demo.model';
import { fetchLatLngFromGMaps } from '../../../utils/functions';
import { ALPHABETS, ROUTE_MAX_LENGTH } from '../../../utils/constants';

import DemoButton from '../common/DemoButton';

const style = {
  demoEdit: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  } as React.CSSProperties,
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

enum Index {
  Departure = 0,
  Arrival = 9,
}

function DemoEdit(props: State & Dispatches): JSX.Element {
  const [departure, setDeparture] = useState(props.departure);
  const [arrival, setArrival] = useState(props.arrival);
  const [routes, setRoutes] = useState(props.routesCache);
  useEffect(() => {
    if (routes.length < ROUTE_MAX_LENGTH) {
      const addedRoutes: Route[] = Array(ROUTE_MAX_LENGTH - routes.length)
        .fill([])
        .map(
          (_, i: number): Route => ({
            id: routes.length + 1 + i,
            title: '',
            lat: NaN,
            lng: NaN,
            label: '',
            sortId: 0,
          }),
        );
      setRoutes([...routes, ...addedRoutes]);
    }
  }, [routes]);

  function handleChange(event: React.FormEvent<HTMLInputElement>, index: number): void {
    const target = event.currentTarget;
    switch (index) {
      case Index.Departure:
        if (target.value !== '') {
          setDeparture({ ...departure, title: target.value });
        }
        break;
      case Index.Arrival:
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

  const callback = useCallback(() => {}, []);

  async function handleClick(): Promise<void> {
    let newDeparture = departure;
    if (props.departure.title !== departure.title) {
      const departureLatlng = await fetchLatLngFromGMaps(departure.title);
      newDeparture = {
        ...departure,
        ...departureLatlng,
      };
    }

    let newArrival = arrival;
    if (props.arrival.title !== arrival.title) {
      const arrivalLatlng = await fetchLatLngFromGMaps(arrival.title);
      newArrival = {
        ...arrival,
        ...arrivalLatlng,
      };
    }

    const updatedLatLngRoutes = await Promise.all(
      routes.map(async (route: Route, i: number) => {
        if (
          route.title !== '' &&
          (props.routesCache[i] == null || route.title !== props.routesCache[i].title)
        ) {
          try {
            const latlng = await fetchLatLngFromGMaps(route.title);
            return {
              ...route,
              ...latlng,
            };
          } catch (e) {
            console.error(e);
            return {
              ...route,
              title: '',
            };
          }
        }
        return route;
      }),
    );

    const newRoutes = updatedLatLngRoutes
      .filter((route: Route) => {
        return route.title === '' ? false : true;
      })
      .map((route: Route, i: number) => {
        return {
          ...route,
          id: i + 1,
          label: ALPHABETS[i],
          sortId: 0,
        };
      });

    props.dispatchUpdateRoutes(newDeparture, newArrival, newRoutes);
    props.dispatchUpdateQuestionStep(Step.Initial);
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
    <div style={style.demoEdit}>
      <label style={{ ...style.label, backgroundColor: '#f75c50' }}>出発地</label>
      <ul style={style.ul}>
        <li>
          <input
            style={style.input}
            defaultValue={props.departure.title}
            onChange={event => handleChange(event, Index.Departure)}
          />
        </li>
      </ul>
      <ul style={style.ul}>
        <label style={{ ...style.label, backgroundColor: '#7fbc39' }}>ルート</label>
        {lists}
      </ul>
      <ul style={style.ul}>
        <label style={{ ...style.label, backgroundColor: '#f75c50' }}>到着地</label>
        <li>
          <input
            style={style.input}
            defaultValue={props.arrival.title}
            onChange={event => handleChange(event, Index.Arrival)}
          />
        </li>
      </ul>
      <DemoButton
        callback={() => props.dispatchUpdateQuestionStep(Step.Initial)}
        isDisabled={false}
        label={'キャンセル'}
      />
      <DemoButton callback={handleClick} isDisabled={routes.length === 0} label={'設定する'} />
    </div>
  );
}

export default DemoEdit;
