import React from 'react';
import { shallow } from 'enzyme';

import DemoEditDepartureArrival from '../DemoEditDepartureArrival';

describe('<DemoDescription />', () => {
  it('snapshot', () => {
    // setup
    const label = 'AAA';
    const title = 'BBB';
    const index = 0;
    const callbackSpy = jest.fn();
    const props = {
      callback: callbackSpy,
      label,
      title,
      index,
    };

    // exercise
    const wrapper = shallow(<DemoEditDepartureArrival {...props} />);

    // verify
    expect(wrapper).toMatchSnapshot();
  });

  it('handleChange', () => {
    // setup
    const label = 'AAA';
    const title = 'BBB';
    const index = 0;
    const callbackSpy = jest.fn();
    const props = {
      callback: callbackSpy,
      label,
      title,
      index,
    };
    const event = 'event';
    const wrapper = shallow(<DemoEditDepartureArrival {...props} />);

    // exercise
    wrapper.find('input').simulate('change', event);

    // verify
    expect(callbackSpy).toHaveBeenCalledWith(event, index);
  });
});
