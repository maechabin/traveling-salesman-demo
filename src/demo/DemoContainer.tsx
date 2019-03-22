import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { Dispatches } from './demo.model';

import { State, Gross, Position, Route, Step } from '../state.model';

import {
  sortList,
  updateGross,
  updateAnswerData,
  updateDeparture,
  updateArrival,
  updateRoutes,
  changeFormValue,
  resetDemo,
  changeQuestionStep,
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
    handleMarkerClick(routeId: number, questionStep: Step, currentSortId: number): Action[] {
      const actionsArray = [sortList(routeId)];
      if (questionStep === Step.Initial) {
        actionsArray.push(changeQuestionStep(Step.Select));
      }
      if (currentSortId === 1) {
        actionsArray.push(changeQuestionStep(Step.Over));
      }
      return actionsArray.map(action => dispatch(action));
    },
    handleUpdateGross(gross: Gross): Action {
      return dispatch(updateGross(gross));
    },
    handleUpdateAnswerData(gross: Gross, waypointOrder: number[]): Action {
      const data = {
        gross,
        waypointOrder,
      };
      return dispatch(updateAnswerData(data));
    },
    handleUpdateDeparture(departure: Position): Action {
      return dispatch(updateDeparture(departure));
    },
    handleUpdateArrival(arrival: Position): Action {
      return dispatch(updateArrival(arrival));
    },
    handleUpdateRoutes(departure: Position, arrival: Position, routes: Route[]): Action {
      return dispatch(updateRoutes({ departure, arrival, routes }));
    },
    handleFormChange(value: { name: string; value: string }): Action {
      return dispatch(changeFormValue(value));
    },
    handleChangeQuestionStep(step: Step): Action {
      return dispatch(changeQuestionStep(step));
    },
    handleResetClick(): Action {
      return dispatch(resetDemo());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DemoContainer);
