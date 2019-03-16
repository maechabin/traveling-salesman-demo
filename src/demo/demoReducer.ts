import state from '../state';
import { State } from '../state.model';
import { ActionType, Action } from './demoAction.model';

const initialState: State = state;

const demoReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SORT_LIST: {
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
    case ActionType.DISABLED_CHOOSE_OPTIONS:
      return {
        ...state,
        choosingRouteStartFlag: true,
      };
    case ActionType.CHANGE_FORM_VALUE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ActionType.RESET_DEMO:
      return {
        ...state,
      };
    case ActionType.CHANGE_INITFLAG_TO_FALSE:
      return {
        ...state,
        initialFlag: false,
      };
    case ActionType.CHANGE_VIEWANSWERFLAG_TO_TRUE:
      return {
        ...state,
        viewAnswerFlag: true,
      };
    case ActionType.CHANGE_CHOOSINGROUTE_FINISHFLAG_TO_TURE:
      return {
        ...state,
        choosingRouteFinishFlag: true,
      };
    default:
      return state;
  }
};

export default demoReducer;
