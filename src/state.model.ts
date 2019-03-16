import { number } from 'prop-types';

export interface State {
  /** 出発地点 */
  departure: Position;
  /** 到着地点 */
  arival: Position;
  /** 中継地点 */
  routes: Route[];
  initialFlag: boolean;
  choosingRouteStartFlag: boolean;
  choosingRouteFinishFlag: boolean;
  viewAnswerFlag: boolean;
  currentSortId: number; // routes（経路）の要素数を指定する
  transport: string;
  expressway: string;
  traffic: string;
  departureTime: Date;
  /** 回答の総距離 */
  gross: Gross;
  /** 正解の総距離 */
  answerGross: Gross;
  answerWaypointOrder: number[];
}

/** 出発/到着地点 */
export interface Position {
  title: string;
  lat: number;
  lng: number;
  label: '発' | '着';
}

/** 中継地点 */
export interface Route {
  id: number;
  title: string;
  lat: number;
  lng: number;
  label: string;
  sortId: number;
}

/** 総距離/総時間の合計 */
export interface Gross {
  distance: number;
  duration: number;
}
