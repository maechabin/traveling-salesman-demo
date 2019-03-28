import React from 'react';
import { shallow } from 'enzyme';

import DemoAnswer from '../DemoAnswer';

describe('<DemoAnswer />', () => {
  it('子コンポーネントをレンダリングすること', () => {
    // setup
    const props = {} as any;

    // exercise
    const wrapper = shallow(<DemoAnswer {...props} />);

    // verify
    expect(wrapper.find('DemoAnswerMark').length).toBe(1);
    expect(wrapper.find('DemoRoutesList').length).toBe(1);
    expect(wrapper.find('DemoButton').length).toBe(1);
    expect(wrapper.find('DemoAnswerMap').length).toBe(1);
    expect(wrapper.find('DemoGross').length).toBe(1);

    // snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
