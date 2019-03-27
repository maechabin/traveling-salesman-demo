import React from 'react';
import { shallow } from 'enzyme';

import Demo from '../Demo';
import { Step } from '../../../state.model';

describe('<Demo />', () => {
  it('questionStepがStep.Answerの場合、<DemoAnswer />がレンダリングされること', () => {
    // setup
    const props = {
      questionStep: Step.Answer,
    } as any;

    // exercise
    const wrapper = shallow(<Demo {...props} />);

    // verify
    expect(wrapper.find('DemoAnswer').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('questionStepがStep.Initialの場合、<DemoDescription />がレンダリングされること', () => {
    // setup
    const props = {
      questionStep: Step.Initial,
    } as any;

    // exercise
    const wrapper = shallow(<Demo {...props} />);

    // verify
    expect(wrapper.find('DemoDescription').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('questionStepがStep.Initialの場合、<DemoEdit />がレンダリングされること', () => {
    // setup
    const props = {
      questionStep: Step.Edit,
    } as any;

    // exercise
    const wrapper = shallow(<Demo {...props} />);

    // verify
    expect(wrapper.find('DemoEdit').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
