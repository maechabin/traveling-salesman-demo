import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('<DemoDescription />', () => {
  it('snapshot', () => {
    // setup
    const wrapper = shallow(<Header />);

    // snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
