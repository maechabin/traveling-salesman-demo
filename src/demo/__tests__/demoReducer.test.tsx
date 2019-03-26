import reducer from '../demoReducer';
import { ActionType } from '../demoAction.model';
import { state } from '../../state';
import { Step, Traffic, Transport, Expressway } from '../../state.model';
import { copyArrayWithObject } from '../../utils/shared';

describe('demoReducer', () => {
  const initialState = state;

  it('初期stateを返すこと', () => {
    // setup
    const state = undefined;
    const expected = initialState;

    // exercise
    const recieved = reducer(state, {} as any);

    // verify
    expect(recieved).toEqual(expected);
  });

  it('ActionType.UPDATE_ROUTES_SORT', () => {
    // setup
    const state = {
      routes: [{ id: 1, sortId: 0 }, { id: 2, sortId: 0 }, { id: 3, sortId: 0 }],
      currentSortId: 3,
    } as any;
    const payload = 2;
    const action = {
      type: ActionType.UPDATE_ROUTES_SORT,
      payload,
    };
    const expected = {
      ...state,
      routes: [{ id: 1, sortId: 0 }, { id: 2, sortId: 3 }, { id: 3, sortId: 0 }],
      currentSortId: 2,
    };

    // exercise
    const recieved = reducer(state, action);

    // verify
    expect(recieved).toEqual(expected);
  });

  it('ActionType.UPDATE_GROSS', () => {
    // setup
    const payload = {
      distance: 100,
      duration: 100,
    };
    const action = {
      type: ActionType.UPDATE_GROSS,
      payload,
    };
    const expected = {
      ...{},
      gross: action.payload,
    };

    // exercise
    const recieved = reducer({} as any, action);

    // verify
    expect(recieved).toEqual(expected);
  });

  it('ActionType.UPDATE_ANSWER_DATA', () => {
    // setup
    const payload = {
      gross: {
        distance: 100,
        duration: 100,
      },
      waypointOrder: [2, 3, 5, 7, 0, 4, 1, 6],
    };
    const action = {
      type: ActionType.UPDATE_ANSWER_DATA,
      payload,
    };
    const expected = {
      ...{},
      answerGross: payload.gross,
      answerWaypointOrder: payload.waypointOrder,
    };

    // exercise
    const recieved = reducer({} as any, action);

    // verify
    expect(recieved).toEqual(expected);
  });

  it('ActionType.UPDATE_ROUTES', () => {
    // setup
    const payload = {
      departure: { A: 'AAA' } as any,
      arrival: { B: 'BBB' } as any,
      routes: ['C', 'D', 'E'] as any,
    };
    const action = {
      type: ActionType.UPDATE_ROUTES,
      payload,
    };
    const expected = {
      ...{},
      departure: JSON.parse(JSON.stringify(payload.departure)),
      arrival: JSON.parse(JSON.stringify(payload.arrival)),
      routes: payload.routes,
      routesCache: copyArrayWithObject<any>(payload.routes),
      currentSortId: payload.routes.length,
    };

    // exercise
    const recieved = reducer({} as any, action);

    // verify
    expect(recieved).toEqual(expected);
  });

  it('ActionType.UPDATE_QUESTION_STEP', () => {
    // setup
    const payload = Step.Initial;
    const action = {
      type: ActionType.UPDATE_QUESTION_STEP,
      payload,
    };
    const expected = {
      ...{},
      questionStep: action.payload,
    };

    // exercise
    const recieved = reducer({} as any, action);

    // verify
    expect(recieved).toEqual(expected);
  });

  it('ActionType.UPDATE_QUESTION_OPTION', () => {
    // setup
    const name = 'transport';
    const value = 'car';
    const payload = {
      name,
      value,
    };
    const action = {
      type: ActionType.UPDATE_QUESTION_OPTION,
      payload,
    };
    const expected = {
      ...{},
      [name]: value,
    };

    // exercise
    const recieved = reducer({} as any, action);

    // verify
    expect(recieved).toEqual(expected);
  });

  it('ActionType.INITIALIZE_DEMO', () => {
    // setup
    const defaultRoute = ['C', 'D', 'E'] as any;
    const state = {
      departure: { A: 'AAA' } as any,
      arrival: { B: 'BBB' } as any,
      routes: copyArrayWithObject<any>(defaultRoute),
      routesCache: copyArrayWithObject<any>(defaultRoute),
    } as any;
    const action = {
      type: ActionType.INITIALIZE_DEMO,
    };
    const expected = {
      ...state,
      departure: JSON.parse(JSON.stringify(state.departure)),
      arrival: JSON.parse(JSON.stringify(state.arrival)),
      routes: copyArrayWithObject<any>(state.routesCache),
      questionStep: Step.Initial,
      currentSortId: state.routesCache.length,
      transport: Transport.Car,
      expressway: Expressway.No,
      traffic: Traffic.Standard,
      departureTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
      gross: {
        distance: 0,
        duration: 0,
      },
      answerGross: {
        distance: 0,
        duration: 0,
      },
      answerWaypointOrder: [],
    };

    // exercise
    const recieved = reducer(state, action);

    // verify
    expect(recieved).toEqual(expected);
  });
});
