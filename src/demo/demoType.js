import PropTypes from 'prop-types';

const demoState = {
  departure: PropTypes.shape({
    title: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    label: PropTypes.string,
  }),
  arival: PropTypes.shape({
    title: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    label: PropTypes.string,
  }),
  routes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    label: PropTypes.string,
    sortId: PropTypes.number,
  })),
  initialFlag: PropTypes.bool,
  choosingRouteStartFlag: PropTypes.bool,
  choosingRouteFinishFlag: PropTypes.bool,
  viewAnswerFlag: PropTypes.bool,
  currentSortId: PropTypes.number, // routes（経路）の要素数を指定する
  transport: PropTypes.string,
  expressway: PropTypes.string,
  traffic: PropTypes.string,
  gross: PropTypes.shape({
    distance: PropTypes.number, // 総距離
    duration: PropTypes.number, // 総時間
  }),
  answerGross: PropTypes.shape({
    distance: PropTypes.number, // 正解の総距離
    duration: PropTypes.number, // 正解の総時間
  }),
  answerWaypointOrder: PropTypes.arrayOf(PropTypes.number), // 正解の経路の表示順
};

export default demoState;
