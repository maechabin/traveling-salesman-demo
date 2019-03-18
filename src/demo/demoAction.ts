import { Gross } from '../state.model';
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
 * マーカー選択中としてフラグを更新する
 */
export function disabledChooseOptions(): Action<never> {
  return {
    type: ActionType.DISABLED_CHOOSE_OPTIONS,
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
 * 初期状態フラグをfalseに変更する
 */
export function changeInitflagToFalse(): Action<never> {
  return {
    type: ActionType.CHANGE_INITFLAG_TO_FALSE,
  };
}

/**
 * 回答画面表示フラグをtrueにする
 */
export function changeisAnswerSideToTrue(): Action<never> {
  return {
    type: ActionType.CHANGE_isAnswerSide_TO_TRUE,
  };
}

/**
 * ルート選択可能フラグをtrueにする
 */
export function changeisOverToTure(): Action<never> {
  return {
    type: ActionType.CHANGE_CHOOSINGROUTE_FINISHFLAG_TO_TURE,
  };
}
