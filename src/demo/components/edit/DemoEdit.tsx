import React, { useState, useEffect } from 'react';

import { State, Route, Position, Step } from '../../../state.model';
import { Dispatches, RouteLabel } from '../../demo.model';
import { fetchLatLng } from '../../../domains/map/fetchLatLng';
import * as Const from '../../../constants/index';
import DemoEditText from './DemoEditText';
import DemoEditDepartureArrival from './DemoEditDepartureArrival';
import DemoEditRoutes from './DemoEditRoutes';
import DemoButton from '../shared/DemoButton';
import { demoEdit } from './demoEdit.style';
import '../../styles/DemoEdit.css';

async function fetchAndMergeLatLng<T extends { title: string }>(route: T): Promise<T> {
  try {
    const latlng = await fetchLatLng(route.title);
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

/**
 * 出発地または到着地の状態を管理するカスタムフック
 * @param initialPosition 出発地または到着地の初期値
 */
function usePosition(
  initialPosition: Position,
): { position: Position; updateTitle: (title: string) => void; updateLatLng: () => Promise<void> } {
  const [position, setPosition] = useState(initialPosition);

  function updateTitle(title: string) {
    if (title !== '') {
      setPosition({ ...position, title: title.trim() });
    }
  }

  async function updateLatLng(): Promise<void> {
    if (initialPosition.title !== position.title) {
      const newPosition = await fetchAndMergeLatLng<Position>(position);
      setPosition(newPosition);
    }
  }

  return {
    position,
    updateTitle,
    updateLatLng,
  };
}

/**
 * DemoEditコンポーネント
 * @param props 全state & dispatch
 */
function DemoEdit(props: State & Dispatches): JSX.Element {
  const departure = usePosition(props.departure);
  const arrival = usePosition(props.arrival);

  const [routes, setRoutes] = useState(props.routesCache);
  useEffect(() => {
    if (routes.length < Const.ROUTE_MAX_LENGTH) {
      makeRoutesArrayToBeMaxLength(routes);
    }
  }, [routes]);

  function makeRoutesArrayToBeMaxLength(routes: Route[]): void {
    const addedRoutes: Route[] = Array(Const.ROUTE_MAX_LENGTH - routes.length)
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

  function handleChange(event: React.FormEvent<HTMLInputElement>, index: number): void {
    const target = event.currentTarget;
    switch (index) {
      case RouteLabel.Departure:
        departure.updateTitle(target.value);
        break;
      case RouteLabel.Arrival:
        arrival.updateTitle(target.value);
        break;
      default:
        const newRoutes = routes.map(
          (route: Route): Route => {
            if (route.id === index) {
              return {
                ...route,
                title: target.value.trim(),
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
    departure.updateLatLng();
    arrival.updateLatLng();

    const updatedLatLngRoutes = await Promise.all(
      routes.map(async (route: Route, i: number) => {
        if (
          route.title !== '' &&
          (props.routesCache[i] == null || route.title !== props.routesCache[i].title)
        ) {
          return await fetchAndMergeLatLng<Route>(route);
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
          label: Const.ALPHABETS[i],
          sortId: 0,
        };
      });

    props.dispatchUpdateRoutes(departure.position, arrival.position, newRoutes);
    props.dispatchUpdateQuestionStep(Step.Initial);
  }

  function getIsDisabled(): boolean {
    const havingTilteRoutes = routes.filter(route => {
      return route.title !== '';
    });
    return havingTilteRoutes.length < 2;
  }

  const isDisabled = getIsDisabled();

  return (
    <div style={demoEdit.wrapper}>
      <DemoEditText />
      <DemoEditDepartureArrival
        label={Const.DEPARTURE}
        title={departure.position.title}
        index={RouteLabel.Departure}
        callback={handleChange}
      />
      <DemoEditRoutes routes={routes} callback={handleChange} />
      <DemoEditDepartureArrival
        label={Const.ARRIVAL}
        title={arrival.position.title}
        index={RouteLabel.Arrival}
        callback={handleChange}
      />
      <div style={demoEdit.buttons}>
        <DemoButton
          callback={() => props.dispatchUpdateQuestionStep(Step.Start)}
          isDisabled={false}
          label={Const.CANCEL}
          classname={'DemoEditButton'}
        />
        <DemoButton
          callback={handleClick}
          isDisabled={isDisabled || props.questionStep !== Step.Edit}
          label={Const.SET_ROUTES}
          classname={'DemoEditButton'}
        />
      </div>
    </div>
  );
}

export default DemoEdit;
