import React from 'react';
import { shallow } from 'enzyme';

import Demo from '../Demo';
import demoState from '../../../state';

describe('<Demo />', () => {
  const rest = {
    google: window.google || {},
    handleResetClick: jest.fn(),
    handleAnswerButtonClick: jest.fn(),
  };
  it('props.isAnswerSideがtrueの場合、<DemoAnswer />がレンダリングされること', () => {
    const wrapper = shallow(<Demo {...demoState} {...rest} isAnswerSide />);
    expect(wrapper.find('DemoAnswer').length).toBe(1);
  });

  it('props.isAnswerSideがfalseの場合、<DemoDescription />がレンダリングされること', () => {
    const wrapper = shallow(<Demo {...demoState} {...rest} isAnswerSide={false} />);
    expect(wrapper.find('DemoDescription').length).toBe(1);
  });
});
