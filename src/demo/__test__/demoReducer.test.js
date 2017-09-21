import reducer from '../demoReducer';
import * as actions from '../demoAction';
import demoState from '../demoState';

describe('demoReducer', () => {
  const initialState = demoState;

  it('初期stateを返すこと', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SORT_LIST', () => {
    expect(reducer(initialState, {
      type: actions.SORT_LIST,
      payload: 1,
    })).toEqual(Object.assign({}, initialState, {
      routes: [
        { id: 1, title: '秋葉原駅', lat: 35.698353, lng: 139.77311429999997, label: 'A', sortId: 8 },
        { id: 2, title: '文京区役所', lat: 35.7080677, lng: 139.752167, label: 'B', sortId: 0 },
        { id: 3, title: '明治大学', lat: 35.6972422, lng: 139.7615346, label: 'C', sortId: 0 },
        { id: 4, title: '浜離宮', lat: 35.6597374, lng: 139.76349249999998, label: 'D', sortId: 0 },
        { id: 5, title: '国会議事堂', lat: 35.675888, lng: 139.74485800000002, label: 'E', sortId: 0 },
        { id: 6, title: '東京タワー', lat: 35.6585805, lng: 139.745432899999977, label: 'F', sortId: 0 },
        { id: 7, title: '上野動物園', lat: 35.7164535, lng: 139.77131770000005, label: 'G', sortId: 0 },
        { id: 8, title: '東京駅', lat: 35.6811673, lng: 139.76705160000006, label: 'H', sortId: 0 },
      ],
      currentSortId: 7,
    }));
  });

  it('should handle UPDATE_GROSS', () => {
    expect(reducer({}, {
      type: actions.UPDATE_GROSS,
      payload: {
        distance: 100,
        duration: 100,
      },
    })).toEqual({
      gross: {
        distance: 100,
        duration: 100,
      },
    });
  });

  it('should handle UPDATE_ANSWER_DATA', () => {
    expect(reducer({}, {
      type: actions.UPDATE_ANSWER_DATA,
      payload: {
        gross: {
          distance: 100,
          duration: 100,
        },
        waypointOrder: [2, 3, 5, 7, 0, 4, 1, 6],
      },
    })).toEqual({
      answerGross: {
        distance: 100,
        duration: 100,
      },
      answerWaypointOrder: [2, 3, 5, 7, 0, 4, 1, 6],
    });
  });

  it('should handle DISABLED_CHOOSE_OPTIONS', () => {
    expect(reducer({}, {
      type: actions.DISABLED_CHOOSE_OPTIONS,
    })).toEqual({
      choosingRouteStartFlag: true,
    });
  });

  it('should handle CHANGE_FORM_VALUE', () => {
    expect(reducer({}, {
      type: actions.CHANGE_FORM_VALUE,
      payload: {
        name: 'transport',
        value: 'car',
      },
    })).toEqual({
      transport: 'car',
    });

    expect(reducer({}, {
      type: actions.CHANGE_FORM_VALUE,
      payload: {
        name: 'transport',
        value: 'walk',
      },
    })).toEqual({
      transport: 'walk',
    });

    expect(reducer({}, {
      type: actions.CHANGE_FORM_VALUE,
      payload: {
        name: 'expressway',
        value: 'no',
      },
    })).toEqual({
      expressway: 'no',
    });

    expect(reducer({}, {
      type: actions.CHANGE_FORM_VALUE,
      payload: {
        name: 'expressway',
        value: 'yes',
      },
    })).toEqual({
      expressway: 'yes',
    });

    expect(reducer({}, {
      type: actions.CHANGE_FORM_VALUE,
      payload: {
        name: 'traffic',
        value: 'standard',
      },
    })).toEqual({
      traffic: 'standard',
    });

    expect(reducer({}, {
      type: actions.CHANGE_FORM_VALUE,
      payload: {
        name: 'traffic',
        value: 'optimistic',
      },
    })).toEqual({
      traffic: 'optimistic',
    });

    expect(reducer({}, {
      type: actions.CHANGE_FORM_VALUE,
      payload: {
        name: 'traffic',
        value: 'pessimistic',
      },
    })).toEqual({
      traffic: 'pessimistic',
    });
  });

  it('should handle RESET_DEMO', () => {
    expect(reducer({}, {
      type: actions.RESET_DEMO,
    })).toEqual({
      departure: { title: '根津神社', lat: 35.7202332, lng: 139.76073810000003, label: '発' },
      arival: { title: '勝どき駅', lat: 35.6589788, lng: 139.77714949999995, label: '着' },
      routes: [
        { id: 1, title: '秋葉原駅', lat: 35.698353, lng: 139.77311429999997, label: 'A', sortId: 0 },
        { id: 2, title: '文京区役所', lat: 35.7080677, lng: 139.752167, label: 'B', sortId: 0 },
        { id: 3, title: '明治大学', lat: 35.6972422, lng: 139.7615346, label: 'C', sortId: 0 },
        { id: 4, title: '浜離宮', lat: 35.6597374, lng: 139.76349249999998, label: 'D', sortId: 0 },
        { id: 5, title: '国会議事堂', lat: 35.675888, lng: 139.74485800000002, label: 'E', sortId: 0 },
        { id: 6, title: '東京タワー', lat: 35.6585805, lng: 139.745432899999977, label: 'F', sortId: 0 },
        { id: 7, title: '上野動物園', lat: 35.7164535, lng: 139.77131770000005, label: 'G', sortId: 0 },
        { id: 8, title: '東京駅', lat: 35.6811673, lng: 139.76705160000006, label: 'H', sortId: 0 },
      ],
      initialFlag: true,
      choosingRouteStartFlag: false,
      choosingRouteFinishFlag: false,
      viewAnswerFlag: false,
      currentSortId: 8, // routes（経路）の要素数を指定する
      transport: 'car',
      expressway: 'no',
      traffic: 'standard',
      gross: {
        distance: 0,
        duration: 0,
      },
      answerGross: {
        distance: 0, // 正解の総距離
        duration: 0, // 正解の総時間
      },
      answerWaypointOrder: [], // 正解の経路の表示順
    });
  });

  it('should handle CHANGE_INITFLAG_TO_FALSE', () => {
    expect(reducer({}, {
      type: actions.CHANGE_INITFLAG_TO_FALSE,
    })).toEqual({
      initialFlag: false,
    });
  });

  it('should handle CHANGE_VIEWANSWERFLAG_TO_TRUE', () => {
    expect(reducer({}, {
      type: actions.CHANGE_VIEWANSWERFLAG_TO_TRUE,
    })).toEqual({
      viewAnswerFlag: true,
    });
  });

  it('should handle CHANGE_CHOOSINGROUTE_FINISHFLAG_TO_TURE', () => {
    expect(reducer({}, {
      type: actions.CHANGE_CHOOSINGROUTE_FINISHFLAG_TO_TURE,
    })).toEqual({
      choosingRouteFinishFlag: true,
    });
  });
});