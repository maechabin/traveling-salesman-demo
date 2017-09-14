import React from 'react';

import DemoHeader from './DemoHeader';
import DemoQuestion from './question/DemoQuestion';
import DemoDescription from './description/DemoDescription';
import '../styles/Demo.css';

const Demo = props => (
  <div className="Demo">
    <DemoHeader />
    <main className="DemoMain">
      <DemoQuestion {...props} />
      <DemoDescription />
    </main>
  </div>
);

export default Demo;
