import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import DemoDescriptionButton from '../DemoDescriptionButton';

describe('<DemoDescriptionButton />', () => {
  test('viewAnswerFlagの値がtrue/falseの時に、buttonが押せるか押せないか', () => {
    const handleClickSpy = sinon.spy();
    const choosingRouteFinishFlag = false;
    const wrapper = shallow(
      <DemoDescriptionButton
        handleClick={handleClickSpy}
        choosingRouteFinishFlag={choosingRouteFinishFlag}
      />,
    );
    expect(wrapper.find('button').props().disabled).toBe(true);

    wrapper.setProps({ choosingRouteFinishFlag: true });
    expect(wrapper.find('button').props().disabled).toBe(false);
  });

  it('choosingRouteFinishFlagがfalseの場合、buttonクリック時にprops.handleClickが呼び出されること', () => {
    const handleClickSpy = sinon.spy();
    const choosingRouteFinishFlag = false;
    const event = { preventDefault: () => console.log('preventDefault') };
    const wrapper = shallow(
      <DemoDescriptionButton
        handleClick={handleClickSpy}
        choosingRouteFinishFlag={choosingRouteFinishFlag}
      />,
    );
    wrapper.find('button').simulate('click', event);
    expect(handleClickSpy.calledOnce).toBe(true);
  });
});

