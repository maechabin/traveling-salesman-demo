import React, { useState, useEffect } from 'react';
import { State, Route, Step } from '../../../state.model';
import { Dispatches } from '../../demo.model';
import { fetchLatLngFromGMaps } from '../../../utils/functions';
import { ALPHABETS, ROUTE_MAX_LENGTH } from '../../../utils/constants';

import DemoEditDepartureArrival from './DemoEditDepartureArrival';
import DemoEditRoutes from './DemoEditRoutes';
import DemoButton from '../common/DemoButton';

const style = {
  demoEdit: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
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

  return (
    <div style={style.demoEdit}>
      <DemoEditDepartureArrival
        label={'出発地'}
        title={departure.title}
        index={0}
        callback={handleChange}
      />
      <DemoEditRoutes routes={routes} callback={handleChange} />
      <DemoEditDepartureArrival
        label={'到着地'}
        title={arrival.title}
        index={9}
        callback={handleChange}
      />
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
