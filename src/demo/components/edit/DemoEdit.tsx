import React, { useState, useEffect } from 'react';
import { State, Route, Step } from '../../../state.model';
import { Dispatches, RouteLabel } from '../../demo.model';
import { fetchLatLngFromGMaps } from '../../../utils/functions';
import * as RouteConst from '../../../constants/route';
import * as ButtonLabel from '../../../constants/button';

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

function DemoEdit(props: State & Dispatches): JSX.Element {
  const [departure, setDeparture] = useState(props.departure);
  const [arrival, setArrival] = useState(props.arrival);
  const [routes, setRoutes] = useState(props.routesCache);
  useEffect(() => {
    if (routes.length < RouteConst.ROUTE_MAX_LENGTH) {
      const addedRoutes: Route[] = Array(RouteConst.ROUTE_MAX_LENGTH - routes.length)
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
      case RouteLabel.Departure:
        if (target.value !== '') {
          setDeparture({ ...departure, title: target.value });
        }
        break;
      case RouteLabel.Arrival:
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
          label: RouteConst.ALPHABETS[i],
          sortId: 0,
        };
      });

    props.dispatchUpdateRoutes(newDeparture, newArrival, newRoutes);
    props.dispatchUpdateQuestionStep(Step.Initial);
  }

  return (
    <div style={style.demoEdit}>
      <DemoEditDepartureArrival
        label={RouteConst.DEPARTURE}
        title={departure.title}
        index={RouteLabel.Departure}
        callback={handleChange}
      />
      <DemoEditRoutes routes={routes} callback={handleChange} />
      <DemoEditDepartureArrival
        label={RouteConst.ARRIVAL}
        title={arrival.title}
        index={RouteLabel.Arrival}
        callback={handleChange}
      />
      <DemoButton
        callback={() => props.dispatchUpdateQuestionStep(Step.Initial)}
        isDisabled={false}
        label={ButtonLabel.CANCEL}
      />
      <DemoButton
        callback={handleClick}
        isDisabled={routes.length === 0}
        label={ButtonLabel.SET_ROUTES}
      />
    </div>
  );
}

export default DemoEdit;
