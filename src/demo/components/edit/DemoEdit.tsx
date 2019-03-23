import React, { useState, useEffect, useCallback } from 'react';
import { State, Route, Position, Step } from '../../../state.model';
import { Dispatches } from '../../demo.model';
import { fetchLatLng } from '../../../utils/functions';

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

function DemoEdit(props: State & Dispatches): JSX.Element {
  const ALPHABETS: string[] = 'ABCDEFGH'.split('');
  const ROUTE_LENGTH: number = 8;
  const [departure, setDeparture] = useState(props.departure);
  const [arrival, setArrival] = useState(props.arrival);
  const [routes, setRoutes] = useState([...props.routesCache]);
  useEffect(() => {
    if (routes.length < ROUTE_LENGTH) {
      const addedRoutes: Route[] = Array(ROUTE_LENGTH - routes.length)
        .fill([])
        .map(
          (_, i): Route => ({
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
  }, []);

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

  const callback = useCallback((event: React.FormEvent<HTMLInputElement>, index: number) => {
    const target = event.currentTarget;
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
    setRoutes(prevState => {
      return newRoutes;
    });
  }, []);

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
      routes
        .filter((route: Route) => {
          return route.title === '' ? false : true;
        })
        .map(async (route: Route, i: number) => {
          if (props.routesCache[i].title !== route.title) {
            const latlng = await fetchLatLng(route.title);
            return {
              ...route,
              id: i + 1,
              lat: latlng.lat,
              lng: latlng.lng,
              label: ALPHABETS[i],
              sortId: 0,
            };
          }
          return { ...route, id: i + 1, label: ALPHABETS[i], sortId: 0 };
        }),
    );

    props.handleUpdateRoutes(newDeparture, newArrival, newRoutes);
    props.handleChangeQuestionStep(Step.Initial);
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
            onChange={event => handleChange(event, 0)}
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
            onChange={event => handleChange(event, 9)}
          />
        </li>
      </ul>
      <button onClick={handleClick}>設定する</button>
    </div>
  );
}

export default DemoEdit;
