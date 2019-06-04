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

/**
 * 位置情報を取得＆マージして返す
 * @param route
 */
async function fetchAndMergeLatLng<T extends { title: string }>(route: T): Promise<T | null> {
  try {
    const latlng = await fetchLatLng(route.title);
    return { ...route, ...latlng };
  } catch (error) {
    return null;
  }
}

/**
 * 出発地または到着地の状態を管理するカスタムフック
 * @param initialPosition 出発地または到着地の初期値
 */
function usePosition(
  initialPosition: Position,
): {
  position: Position;
  updateTitle: (title: string) => void;
  updateLatLng: () => Promise<void>;
} {
  const [position, setPosition] = useState(initialPosition);

  /**
   * 出発地名/到着地名を更新する
   * @param title 出発地名/到着地名
   */
  function updateTitle(title: string): void {
    if (title !== '') {
      setPosition({ ...position, title: title.trim() });
    }
  }

  /**
   * 出発地/到着地の位置情報を更新する
   */
  async function updateLatLng(): Promise<void> {
    if (initialPosition.title !== position.title) {
      const newPosition = await fetchAndMergeLatLng<Position>(position);
      if (newPosition) {
        setPosition({ ...newPosition });
      } else {
        setPosition({ ...initialPosition });
      }
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
    let newRoutes: Route[] = [];
    switch (index) {
      case RouteLabel.Departure:
        departure.updateTitle(target.value);
        break;
      case RouteLabel.Arrival:
        arrival.updateTitle(target.value);
        break;
      default:
        newRoutes = routes.map(
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

  /** 設定するボタンの状態 */
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (isClicked) {
      /** タイトルのない中継地点を取り除く */
      const newRoutes = routes
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
  }, [isClicked]);

  async function handleClick(): Promise<void> {
    /** 出発地の位置情報を更新 */
    await departure.updateLatLng();

    /** 到着地の位置情報を更新 */
    await arrival.updateLatLng();

    /** 中継地点の位置情報を更新 */
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

    const filteredRoutes = updatedLatLngRoutes.filter(route => route != null);

    setRoutes(filteredRoutes as any);
    setIsClicked(true);
  }

  /** ボタンが押せないか取得する */
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
