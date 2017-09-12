const demoState = {
  departure: { title: '根津神社', lat: 35.7202332, lng: 139.76073810000003, label: '出発地' },
  arival: { title: '勝どき駅', lat: 35.6589788, lng: 139.77714949999995, label: '到着地' },
  routes: [
    { id: 1, title: '秋葉原駅', lat: 35.698353, lng: 139.77311429999997, label: '経路A', sortId: 0 },
    { id: 2, title: '文京区役所', lat: 35.7080677, lng: 139.752167, label: '経路B', sortId: 0 },
    { id: 3, title: '明治大学', lat: 35.6972422, lng: 139.7615346, label: '経路C', sortId: 0 },
    { id: 4, title: '浜離宮', lat: 35.6597374, lng: 139.76349249999998, label: '経路D', sortId: 0 },
    { id: 5, title: '国会議事堂', lat: 35.675888, lng: 139.74485800000002, label: '経路E', sortId: 0 },
  ],
  currentSortId: 5,
  transport: 'car',
  expressway: false,
  traffic: 'standard',
};

export default demoState;
