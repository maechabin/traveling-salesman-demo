import React from 'react';
import { connect } from 'react-redux';

import { sortList, updateGross, disabledChooseOptions, changeFormValue } from './demoAction';

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
    transport: state.transport,
    expressway: state.expressway,
    traffic: state.traffic,
    choosingRouteFlag: state.choosingRouteFlag,
    gross: state.gross,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleMarkerClick(marker, choosingRouteFlag) {
      const actionsArray = [sortList(marker)];
      if (!choosingRouteFlag) {
        actionsArray.push(disabledChooseOptions());
      }
      return actionsArray.map(
        action => dispatch(action),
      );
    },
    handleUpdateGross(gross) {
      return dispatch(updateGross(gross));
    },
    handleFormChange(value) {
      return dispatch(changeFormValue(value));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DemoContainer);
