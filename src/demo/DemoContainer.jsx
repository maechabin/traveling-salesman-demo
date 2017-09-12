import React from 'react';
import { connect } from 'react-redux';

import { sortList, changeFormValue } from './demoAction';

// viewファイルを追加
import Demo from './views/Demo';

class DemoContainer extends React.Component {
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleMarkerClick(marker) {
      dispatch(sortList(marker));
    },
    handleFormChange(value) {
      dispatch(changeFormValue(value));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DemoContainer);
