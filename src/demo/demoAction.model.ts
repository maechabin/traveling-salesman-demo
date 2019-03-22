import { Gross } from '../state.model';

/** Action型 */
export interface Action<T = any> {
  type: ActionType;
  payload?: T;
}

/** Actiion Type */
export enum ActionType {
  SORT_LIST,
  UPDATE_GROSS,
  UPDATE_ANSWER_DATA,
  UPDATE_DEPARTURE,
  UPDATE_ARRIVAL,
  UPDATE_ROUTES,
  CHANGE_FORM_VALUE,
  RESET_DEMO,
  CHANGE_QUESTION_STEP,
}

/** 答えのデータ */
export interface AnswerData {
  gross: Gross;
  waypointOrder: number[];
}

/** 移動手段フォームで選択肢た値 */
export interface SelectedFormValue {
  name: string;
  value: string;
}
