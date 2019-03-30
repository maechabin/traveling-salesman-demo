import React from 'react';
import { shallow } from 'enzyme';

import DemoButton from '../DemoButton';

describe('<Demobutton />', () => {
  it('propsから受け取った値を適切に表示すること', () => {
    // setup
    const callbackSpy = jest.fn();
    const props = {
      callback: callbackSpy,
      isDisabled: true,
      classname: 'AAA',
      label: 'BBB',
    };
    const wrapper = shallow(<DemoButton {...props} />);

    // verify
    expect(wrapper.childAt(0).text()).toBe(props.label);
    expect(wrapper.find('button').props().disabled).toBe(true);
    expect(wrapper.find('button').props().className).toBe(props.classname);
    expect(wrapper).toMatchSnapshot();
  });

  it('ボタンをクリックした時にprops.callbackが呼び出されること', () => {
    // setup
    const callbackSpy = jest.fn();
    const props = {
      callback: callbackSpy,
      isDisabled: true,
      classname: 'AAA',
      label: 'BBB',
    };
    const wrapper = shallow(<DemoButton {...props} />);

    // exercise
    wrapper.find('button').simulate('click');

    // verify
    expect(callbackSpy).toHaveBeenCalled();
  });
});
