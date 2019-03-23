export interface State {
  /** 出発地点 */
  departure: Position;
  /** 到着地点 */
  arrival: Position;
  /** 中継地点 */
  routes: Route[];
  /** 中継地点キャッシュ */
  routesCache: Route[];
  /** クイズのステップ */
  questionStep: Step;
  /** 現在選択中の要素ID */
  currentSortId: number;
  /** 移動手段 */
  transport: Transport;
  /** 有料道路の使用 */
  expressway: Expressway;
  /** 交通量の見積もり */
  traffic: Traffic;
  /** 出発日時 */
  departureTime: Date;
  /** 回答の総距離 */
  gross: Gross;
  /** 正解の総距離 */
  answerGross: Gross;
  /** 正解の道順 */
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

/** クイズの各ステップ */
export enum Step {
  /** 初期状態 */
  Initial = 0,
  /** 初期表示後からルート選択までの状態 */
  Start = 1,
  /** ルートを編集中の状態 */
  Edit = 2,
  /** ルート選択中の状態 */
  Select = 3,
  /** ルート選択が終わった状態 */
  Over = 4,
  /** 正解を表示中の状態 */
  Answer = 5,
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
