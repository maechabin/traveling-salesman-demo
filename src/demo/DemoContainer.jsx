import React from 'react';
import { connect } from 'react-redux';

// viewファイルを追加
import Demo from './views/Demo';

class DemoContainer extends React.Component {
  render() {
    return (
      <Demo />    
    )
  }
}

function mapStateToProps(state) {

}

function mapDispatchToProps(dispatch) {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DemoContainer);