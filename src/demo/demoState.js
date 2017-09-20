const demoState = {
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
    distance: 0, // 総距離
    duration: 0, // 総時間
  },
  answerGross: {
    distance: 0, // 正解の総距離
    duration: 0, // 正解の総時間
  },
  answerWaypointOrder: [], // 正解の経路の表示順
};

export default demoState;
