import React from 'react';
import { shallow } from 'enzyme';

import { Step } from '../../../../state.model';
import DemoQuestionMap from '../DemoQuestionMap';

jest.mock('../../../../utils/Map', () => {
  return jest.fn().mockImplementation(() => {
    return {
      initMap: jest.fn(),
      initPolyLine: jest.fn(),
      initMarker: jest.fn(),
    };
  });
});

describe('<DemoQuestionMap />', () => {
  it('snapshot', () => {
    // setup
    const props = {
      dispatchUpdateQuestionStep: () => jest.fn(),
    } as any;

    // exercise
    const wrapper = shallow(<DemoQuestionMap {...props} />);

    // verify
    expect(wrapper).toMatchSnapshot();
  });

  it('componentDidMount', () => {
    // setup
    const props = {
      dispatchUpdateQuestionStep: () => jest.fn(),
    } as any;
    const demoQuestionMap = new DemoQuestionMap(props);
    const initSpy = jest.spyOn(demoQuestionMap, 'init');
    const dispatchUpdateQuestionStepSpy = jest.spyOn(
      demoQuestionMap.props,
      'dispatchUpdateQuestionStep',
    );

    // exercise
    demoQuestionMap.componentDidMount();

    // verify
    expect(initSpy).toHaveBeenCalled();
    expect(dispatchUpdateQuestionStepSpy).toHaveBeenCalledWith(Step.Start);
  });

  describe('domponentDidUpdate', () => {
    it('Step.Initial', () => {
      // setup
      const props = {
        questionStep: Step.Initial,
        dispatchUpdateQuestionStep: () => jest.fn(),
      } as any;
      const demoQuestionMap = new DemoQuestionMap(props);
      const initSpy = jest.spyOn(demoQuestionMap, 'init');
      const dispatchUpdateQuestionStepSpy = jest.spyOn(
        demoQuestionMap.props,
        'dispatchUpdateQuestionStep',
      );

      // exercise
      demoQuestionMap.componentDidUpdate();

      // verify
      expect(initSpy).toHaveBeenCalled();
      expect(dispatchUpdateQuestionStepSpy).toHaveBeenCalledWith(Step.Start);
    });

    it('Step.Edit', () => {
      // setup
      const props = {
        questionStep: Step.Edit,
        dispatchUpdateQuestionStep: () => jest.fn(),
      } as any;
      const demoQuestionMap = new DemoQuestionMap(props);
      const initSpy = jest.spyOn(demoQuestionMap, 'init');

      // exercise
      demoQuestionMap.componentDidUpdate();

      // verify
      expect(initSpy).toHaveBeenCalled();
    });

    it('Step.Select', () => {
      // setup
      const props = {
        questionStep: Step.Select,
        dispatchUpdateQuestionStep: () => jest.fn(),
      } as any;
      const demoQuestionMap = new DemoQuestionMap(props);
      const initPolyLineSpy = jest.spyOn(demoQuestionMap.map, 'initPolyLine');
      const initMarkerSpy = jest.spyOn(demoQuestionMap.map, 'initMarker');

      // exercise
      demoQuestionMap.componentDidUpdate();

      // verify
      expect(initPolyLineSpy).toHaveBeenCalledWith(props);
      expect(initMarkerSpy).toHaveBeenCalledWith(props);
    });
  });

  it('init', () => {
    // setup
    const props = {
      departure: 'AAA',
    } as any;
    const demoQuestionMap = new DemoQuestionMap(props);
    const initMapSpy = jest.spyOn(demoQuestionMap.map, 'initMap');
    const initMarkerSpy = jest.spyOn(demoQuestionMap.map, 'initMarker');

    // exercise
    demoQuestionMap.init();

    // verify
    expect(initMapSpy).toHaveBeenCalledWith(demoQuestionMap.gmapsRef.current, props.departure);
    expect(initMarkerSpy).toHaveBeenCalledWith(props);
  });
});
