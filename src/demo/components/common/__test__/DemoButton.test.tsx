import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import DemoButton from '../DemoButton';

describe('<Demobutton />', () => {
  const handleResetClickSpy = sinon.spy();

  test('isAnswerSideの値がtrue/falseの時に、buttonが押せるか押せないか', () => {
    const isAnswerSide = true;
    const wrapper = shallow(
      <DemoButton isAnswerSide={isAnswerSide} handleResetClick={handleResetClickSpy} />,
    );
    expect(wrapper.find('button').props().disabled).toBe(true);

    wrapper.setProps({ isAnswerSide: false });
    expect(wrapper.find('button').props().disabled).toBe(false);
  });

  it('isAnswerSideがfalseの場合、buttonクリック時にprops.handleResetClickが呼び出されること', () => {
    const isAnswerSide = false;
    const event = { preventDefault: () => console.log('preventDefault') };
    const wrapper = shallow(
      <DemoButton isAnswerSide={isAnswerSide} handleResetClick={handleResetClickSpy} />,
    );
    wrapper.find('button').simulate('click', event);
    expect(handleResetClickSpy.calledOnce).toBe(true);
  });
});
