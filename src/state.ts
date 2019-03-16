import { State } from './state.model';

const state: State = {
  departure: {
    title: '山王パークタワー',
    lat: 35.6731652,
    lng: 139.7407961,
    label: '発',
  },
  arival: {
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
  transport: 'car',
  expressway: 'no',
  traffic: 'standard',
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

export default state;
