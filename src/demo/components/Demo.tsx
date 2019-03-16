import React from 'react';
import PropTypes from 'prop-types';

import Layout from './layout/Layout';
import DemoQuestion from './question/DemoQuestion';
import DemoDescription from './description/DemoDescription';
import DemoAnswer from './answer/DemoAnswer';

import demoType from '../demoType';
import '../styles/Demo.css';

const Demo = (props) => {
  const { google, ...rest } = props;
  const rightComponent
    = props.viewAnswerFlag ? <DemoAnswer {...props} /> : <DemoDescription {...rest} />;

  return (
    <Layout>
      <main className="DemoMain">
        <DemoQuestion {...props} />
        {rightComponent}
      </main>
    </Layout>
  );
};

Demo.propTypes = {
  google: PropTypes.shape({
    maps: PropTypes.object,
  }).isRequired,
  viewAnswerFlag: demoType.viewAnswerFlag.isRequired,
};

export default Demo;
