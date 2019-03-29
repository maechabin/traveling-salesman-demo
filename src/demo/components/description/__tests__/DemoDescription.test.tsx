import React from 'react';
import { shallow } from 'enzyme';

import DemoDescription from '../DemoDescription';

describe('<DemoDescription />', () => {
  it('子コンポーネントをレンダリングすること', () => {
    // setup
    const props = {} as any;

    // exercise
    const wrapper = shallow(<DemoDescription {...props} />);

    // verify
    expect(wrapper.find('DemoButton').length).toBe(2);
    expect(wrapper.find('DemoDescriptionText').length).toBe(1);

    // snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
