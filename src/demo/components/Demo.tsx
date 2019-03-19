import React from 'react';
import { State } from '../../state.model';
import { Dispatches } from '../demo.model';

import Layout from './layout/Layout';
import DemoQuestion from './question/DemoQuestion';
import DemoDescription from './description/DemoDescription';
import DemoEdit from './edit/DemoEdit';
import DemoAnswer from './answer/DemoAnswer';

import '../styles/Demo.css';

function Demo(props: State & Dispatches): JSX.Element {
  const { isAnswerSide } = props;
  const isEditing = true;
  const rightComponent = isAnswerSide ? (
    <DemoAnswer {...props} />
  ) : isEditing ? (
    <DemoEdit {...props} />
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
