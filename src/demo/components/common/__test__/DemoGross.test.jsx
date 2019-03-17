import React from 'react';
import { shallow } from 'enzyme';

import DemoGross from '../DemoGross';

describe('<DemoGross />', () => {
  it('propsから受け取った総距離、総時間を表示すること', () => {
    const gross = {
      distance: 300,
      duration: 100,
    };
    const wrapper = shallow(<DemoGross gross={gross} />);
    expect(wrapper.childAt(0).text()).toBe('総距離: 300km / 総時間: 100分');
  });
});
