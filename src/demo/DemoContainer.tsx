import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

import { State, Gross } from '../state.model';

import {
  sortList,
  updateGross,
  updateAnswerData,
  disabledChooseOptions,
  changeFormValue,
  resetDemo,
  changeInitflagToFalse,
  changeViewanswerflagToTrue,
  changeChoosingrouteFinishflagToTure,
} from './demoAction';

// viewファイルを追加
import Demo from './views/Demo';

function DemoContainer(props: any) {
  return <Demo {...props} />;
}

function mapStateToProps(state: State) {
  return state;
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    handleMarkerClick(routeId: number, choosingRouteStartFlag: boolean, currentSortId: number) {
      const actionsArray = [sortList(routeId)];
      if (!choosingRouteStartFlag) {
        actionsArray.push(disabledChooseOptions());
      }
      if (currentSortId === 1) {
        actionsArray.push(changeChoosingrouteFinishflagToTure());
      }
      return actionsArray.map(action => dispatch(action));
    },
    handleUpdateGross(gross: Gross) {
      return dispatch(updateGross(gross));
    },
    handleUpdateAnswerData(gross: Gross, waypointOrder: number[]) {
      const data = {
        gross,
        waypointOrder,
      };
      return dispatch(updateAnswerData(data));
    },
    handleFormChange(value: { name: string; value: string }) {
      return dispatch(changeFormValue(value));
    },
    handleResetClick() {
      return dispatch(resetDemo());
    },
    handleInit() {
      return dispatch(changeInitflagToFalse());
    },
    handleAnswerButtonClick() {
      return dispatch(changeViewanswerflagToTrue());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DemoContainer);
