import * as actions from '../demoAction';
import { Step } from '../../state.model';
import { ActionType } from '../demoAction.model';

describe('actions', () => {
  it('updateRoutesSort', () => {
    // setup
    const payload = 1;
    const expected = {
      type: ActionType.UPDATE_ROUTES_SORT,
      payload,
    };

    // exercise
    const recieved = actions.updateRoutesSort(payload);

    // verify
    expect(recieved).toEqual(expected);
  });

  it('updateGross', () => {
    // setup
    const payload = {
      distance: 100,
      duration: 100,
    };
    const expected = {
      type: ActionType.UPDATE_GROSS,
      payload,
    };

    // exercise
    const recieved = actions.updateGross(payload);

    // verify
    expect(recieved).toEqual(expected);
  });

  it('updateAnswerData', () => {
    // setup
    const payload = {
      gross: {
        distance: 100,
        duration: 100,
      },
      waypointOrder: [2, 3, 5, 7, 0, 4, 1, 6],
    };
    const expected = {
      type: ActionType.UPDATE_ANSWER_DATA,
      payload,
    };

    // exercise
    const recieved = actions.updateAnswerData(payload);

    // verify
    expect(recieved).toEqual(expected);
  });

  it('updateRoutes', () => {
    // setup
    const payload = {
      departure: { A: 'AAA' } as any,
      arrival: { B: 'BBB' } as any,
      routes: ['C', 'D', 'E'] as any,
    };
    const expected = {
      type: ActionType.UPDATE_ROUTES,
      payload,
    };

    // exercise
    const recieved = actions.updateRoutes(payload);

    // verify
    expect(recieved).toEqual(expected);
  });

  it('updateQuestionOption', () => {
    // setup
    const payload = {
      name: 'transport',
      value: 'car',
    };
    const expected = {
      type: ActionType.UPDATE_QUESTION_OPTION,
      payload,
    };

    // exercise
    const recieved = actions.updateQuestionOption(payload);

    // verify
    expect(recieved).toEqual(expected);
  });

  it('initializeDemo', () => {
    // setup
    const expected = {
      type: ActionType.INITIALIZE_DEMO,
    };

    // exercise
    const recieved = actions.initializeDemo();

    // verify
    expect(recieved).toEqual(expected);
  });

  it('updateQuestionStep', () => {
    // setup
    const payload = Step.Initial;
    const expected = {
      type: ActionType.UPDATE_QUESTION_STEP,
      payload,
    };

    // exercise
    const recieved = actions.updateQuestionStep(payload);

    // verify
    expect(recieved).toEqual(expected);
  });
});
