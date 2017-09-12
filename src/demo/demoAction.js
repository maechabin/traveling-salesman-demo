// DemoQuestionListMapで呼び出される
export const SORT_LIST = 'SORT_LIST';
export function sortList(payload) {
  return {
    type: SORT_LIST,
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
