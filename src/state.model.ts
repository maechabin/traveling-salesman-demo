import { number } from 'prop-types';

export interface State {
  /** 出発地点 */
  departure: Position;
  /** 到着地点 */
  arrival: Position;
  /** 中継地点 */
  routes: Route[];
  initialFlag: boolean;
  choosingRouteStartFlag: boolean;
  choosingRouteFinishFlag: boolean;
  viewAnswerFlag: boolean;
  currentSortId: number; // routes（経路）の要素数を指定する
  /** 移動手段 */
  transport: Transport;
  expressway: Expressway;
  traffic: Traffic;
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

/** 移動手段 */
export enum Transport {
  Car = 'car',
  Walk = 'walk',
}

/** 有料道路 */
export enum Expressway {
  Yes = 'yes',
  No = 'no',
}

/** 交通量 */
export enum Traffic {
  Standard = 'standard',
  Bestguess = 'bestguess',
  Optimistic = 'optimistic',
  Pessimistic = 'pessimistic',
}
