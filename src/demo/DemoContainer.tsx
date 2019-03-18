import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';
import { Dispatches } from './demo.model';

import { State, Gross } from '../state.model';

import {
  sortList,
  updateGross,
  updateAnswerData,
  disabledChooseOptions,
  changeFormValue,
  resetDemo,
  changeInitflagToFalse,
  changeisAnswerSideToTrue,
  changeisOverToTure,
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
    handleMarkerClick(routeId: number, isSelecting: boolean, currentSortId: number): Action[] {
      const actionsArray = [sortList(routeId)];
      if (!isSelecting) {
        actionsArray.push(disabledChooseOptions());
      }
      if (currentSortId === 1) {
        actionsArray.push(changeisOverToTure());
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
    handleFormChange(value: { name: string; value: string }): Action {
      return dispatch(changeFormValue(value));
    },
    handleResetClick(): Action {
      return dispatch(resetDemo());
    },
    handleInit(): Action {
      return dispatch(changeInitflagToFalse());
    },
    handleAnswerButtonClick(): Action {
      return dispatch(changeisAnswerSideToTrue());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DemoContainer);
