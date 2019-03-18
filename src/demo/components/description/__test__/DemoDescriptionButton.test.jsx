import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import DemoDescriptionButton from '../DemoDescriptionButton';

describe('<DemoDescriptionButton />', () => {
  test('isAnswerSideの値がtrue/falseの時に、buttonが押せるか押せないか', () => {
    const handleClickSpy = sinon.spy();
    const isOver = false;
    const wrapper = shallow(<DemoDescriptionButton handleClick={handleClickSpy} isOver={isOver} />);
    expect(wrapper.find('button').props().disabled).toBe(true);

    wrapper.setProps({ isOver: true });
    expect(wrapper.find('button').props().disabled).toBe(false);
  });

  it('isOverがfalseの場合、buttonクリック時にprops.handleClickが呼び出されること', () => {
    const handleClickSpy = sinon.spy();
    const isOver = false;
    const event = { preventDefault: () => console.log('preventDefault') };
    const wrapper = shallow(<DemoDescriptionButton handleClick={handleClickSpy} isOver={isOver} />);
    wrapper.find('button').simulate('click', event);
    expect(handleClickSpy.calledOnce).toBe(true);
  });
});
