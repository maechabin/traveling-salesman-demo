import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { Dispatches } from './demo.model';

import { State, Gross, Position, Route, Step } from '../state.model';

import {
  updateRoutesSort,
  updateGross,
  updateAnswerData,
  updateRoutes,
  updateQuestionOption,
  initializeDemo,
  updateQuestionStep,
} from './demoAction';

// viewファイルを追加
import Demo from './components/Demo';

function DemoContainer(props: State & Dispatches): JSX.Element {
  return <Demo {...props} />;
}

function mapStateToProps(state: State): State {
  return state;
}

function mapDispatchToProps(dispatch: Dispatch): Dispatches {
  return {
    dispatchMarkerClickActions(
      routeId: number,
      questionStep: Step,
      currentSortId: number,
    ): Action[] {
      const actionsArray = [updateRoutesSort(routeId)];
      if (questionStep === Step.Initial) {
        actionsArray.push(updateQuestionStep(Step.Select));
      }
      if (currentSortId === 1) {
        actionsArray.push(updateQuestionStep(Step.Over));
      }
      return actionsArray.map(action => dispatch(action));
    },
    dispatchUpdateGross(gross: Gross): Action {
      return dispatch(updateGross(gross));
    },
    dispatchUpdateAnswerData(gross: Gross, waypointOrder: number[]): Action {
      const data = {
        gross,
        waypointOrder,
      };
      return dispatch(updateAnswerData(data));
    },
    dispatchUpdateRoutes(departure: Position, arrival: Position, routes: Route[]): Action {
      return dispatch(updateRoutes({ departure, arrival, routes }));
    },
    dispatchUpdateQuestionOption(value: { name: string; value: string }): Action {
      return dispatch(updateQuestionOption(value));
    },
    dispatchUpdateQuestionStep(step: Step): Action {
      return dispatch(updateQuestionStep(step));
    },
    dispatchInitializeDemo(): Action {
      return dispatch(initializeDemo());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DemoContainer);
