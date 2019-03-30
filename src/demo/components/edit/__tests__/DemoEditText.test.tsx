import React from 'react';
import { shallow } from 'enzyme';

import DemoEditText from '../DemoEditText';

describe('<DemoEditText />', () => {
  it('子コンポーネントをレンダリングすること', () => {
    // setup
    const wrapper = shallow(<DemoEditText />);

    // snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
