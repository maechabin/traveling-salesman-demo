import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import DemoAnswerButton from '../DemoAnswerButton';


describe('<DemoAnswerButton />', () => {
  const handleResetClickSpy = sinon.spy();

  it('disabledではないこと', () => {
    const wrapper = shallow(<DemoAnswerButton handleResetClick={handleResetClickSpy} />);
    expect(wrapper.find('button').props().disabled).toBe(false);
  });

  it('buttonクリック時にhandleResetClickが呼び出されること', () => {
    const event = { preventDefault: () => console.log('preventDefault') };
    const wrapper = shallow(<DemoAnswerButton handleResetClick={handleResetClickSpy} />);
    wrapper.find('button').simulate('click', event);
    expect(handleResetClickSpy.calledOnce).toBe(true);
  });
});
