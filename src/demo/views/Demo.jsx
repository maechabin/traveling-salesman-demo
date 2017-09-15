import React from 'react';
import PropTypes from 'prop-types';

import DemoHeader from './DemoHeader';
import DemoQuestion from './question/DemoQuestion';
import DemoDescription from './description/DemoDescription';
import DemoAnswer from './answer/DemoAnswer';

import '../styles/Demo.css';

const Demo = (props) => {
  const { google, ...rest } = props;
  const rightComponent = props.viewAnswerFlag ? <DemoAnswer {...props} /> : <DemoDescription {...rest} />;

  return (
    <div className="Demo">
      <DemoHeader />
      <main className="DemoMain">
        <DemoQuestion {...props} />
        {rightComponent}
      </main>
    </div>
  );
};

Demo.propTypes = {
  google: PropTypes.object.isRequired,
  viewAnswerFlag: PropTypes.bool.isRequired,
};

export default Demo;
