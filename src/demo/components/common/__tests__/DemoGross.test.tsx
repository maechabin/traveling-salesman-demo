import React from 'react';
import { shallow } from 'enzyme';

import DemoGross from '../DemoGross';

describe('<DemoGross />', () => {
  it('propsから受け取った総距離/総時間の値を表示すること', () => {
    // setup
    const props = {
      gross: {
        distance: 300,
        duration: 100,
      },
    };

    // exercise
    const wrapper = shallow(<DemoGross {...props} />);

    // verify
    expect(wrapper.childAt(0).text()).toBe(
      `総距離: ${props.gross.distance}km / 総時間: ${props.gross.duration}分`,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
