import { Gross } from '../state.model';

/** Action型 */
export interface Action<T = any> {
  type: ActionType;
  payload?: T;
}

/** Actiion Type */
export enum ActionType {
  UPDATE_ROUTES_SORT,
  UPDATE_GROSS,
  UPDATE_ANSWER_DATA,
  UPDATE_ROUTES,
  UPDATE_QUESTION_OPTION,
  INITIALIZE_DEMO,
  UPDATE_QUESTION_STEP,
}

/** 答えのデータ */
export interface AnswerData {
  gross: Gross;
  waypointOrder: number[];
}

/** 移動手段フォームで選択肢た値 */
export interface SelectedOption {
  name: string;
  value: string;
}
