import reducer from '../demoReducer';
import * as actions from '../demoAction';
import demoState from '../../state';

describe('demoReducer', () => {
  const initialState = demoState;

  it('初期stateを返すこと', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SORT_LIST', () => {
    expect(
      reducer(initialState, {
        type: actions.SORT_LIST,
        payload: 1,
      }),
    ).toEqual(
      Object.assign({}, initialState, {
        routes: [
          {
            id: 1,
            title: 'Wコンフォートタワーズ EAST',
            lat: 35.6471312,
            lng: 139.80113460000007,
            label: 'A',
            sortId: 8,
          },
          {
            id: 2,
            title: 'セルリアンタワー',
            lat: 35.656325,
            lng: 139.699608,
            label: 'B',
            sortId: 0,
          },
          {
            id: 3,
            title: '新宿センタービル',
            lat: 35.6917502,
            lng: 139.6955153,
            label: 'C',
            sortId: 0,
          },
          { id: 4, title: 'JPタワー', lat: 35.679799, lng: 139.764545, label: 'D', sortId: 0 },
          {
            id: 5,
            title: '新宿パークタワー',
            lat: 35.68564,
            lng: 139.69094999999993,
            label: 'E',
            sortId: 0,
          },
          {
            id: 6,
            title: '住友不動産新宿グランドタワー',
            lat: 35.6957954,
            lng: 139.69038920000003,
            label: 'F',
            sortId: 0,
          },
          {
            id: 7,
            title: '勝どきビュータワー',
            lat: 35.6595554,
            lng: 139.77651500000002,
            label: 'G',
            sortId: 0,
          },
          {
            id: 8,
            title: 'サンシャイン６０',
            lat: 35.7291213,
            lng: 139.7191322,
            label: 'H',
            sortId: 0,
          },
        ],
        currentSortId: 7,
      }),
    );
  });

  it('should handle UPDATE_GROSS', () => {
    expect(
      reducer(
        {},
        {
          type: actions.UPDATE_GROSS,
          payload: {
            distance: 100,
            duration: 100,
          },
        },
      ),
    ).toEqual({
      gross: {
        distance: 100,
        duration: 100,
      },
    });
  });

  it('should handle UPDATE_ANSWER_DATA', () => {
    expect(
      reducer(
        {},
        {
          type: actions.UPDATE_ANSWER_DATA,
          payload: {
            gross: {
              distance: 100,
              duration: 100,
            },
            waypointOrder: [2, 3, 5, 7, 0, 4, 1, 6],
          },
        },
      ),
    ).toEqual({
      answerGross: {
        distance: 100,
        duration: 100,
      },
      answerWaypointOrder: [2, 3, 5, 7, 0, 4, 1, 6],
    });
  });

  it('should handle DISABLED_CHOOSE_OPTIONS', () => {
    expect(
      reducer(
        {},
        {
          type: actions.DISABLED_CHOOSE_OPTIONS,
        },
      ),
    ).toEqual({
      isSelecting: true,
    });
  });

  it('should handle CHANGE_FORM_VALUE', () => {
    expect(
      reducer(
        {},
        {
          type: actions.CHANGE_FORM_VALUE,
          payload: {
            name: 'transport',
            value: 'car',
          },
        },
      ),
    ).toEqual({
      transport: 'car',
    });

    expect(
      reducer(
        {},
        {
          type: actions.CHANGE_FORM_VALUE,
          payload: {
            name: 'transport',
            value: 'walk',
          },
        },
      ),
    ).toEqual({
      transport: 'walk',
    });

    expect(
      reducer(
        {},
        {
          type: actions.CHANGE_FORM_VALUE,
          payload: {
            name: 'expressway',
            value: 'no',
          },
        },
      ),
    ).toEqual({
      expressway: 'no',
    });

    expect(
      reducer(
        {},
        {
          type: actions.CHANGE_FORM_VALUE,
          payload: {
            name: 'expressway',
            value: 'yes',
          },
        },
      ),
    ).toEqual({
      expressway: 'yes',
    });

    expect(
      reducer(
        {},
        {
          type: actions.CHANGE_FORM_VALUE,
          payload: {
            name: 'traffic',
            value: 'standard',
          },
        },
      ),
    ).toEqual({
      traffic: 'standard',
    });

    expect(
      reducer(
        {},
        {
          type: actions.CHANGE_FORM_VALUE,
          payload: {
            name: 'traffic',
            value: 'bestguess',
          },
        },
      ),
    ).toEqual({
      traffic: 'bestguess',
    });

    expect(
      reducer(
        {},
        {
          type: actions.CHANGE_FORM_VALUE,
          payload: {
            name: 'traffic',
            value: 'optimistic',
          },
        },
      ),
    ).toEqual({
      traffic: 'optimistic',
    });

    expect(
      reducer(
        {},
        {
          type: actions.CHANGE_FORM_VALUE,
          payload: {
            name: 'traffic',
            value: 'pessimistic',
          },
        },
      ),
    ).toEqual({
      traffic: 'pessimistic',
    });
  });

  it('should handle RESET_DEMO', () => {
    expect(
      reducer(
        {},
        {
          type: actions.RESET_DEMO,
        },
      ),
    ).toEqual({
      departure: { title: '山王パークタワー', lat: 35.6731652, lng: 139.7407961, label: '発' },
      arrival: {
        title: '六本木ヒルズ森タワー',
        lat: 35.6604638,
        lng: 139.72924869999997,
        label: '着',
      },
      routes: [
        {
          id: 1,
          title: 'Wコンフォートタワーズ EAST',
          lat: 35.6471312,
          lng: 139.80113460000007,
          label: 'A',
          sortId: 0,
        },
        {
          id: 2,
          title: 'セルリアンタワー',
          lat: 35.656325,
          lng: 139.699608,
          label: 'B',
          sortId: 0,
        },
        {
          id: 3,
          title: '新宿センタービル',
          lat: 35.6917502,
          lng: 139.6955153,
          label: 'C',
          sortId: 0,
        },
        { id: 4, title: 'JPタワー', lat: 35.679799, lng: 139.764545, label: 'D', sortId: 0 },
        {
          id: 5,
          title: '新宿パークタワー',
          lat: 35.68564,
          lng: 139.69094999999993,
          label: 'E',
          sortId: 0,
        },
        {
          id: 6,
          title: '住友不動産新宿グランドタワー',
          lat: 35.6957954,
          lng: 139.69038920000003,
          label: 'F',
          sortId: 0,
        },
        {
          id: 7,
          title: '勝どきビュータワー',
          lat: 35.6595554,
          lng: 139.77651500000002,
          label: 'G',
          sortId: 0,
        },
        {
          id: 8,
          title: 'サンシャイン６０',
          lat: 35.7291213,
          lng: 139.7191322,
          label: 'H',
          sortId: 0,
        },
      ],
      isInitialState: true,
      isSelecting: false,
      isOver: false,
      isAnswerSide: false,
      currentSortId: 8, // routes（経路）の要素数を指定する
      transport: 'car',
      expressway: 'no',
      traffic: 'standard',
      departureTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
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
    expect(
      reducer(
        {},
        {
          type: actions.CHANGE_INITFLAG_TO_FALSE,
        },
      ),
    ).toEqual({
      isInitialState: false,
    });
  });

  it('should handle CHANGE_isAnswerSide_TO_TRUE', () => {
    expect(
      reducer(
        {},
        {
          type: actions.CHANGE_isAnswerSide_TO_TRUE,
        },
      ),
    ).toEqual({
      isAnswerSide: true,
    });
  });

  it('should handle CHANGE_CHOOSINGROUTE_FINISHFLAG_TO_TURE', () => {
    expect(
      reducer(
        {},
        {
          type: actions.CHANGE_CHOOSINGROUTE_FINISHFLAG_TO_TURE,
        },
      ),
    ).toEqual({
      isOver: true,
    });
  });
});
