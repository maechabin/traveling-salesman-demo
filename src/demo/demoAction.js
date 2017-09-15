// 経路リストを並び替える
// DemoQuestionListMapでマーカークリック時に呼び出される
export const SORT_LIST = 'SORT_LIST';
export function sortList(payload) {
  return {
    type: SORT_LIST,
    payload,
  };
}

// マーカー選択中としてフラグを更新
// DemoQuestionListMapでマーカークリック時に呼び出される
export const DISABLED_CHOOSE_OPTIONS = 'DISABLED_CHOOSE_OPTIONS';
export function disabledChooseOptions() {
  return {
    type: DISABLED_CHOOSE_OPTIONS,
  };
}

// 総距離、総時間を更新
// DemoQuestionListMapでマーカークリック時に呼び出される
export const UPDATE_GROSS = 'UPDATE_GROSS';
export function updateGross(payload) {
  return {
    type: UPDATE_GROSS,
    payload,
  };
}

export const UPDATE_ANSWER_GROSS = 'UPDATE_ANSWER_GROSS';
export function updateAnswerGross(payload) {
  return {
    type: UPDATE_ANSWER_GROSS,
    payload,
  };
}

// DemoQuestionListFormで呼び出される
export const CHANGE_FORM_VALUE = 'CHANGE_FORM_VALUE';
export function changeFormValue(payload) {
  return {
    type: CHANGE_FORM_VALUE,
    payload,
  };
}

export const RESET_DEMO = 'RESET_DEMO';
export function resetDemo() {
  return {
    type: RESET_DEMO,
  };
}

export const CHANGE_INITFLAG_TO_FALSE = 'CHANGE_INITFLAG_TO_FALSE';
export function changeInitflagToFalse() {
  return {
    type: CHANGE_INITFLAG_TO_FALSE,
  };
}

export const CHANGE_VIEWANSWERFLAG_TO_TRUE = 'CHANGE_VIEWANSWERFLAG_TO_TRUE';
export function changeViewanswerflagToTrue() {
  return {
    type: CHANGE_VIEWANSWERFLAG_TO_TRUE,
  };
}

export const CHANGE_CHOOSINGROUTE_FINISHFLAG_TO_TURE = 'CHANGE_CHOOSINGROUTE_FINISHFLAG_TO_TURE';
export function changeChoosingrouteFinishflagToTure() {
  return {
    type: CHANGE_CHOOSINGROUTE_FINISHFLAG_TO_TURE,
  };
}
