import React from 'react';
import { shallow } from 'enzyme';

import DemoAnswerMark from '../DemoAnswerMark';

describe('<DemoAnswerMark />', () => {
  it('answerWaypointOrderが空の場合、何も表示されないこと', () => {
    // setup
    const props = {
      answerWaypointOrder: [],
    };
    const expected = '';

    // exercise
    const wrapper = shallow(<DemoAnswerMark {...props} />);

    // verify
    expect(wrapper.find('.DemoAnswerMark').text()).toEqual(expected);
    expect(wrapper).toMatchSnapshot();
  });

  it('answerWaypointOrderが[0, 1, 2, 3, 4, 5, 6, 7]の場合、「正 解」が表示されること', () => {
    // setup
    const props = {
      answerWaypointOrder: [0, 1, 2, 3, 4, 5, 6, 7],
    };
    const expected = '😃正 解';

    // exercise
    const wrapper = shallow(<DemoAnswerMark {...props} />);

    // verify
    expect(wrapper.find('.DemoAnswerMark').text()).toBe(expected);
    expect(wrapper).toMatchSnapshot();
  });

  it('answerWaypointOrderが[0, 1, 2, 3]の場合、「正 解」が表示されること', () => {
    // setup
    const props = {
      answerWaypointOrder: [0, 1, 2, 3],
    };
    const expected = '😃正 解';

    // exercise
    const wrapper = shallow(<DemoAnswerMark {...props} />);

    // verify
    expect(wrapper.find('.DemoAnswerMark').text()).toBe(expected);
    expect(wrapper).toMatchSnapshot();
  });

  it('answerWaypointOrderが[0, 1, 2, 3, 4, 5, 6, 7]でない場合、「残 念」が表示されること', () => {
    // setup
    const props = {
      answerWaypointOrder: [1, 0, 3, 4, 7, 2, 5, 6],
    };
    const expected = '😣残 念';

    // exercise
    const wrapper = shallow(<DemoAnswerMark {...props} />);

    // verify
    expect(wrapper.find('.DemoAnswerMark').text()).toEqual(expected);
    expect(wrapper).toMatchSnapshot();
  });
});
