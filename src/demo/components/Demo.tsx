import React from 'react';
import { State } from '../../state.model';
import { Dispatches } from '../demo.model';

import Layout from './layout/Layout';
import DemoQuestion from './question/DemoQuestion';
import DemoDescription from './description/DemoDescription';
import DemoAnswer from './answer/DemoAnswer';

import '../styles/Demo.css';

function Demo(props: State & Dispatches): JSX.Element {
  const { viewAnswerFlag } = props;
  const rightComponent = viewAnswerFlag ? (
    <DemoAnswer {...props} />
  ) : (
    <DemoDescription {...props} />
  );

  return (
    <Layout>
      <main className="DemoMain">
        <DemoQuestion {...props} />
        {rightComponent}
      </main>
    </Layout>
  );
}

export default Demo;
