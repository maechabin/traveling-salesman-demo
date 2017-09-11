import React from 'react';
import PropTypes from 'prop-types';

import DemoHeader from './DemoHeader';
import DemoQuestion from './question/DemoQuestion';
import DemoDescription from './description/DemoDescription';
import '../styles/Demo.css';

const Demo = (props) => {
  return (
    <div className="Demo">
      <DemoHeader />
      <main className="DemoMain">
        <DemoQuestion google={props.google} />
        <DemoDescription />
      </main>
    </div>
  );
};

Demo.propTypes = {
  google: PropTypes.object,
};

export default Demo;
