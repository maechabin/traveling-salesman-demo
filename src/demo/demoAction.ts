import { Gross, Position, Route, Step } from '../state.model';
import { Action, ActionType, AnswerData, SelectedOption } from './demoAction.model';

/**
 * 経路リストを並び替える
 * @param payload 道順番号
 */
export function updateRoutesSort(payload: number): Action<number> {
  return {
    type: ActionType.UPDATE_ROUTES_SORT,
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
export function updateQuestionOption(payload: SelectedOption): Action<SelectedOption> {
  return {
    type: ActionType.UPDATE_QUESTION_OPTION,
    payload,
  };
}

/**
 * デモをリセットする
 */
export function initializeDemo(): Action<never> {
  return {
    type: ActionType.INITIALIZE_DEMO,
  };
}

/**
 * クイズのステップを変更する
 * @param payload ステップ名
 */
export function updateQuestionStep(payload: Step): Action<Step> {
  return {
    type: ActionType.UPDATE_QUESTION_STEP,
    payload,
  };
}
