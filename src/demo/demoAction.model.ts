import { Gross } from '../state.model';

/** Action型 */
export interface Action<T = any> {
  type: ActionType;
  payload?: T;
}

/** Actiion Type */
export enum ActionType {
  SORT_LIST,
  DISABLED_CHOOSE_OPTIONS,
  UPDATE_GROSS,
  UPDATE_ANSWER_DATA,
  CHANGE_FORM_VALUE,
  RESET_DEMO,
  CHANGE_INITFLAG_TO_FALSE,
  CHANGE_VIEWANSWERFLAG_TO_TRUE,
  CHANGE_CHOOSINGROUTE_FINISHFLAG_TO_TURE,
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
