import React from 'react';
import { shallow } from 'enzyme';

import * as Option from '../../../../constants/option';
import { Expressway, Traffic, Transport, Step } from '../../../../state.model';
import DemoQuestionOptions from '../DemoQuestionOptions';

describe('<DemoQuestionOptions />', () => {
  it('init - snapshot', () => {
    // setup
    const props = {
      transport: Transport.Car,
      expressway: Expressway.Yes,
      traffic: Traffic.Standard,
      questionStep: Step.Initial,
    } as any;
    const wrapper = shallow(<DemoQuestionOptions {...props} />);

    // verify
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    const dispatchUpdateQuestionOptionSpy = jest.fn();
    const props = {
      dispatchUpdateQuestionOption: dispatchUpdateQuestionOptionSpy,
    } as any;

    describe('移動手段', () => {
      it('#transport-car', () => {
        // setup
        const event = {
          currentTarget: {
            name: Option.TRANSPORT,
            value: Transport.Car,
          },
        };
        const wrapper = shallow(<DemoQuestionOptions {...props} />);

        // exercise
        wrapper.find('#transport-car').simulate('change', event);

        // verify
        expect(dispatchUpdateQuestionOptionSpy).toHaveBeenCalledWith(event.currentTarget);
      });

      it('#transport-walk', () => {
        // setup
        const event = {
          currentTarget: {
            name: Option.TRANSPORT,
            value: Transport.Walk,
          },
        };
        const wrapper = shallow(<DemoQuestionOptions {...props} />);

        // exercise
        wrapper.find('#transport-walk').simulate('change', event);

        // verify
        expect(dispatchUpdateQuestionOptionSpy).toHaveBeenCalledWith(event.currentTarget);
      });
    });

    it('移動手段', () => {
      // setup
      const event = {
        currentTarget: {
          name: Option.EXPRESSWAY,
          value: Expressway.Yes,
        },
      };
      const wrapper = shallow(<DemoQuestionOptions {...props} />);

      // exercise
      wrapper.find('#expressway').simulate('change', event);

      // verify
      expect(dispatchUpdateQuestionOptionSpy).toHaveBeenCalledWith(event.currentTarget);
    });

    it('交通量の見積もり', () => {
      // setup
      const event = {
        currentTarget: {
          name: Option.TRAFFIC,
          value: Traffic.Standard,
        },
      };
      const wrapper = shallow(<DemoQuestionOptions {...props} />);

      // exercise
      wrapper.find('#traffic-standard').simulate('change', event);

      // verify
      expect(dispatchUpdateQuestionOptionSpy).toHaveBeenCalledWith(event.currentTarget);
    });

    describe('交通量の見積もりの項目', () => {
      it('#traffic-bestguess', () => {
        // setup
        const event = {
          currentTarget: {
            name: Option.TRAFFIC,
            value: Traffic.Bestguess,
          },
        };
        const wrapper = shallow(<DemoQuestionOptions {...props} />);

        // exercise
        wrapper.find('#traffic-bestguess').simulate('change', event);

        // verify
        expect(dispatchUpdateQuestionOptionSpy).toHaveBeenCalledWith(event.currentTarget);
      });

      it('#traffic-optimistic', () => {
        // setup
        const event = {
          currentTarget: {
            name: Option.TRAFFIC,
            value: Traffic.Optimistic,
          },
        };
        const wrapper = shallow(<DemoQuestionOptions {...props} />);

        // exercise
        wrapper.find('#traffic-optimistic').simulate('change', event);

        // verify
        expect(dispatchUpdateQuestionOptionSpy).toHaveBeenCalledWith(event.currentTarget);
      });

      it('#traffic-pessimistic', () => {
        // setup
        const event = {
          currentTarget: {
            name: Option.TRAFFIC,
            value: Traffic.Pessimistic,
          },
        };
        const wrapper = shallow(<DemoQuestionOptions {...props} />);

        // exercise
        wrapper.find('#traffic-pessimistic').simulate('change', event);

        // verify
        expect(dispatchUpdateQuestionOptionSpy).toHaveBeenCalledWith(event.currentTarget);
      });
    });
  });

  describe('disabled', () => {
    it('questionStepがEdit未満でtransportがcarの場合、全ての選択肢が選択可能であること', () => {
      // setup
      const props = {
        transport: Transport.Car,
        questionStep: Step.Initial,
      } as any;
      const wrapper = shallow(<DemoQuestionOptions {...props} />);

      // verify
      expect(wrapper.find('#transport-car').props().disabled).toEqual(false);
      expect(wrapper.find('#transport-walk').props().disabled).toEqual(false);
      expect(wrapper.find('#expressway').props().disabled).toEqual(false);
      expect(wrapper.find('#traffic-standard').props().disabled).toEqual(false);
      expect(wrapper.find('#traffic-bestguess').props().disabled).toEqual(false);
      expect(wrapper.find('#traffic-optimistic').props().disabled).toEqual(false);
      expect(wrapper.find('#traffic-pessimistic').props().disabled).toEqual(false);
    });

    it('questionStepがEdit未満でtransportがwalkの場合、expresswayとtrafficの選択肢がdisabledであること', () => {
      // setup
      const props = {
        transport: Transport.Walk,
        questionStep: Step.Initial,
      } as any;
      const wrapper = shallow(<DemoQuestionOptions {...props} />);

      // verify
      expect(wrapper.find('#transport-car').props().disabled).toEqual(false);
      expect(wrapper.find('#transport-walk').props().disabled).toEqual(false);
      expect(wrapper.find('#expressway').props().disabled).toEqual(true);
      expect(wrapper.find('#traffic-standard').props().disabled).toEqual(true);
      expect(wrapper.find('#traffic-bestguess').props().disabled).toEqual(true);
      expect(wrapper.find('#traffic-optimistic').props().disabled).toEqual(true);
      expect(wrapper.find('#traffic-pessimistic').props().disabled).toEqual(true);
    });

    it('questionStepがEdit以上の場合、全ての選択肢がdisabledであること', () => {
      // setup
      const props = {
        questionStep: Step.Edit,
      } as any;
      const wrapper = shallow(<DemoQuestionOptions {...props} />);

      // verify
      expect(wrapper.find('#transport-car').props().disabled).toEqual(true);
      expect(wrapper.find('#transport-walk').props().disabled).toEqual(true);
      expect(wrapper.find('#expressway').props().disabled).toEqual(true);
      expect(wrapper.find('#traffic-standard').props().disabled).toEqual(true);
      expect(wrapper.find('#traffic-bestguess').props().disabled).toEqual(true);
      expect(wrapper.find('#traffic-optimistic').props().disabled).toEqual(true);
      expect(wrapper.find('#traffic-pessimistic').props().disabled).toEqual(true);
    });
  });

  describe('checked', () => {
    it('transportがwalkの場合、expresswayのチェックが外れていること', () => {
      // setup
      const props = {
        questionStep: Step.Initial,
        transport: Transport.Walk,
      } as any;
      const wrapper = shallow(<DemoQuestionOptions {...props} />);

      // verify
      expect(wrapper.find('#expressway').props().checked).toEqual(false);
    });

    it('transportがwalkの場合、trafficは「しない」を選択していること', () => {
      // setup
      const props = {
        questionStep: Step.Initial,
        transport: Transport.Walk,
      } as any;
      const wrapper = shallow(<DemoQuestionOptions {...props} />);

      // verify
      expect(wrapper.find('#traffic-standard').props().checked).toEqual(true);
    });
  });
});
