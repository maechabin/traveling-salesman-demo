import states from '../state';
import { State, Traffic, Transport, Expressway } from '../state.model';
import { ActionType, Action } from './demoAction.model';

const initialState: State = { ...states };

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
      console.log(initialState);
      return {
        ...state,
        departure: {
          title: '山王パークタワー',
          lat: 35.6731652,
          lng: 139.7407961,
          label: '発',
        },
        arrival: {
          title: '六本木ヒルズ森タワー',
          lat: 35.6604638,
          lng: 139.72924869999997,
          label: '着',
        },
        routes: [
          {
            id: 1,
            title: 'Wコンフォートタワーズ EAST',
            lat: 35.6471312,
            lng: 139.80113460000007,
            label: 'A',
            sortId: 0,
          },
          {
            id: 2,
            title: 'セルリアンタワー',
            lat: 35.656325,
            lng: 139.699608,
            label: 'B',
            sortId: 0,
          },
          {
            id: 3,
            title: '新宿センタービル',
            lat: 35.6917502,
            lng: 139.6955153,
            label: 'C',
            sortId: 0,
          },
          {
            id: 4,
            title: 'JPタワー',
            lat: 35.679799,
            lng: 139.764545,
            label: 'D',
            sortId: 0,
          },
          {
            id: 5,
            title: '新宿パークタワー',
            lat: 35.68564,
            lng: 139.69094999999993,
            label: 'E',
            sortId: 0,
          },
          {
            id: 6,
            title: '住友不動産新宿グランドタワー',
            lat: 35.6957954,
            lng: 139.69038920000003,
            label: 'F',
            sortId: 0,
          },
          {
            id: 7,
            title: '勝どきビュータワー',
            lat: 35.6595554,
            lng: 139.77651500000002,
            label: 'G',
            sortId: 0,
          },
          {
            id: 8,
            title: 'サンシャイン６０',
            lat: 35.7291213,
            lng: 139.7191322,
            label: 'H',
            sortId: 0,
          },
        ],
        initialFlag: true,
        choosingRouteStartFlag: false,
        choosingRouteFinishFlag: false,
        viewAnswerFlag: false,
        currentSortId: 8, // routes（経路）の要素数を指定する
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
