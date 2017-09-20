import React from 'react';
import { shallow } from 'enzyme';

import Demo from '../Demo';
import demoState from '../../demoState';

describe('<Demo />', () => {
  const rest = {
    google: window.google || {},
    handleResetClick: jest.fn(),
    handleAnswerButtonClick: jest.fn(),
  };
  it('props.viewAnswerFlagがtrueの場合、<DemoAnswer />がレンダリングされること', () => {
    const wrapper = shallow(
      <Demo
        {...demoState}
        {...rest}
        viewAnswerFlag
      />,
    );
    expect(wrapper.find('DemoAnswer').length).toBe(1);
  });

  it('props.viewAnswerFlagがfalseの場合、<DemoDescription />がレンダリングされること', () => {
    const wrapper = shallow(
      <Demo
        {...demoState}
        {...rest}
        viewAnswerFlag={false}
      />,
    );
    expect(wrapper.find('DemoDescription').length).toBe(1);
  });
});
