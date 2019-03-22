import { Gross, Position, Route, Step } from '../state.model';
import { Action, ActionType, AnswerData, SelectedFormValue } from './demoAction.model';

/**
 * 経路リストを並び替える
 * @param payload 道順番号
 */
export function sortList(payload: number): Action<number> {
  return {
    type: ActionType.SORT_LIST,
    payload,
  };
}

/**
 * 総距離/総時間の合計を更新する
 * @param payload 総距離/総時間の合計
 */
export function updateGross(payload: Gross): Action<Gross> {
  return {
    type: ActionType.UPDATE_GROSS,
    payload,
  };
}

/**
 * 答えの総距離/総時間を更新する
 * @param payload
 */
export function updateAnswerData(payload: AnswerData): Action<AnswerData> {
  return {
    type: ActionType.UPDATE_ANSWER_DATA,
    payload,
  };
}

/**
 * 出発地を更新する
 * @param payload 出発地
 */
export function updateDeparture(payload: Position): Action<Position> {
  return {
    type: ActionType.UPDATE_DEPARTURE,
    payload,
  };
}

/**
 * 到着地を更新する
 * @param payload 到着地
 */
export function updateArrival(payload: Position): Action<Position> {
  return {
    type: ActionType.UPDATE_ARRIVAL,
    payload,
  };
}

/**
 * 中継地を更新する
 * @param payload 中継地
 */
export function updateRoutes(payload: {
  departure: Position;
  arrival: Position;
  routes: Route[];
}): Action<{
  departure: Position;
  arrival: Position;
  routes: Route[];
}> {
  return {
    type: ActionType.UPDATE_ROUTES,
    payload,
  };
}

/**
 * 移動手段フォームでの選択状態を変更する
 * @param payload
 */
export function changeFormValue(payload: SelectedFormValue): Action<SelectedFormValue> {
  return {
    type: ActionType.CHANGE_FORM_VALUE,
    payload,
  };
}

/**
 * デモをリセットする
 */
export function resetDemo(): Action<never> {
  return {
    type: ActionType.RESET_DEMO,
  };
}

/**
 * クイズのステップを変更する
 * @param payload ステップ名
 */
export function changeQuestionStep(payload: Step): Action<Step> {
  return {
    type: ActionType.CHANGE_QUESTION_STEP,
    payload,
  };
}
