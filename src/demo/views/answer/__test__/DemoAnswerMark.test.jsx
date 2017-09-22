import React from 'react';
import { shallow } from 'enzyme';

import DemoAnswerMark from '../DemoAnswerMark';

describe('<DemoAnswerMark />', () => {
  it('answerWaypointOrderの要素数が0の場合、何も表示されないこと', () => {
    const answerWaypointOrder = [];
    const wrapper = shallow(<DemoAnswerMark answerWaypointOrder={answerWaypointOrder} />);
    expect(wrapper.find('.DemoAnswerMark').text()).toEqual('');
  });

  it('answerWaypointOrderの値が[0, 1, 2, 3, 4, 5, 6, 7]の場合、「正解」と表示されること', () => {
    const answerWaypointOrder = [0, 1, 2, 3, 4, 5, 6, 7];
    const display = '◎ 正解';
    const wrapper = shallow(<DemoAnswerMark answerWaypointOrder={answerWaypointOrder} />);
    expect(wrapper.find('.DemoAnswerMark').text()).toEqual(display);
  });

  it('answerWaypointOrderの値が[0, 1, 2, 3, 4, 5, 6, 7]でない場合、「不正解」と表示されること', () => {
    const answerWaypointOrder = [1, 0, 3, 4, 7, 2, 5, 6];
    const display = '× 不正解';
    const wrapper = shallow(<DemoAnswerMark answerWaypointOrder={answerWaypointOrder} />);
    expect(wrapper.find('.DemoAnswerMark').text()).toEqual(display);
  });
});
