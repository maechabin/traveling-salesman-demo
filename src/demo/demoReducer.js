import demoState from './demoState';
import {
  SORT_LIST,
  UPDATE_GROSS,
  UPDATE_ANSWER_DATA,
  DISABLED_CHOOSE_OPTIONS,
  CHANGE_FORM_VALUE,
  RESET_DEMO,
  CHANGE_INITFLAG_TO_FALSE,
  CHANGE_VIEWANSWERFLAG_TO_TRUE,
  CHANGE_CHOOSINGROUTE_FINISHFLAG_TO_TURE,
} from './demoAction';

const initialState = demoState;

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_LIST: {
      const routeList = state.routes.map((route) => {
        const newRoute = route;
        if (newRoute.id === action.payload) {
          newRoute.sortId = state.currentSortId;
        }
        return newRoute;
      });
      return Object.assign({}, state, {
        routes: routeList,
        currentSortId: state.currentSortId - 1,
      });
    }
    case UPDATE_GROSS:
      return Object.assign({}, state, {
        gross: action.payload,
      });
    case UPDATE_ANSWER_DATA:
      return Object.assign({}, state, {
        answerGross: action.payload.gross,
        answerWaypointOrder: action.payload.waypointOrder,
      });
    case DISABLED_CHOOSE_OPTIONS:
      return Object.assign({}, state, {
        choosingRouteStartFlag: true,
      });
    case CHANGE_FORM_VALUE:
      return Object.assign({}, state, {
        [action.payload.name]: action.payload.value,
      });
    case RESET_DEMO:
      return Object.assign({}, state, {
        departure: { title: '根津神社', lat: 35.7202332, lng: 139.76073810000003, label: '発' },
        arival: { title: '勝どき駅', lat: 35.6589788, lng: 139.77714949999995, label: '着' },
        routes: [
          { id: 1, title: '秋葉原駅', lat: 35.698353, lng: 139.77311429999997, label: 'A', sortId: 0 },
          { id: 2, title: '文京区役所', lat: 35.7080677, lng: 139.752167, label: 'B', sortId: 0 },
          { id: 3, title: '明治大学', lat: 35.6972422, lng: 139.7615346, label: 'C', sortId: 0 },
          { id: 4, title: '浜離宮', lat: 35.6597374, lng: 139.76349249999998, label: 'D', sortId: 0 },
          { id: 5, title: '国会議事堂', lat: 35.675888, lng: 139.74485800000002, label: 'E', sortId: 0 },
          { id: 6, title: '東京タワー', lat: 35.6585805, lng: 139.745432899999977, label: 'F', sortId: 0 },
          { id: 7, title: '上野動物園', lat: 35.7164535, lng: 139.77131770000005, label: 'G', sortId: 0 },
          { id: 8, title: '東京駅', lat: 35.6811673, lng: 139.76705160000006, label: 'H', sortId: 0 },
        ],
        initialFlag: true,
        choosingRouteStartFlag: false,
        choosingRouteFinishFlag: false,
        viewAnswerFlag: false,
        currentSortId: 8, // routes（経路）の要素数を指定する
        transport: 'car',
        expressway: 'no',
        traffic: 'standard',
        gross: {
          distance: 0,
          duration: 0,
        },
        answerGross: {
          distance: 0, // 正解の総距離
          duration: 0, // 正解の総時間
        },
        answerWaypointOrder: [], // 正解の経路の表示順
      });
    case CHANGE_INITFLAG_TO_FALSE:
      return Object.assign({}, state, {
        initialFlag: false,
      });
    case CHANGE_VIEWANSWERFLAG_TO_TRUE:
      return Object.assign({}, state, {
        viewAnswerFlag: true,
      });
    case CHANGE_CHOOSINGROUTE_FINISHFLAG_TO_TURE:
      return Object.assign({}, state, {
        choosingRouteFinishFlag: true,
      });
    default:
      return state;
  }
};

export default demoReducer;
