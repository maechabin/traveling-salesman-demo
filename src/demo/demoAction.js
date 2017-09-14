// DemoQuestionListMapでマーカークリック時に呼び出される
export const SORT_LIST = 'SORT_LIST';
export function sortList(payload) {
  return {
    type: SORT_LIST,
    payload,
  };
}

// DemoQuestionListMapでマーカークリック時に呼び出される
export const DISABLED_CHOOSE_OPTIONS = 'DISABLED_CHOOSE_OPTIONS';
export function disabledChooseOptions() {
  return {
    type: DISABLED_CHOOSE_OPTIONS,
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
