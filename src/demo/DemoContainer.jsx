import React from 'react';
import { connect } from 'react-redux';

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

class DemoContainer extends React.PureComponent {
  render() {
    return (
      <Demo {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    departure: state.departure,
    arival: state.arival,
    routes: state.routes,
    currentSortId: state.currentSortId,
    transport: state.transport,
    expressway: state.expressway,
    traffic: state.traffic,
    initialFlag: state.initialFlag,
    choosingRouteStartFlag: state.choosingRouteStartFlag,
    choosingRouteFinishFlag: state.choosingRouteFinishFlag,
    viewAnswerFlag: state.viewAnswerFlag,
    gross: state.gross,
    answerGross: state.answerGross,
    answerWaypointOrder: state.answerWaypointOrder,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleMarkerClick(marker, choosingRouteStartFlag, currentSortId) {
      const actionsArray = [sortList(marker)];
      if (!choosingRouteStartFlag) {
        actionsArray.push(disabledChooseOptions());
      }
      if (currentSortId === 1) {
        actionsArray.push(changeChoosingrouteFinishflagToTure());
      }
      return actionsArray.map(
        action => dispatch(action),
      );
    },
    handleUpdateGross(gross) {
      return dispatch(updateGross(gross));
    },
    handleUpdateAnswerData(gross, waypointOrder) {
      const data = {
        gross,
        waypointOrder,
      };
      return dispatch(updateAnswerData(data));
    },
    handleFormChange(value) {
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
