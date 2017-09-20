import React from 'react';
import { shallow } from 'enzyme';

import DemoAnswerMark from '../DemoAnswerMark';

describe('<DemoAnswerMark />', () => {
  it('answerGross.durationが0の場合、何も表示されないこと', () => {
    const gross = {
      distance: 0,
      duration: 0,
    };
    const answerGross = {
      distance: 0,
      duration: 0,
    };
    const wrapper = shallow(<DemoAnswerMark gross={gross} answerGross={answerGross} />);
    expect(wrapper.find('.DemoAnswerMark').text()).toEqual('');
  });

  it('gross.duratioの値とanswerGross.durationの値が等しい場合、「正解」と表示されること', () => {
    const gross = {
      distance: 100,
      duration: 200,
    };
    const answerGross = {
      distance: 100,
      duration: 200,
    };
    const display = '◎ 正解';
    const wrapper = shallow(<DemoAnswerMark gross={gross} answerGross={answerGross} />);
    expect(wrapper.find('.DemoAnswerMark').text()).toEqual(display);
  });

  it('gross.duratioの値とanswerGross.durationの値が等しい場合、「不正解」と表示されること', () => {
    const gross = {
      distance: 100,
      duration: 200,
    };
    const answerGross = {
      distance: 100,
      duration: 201,
    };
    const display = '× 不正解';
    const wrapper = shallow(<DemoAnswerMark gross={gross} answerGross={answerGross} />);
    expect(wrapper.find('.DemoAnswerMark').text()).toEqual(display);
  });
});
