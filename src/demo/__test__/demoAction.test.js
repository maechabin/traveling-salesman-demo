import * as actions from '../demoAction';

describe('actions', () => {
  it('経路リストをソートするためのactionを作ること', () => {
    const payload = 1;
    const expectedAction = {
      type: actions.SORT_LIST,
      payload,
    };
    expect(actions.sortList(payload)).toEqual(expectedAction);
  });

  it('オプションをdisabledにするためのactionを作ること', () => {
    const expectedAction = {
      type: actions.DISABLED_CHOOSE_OPTIONS,
    };
    expect(actions.disabledChooseOptions()).toEqual(expectedAction);
  });

  it('総距離、総時間を更新するためのactionを作ること', () => {
    const payload = {
      distance: 100,
      duration: 100,
    };
    const expectedAction = {
      type: actions.UPDATE_GROSS,
      payload,
    };
    expect(actions.updateGross(payload)).toEqual(expectedAction);
  });

  it('正解を表示するための情報を更新するためのactionを作ること', () => {
    const payload = {
      gross: {
        distance: 100,
        duration: 100,
      },
      waypointOrder: [2, 3, 5, 7, 0, 4, 1, 6],
    };
    const expectedAction = {
      type: actions.UPDATE_ANSWER_DATA,
      payload,
    };
    expect(actions.updateAnswerData(payload)).toEqual(expectedAction);
  });

  it('オプションの項目を更新するためのactionを作ること', () => {
    const payload = {
      name: 'transport',
      value: 'car',
    };
    const expectedAction = {
      type: actions.CHANGE_FORM_VALUE,
      payload,
    };
    expect(actions.changeFormValue(payload)).toEqual(expectedAction);
  });

  it('最初の状態に戻すためのactionを作ること', () => {
    const expectedAction = {
      type: actions.RESET_DEMO,
    };
    expect(actions.resetDemo()).toEqual(expectedAction);
  });

  it('changeInitflagをfalseに変更するためのactionを作ること', () => {
    const expectedAction = {
      type: actions.CHANGE_INITFLAG_TO_FALSE,
    };
    expect(actions.changeInitflagToFalse()).toEqual(expectedAction);
  });

  it('changeViewanswerflagをtrueに変更するためのactionを作ること', () => {
    const expectedAction = {
      type: actions.CHANGE_VIEWANSWERFLAG_TO_TRUE,
    };
    expect(actions.changeViewanswerflagToTrue()).toEqual(expectedAction);
  });

  it('changeChoosingrouteFinishflagをtrueに変更するためのactionを作ること', () => {
    const expectedAction = {
      type: actions.CHANGE_CHOOSINGROUTE_FINISHFLAG_TO_TURE,
    };
    expect(actions.changeChoosingrouteFinishflagToTure()).toEqual(expectedAction);
  });
});
