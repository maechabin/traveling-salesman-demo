import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import DemoQuestionButton from '../DemoQuestionButton';

describe('<DemoQuestionbutton />', () => {
  const handleResetClickSpy = sinon.spy();

  test('viewAnswerFlagの値がtrue/falseの時に、buttonが押せるか押せないか', () => {
    const viewAnswerFlag = true;
    const wrapper = shallow(
      <DemoQuestionButton
        viewAnswerFlag={viewAnswerFlag}
        handleResetClick={handleResetClickSpy}
      />,
    );
    expect(wrapper.find('button').props().disabled).toBe(true);

    wrapper.setProps({ viewAnswerFlag: false });
    expect(wrapper.find('button').props().disabled).toBe(false);
  });

  it('viewAnswerFlagがfalseの場合、buttonクリック時にprops.handleResetClickが呼び出されること', () => {
    const viewAnswerFlag = false;
    const event = { preventDefault: () => console.log('preventDefault') };
    const wrapper = shallow(
      <DemoQuestionButton
        viewAnswerFlag={viewAnswerFlag}
        handleResetClick={handleResetClickSpy}
      />);
    wrapper.find('button').simulate('click', event);
    expect(handleResetClickSpy.calledOnce).toBe(true);
  });
});
