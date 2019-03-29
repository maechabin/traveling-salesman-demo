import React from 'react';
import { shallow } from 'enzyme';

import DemoDescriptionText from '../DemoDescriptionText';

describe('<DemoDescription />', () => {
  it('子コンポーネントをレンダリングすること', () => {
    // setup
    const wrapper = shallow(<DemoDescriptionText />);

    // snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
