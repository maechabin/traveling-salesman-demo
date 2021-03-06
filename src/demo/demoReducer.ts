import { state as demoState } from '../state';
import { State, Step, Route, Traffic, Transport, Expressway } from '../state.model';
import { ActionType, Action } from './demoAction.model';
import { copyArrayWithObject } from '../utils/array';

const initialState: State = { ...demoState };

const demoReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.UPDATE_ROUTES_SORT: {
      const routeList = state.routes.map(route => {
        const newRoute = route;
        if (newRoute.id === action.payload) {
          newRoute.sortId = state.currentSortId;
        }
        return newRoute;
      });
      return {
        ...state,
        routes: routeList,
        currentSortId: state.currentSortId - 1,
      };
    }
    case ActionType.UPDATE_GROSS:
      return {
        ...state,
        gross: action.payload,
      };
    case ActionType.UPDATE_ANSWER_DATA:
      return {
        ...state,
        answerGross: action.payload.gross,
        answerWaypointOrder: action.payload.waypointOrder,
      };
    case ActionType.UPDATE_ROUTES:
      return {
        ...state,
        departure: JSON.parse(JSON.stringify(action.payload.departure)),
        arrival: JSON.parse(JSON.stringify(action.payload.arrival)),
        routes: action.payload.routes,
        routesCache: copyArrayWithObject<Route>(action.payload.routes),
        currentSortId: action.payload.routes.length,
      };
    case ActionType.UPDATE_QUESTION_STEP:
      return {
        ...state,
        questionStep: action.payload,
      };
    case ActionType.UPDATE_QUESTION_OPTION:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ActionType.INITIALIZE_DEMO:
      return {
        ...state,
        departure: JSON.parse(JSON.stringify(state.departure)),
        arrival: JSON.parse(JSON.stringify(state.arrival)),
        routes: copyArrayWithObject<Route>(state.routesCache),
        questionStep: Step.Initial,
        currentSortId: state.routesCache.length, // routes（経路）の要素数を指定する
        transport: Transport.Car,
        expressway: Expressway.No,
        traffic: Traffic.Standard,
        departureTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
        gross: {
          distance: 0, // 総距離
          duration: 0, // 総時間
        },
        answerGross: {
          distance: 0, // 正解の総距離
          duration: 0, // 正解の総時間
        },
        answerWaypointOrder: [], // 正解の経路の表示順
      };
    default:
      return state;
  }
};

export default demoReducer;
