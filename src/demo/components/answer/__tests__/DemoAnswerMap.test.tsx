import React from 'react';
import { shallow } from 'enzyme';

import DemoAnswerMap from '../DemoAnswerMap';

jest.mock('../../../../utils/Map', () => {
  return jest.fn().mockImplementation(() => {
    return {
      initMap: jest.fn(),
      initAnswerPolyLine: jest.fn(),
      initMarker: jest.fn(),
    };
  });
});

describe('<DemoAnswerMap />', () => {
  it('snapshot', () => {
    // setup
    const props = {} as any;

    // exercise
    const wrapper = shallow(<DemoAnswerMap {...props} />);

    // verify
    expect(wrapper).toMatchSnapshot();
  });

  it('componentDidMount', () => {
    // setup
    const props = {} as any;
    const demoAnswerMap = new DemoAnswerMap(props);
    const initSpy = jest.spyOn(demoAnswerMap, 'init');

    // exercise
    demoAnswerMap.componentDidMount();

    // verify
    expect(initSpy).toHaveBeenCalled();
  });

  it('init', () => {
    // setup
    const props = {
      departure: 'AAA',
    } as any;
    const demoAnswerMap = new DemoAnswerMap(props);
    const initMapSpy = jest.spyOn(demoAnswerMap.map, 'initMap');
    const initAnswerPolyLineSpy = jest.spyOn(demoAnswerMap.map, 'initAnswerPolyLine');
    const initMarkerSpy = jest.spyOn(demoAnswerMap.map, 'initMarker');

    // exercise
    demoAnswerMap.init();

    // verify
    expect(initMapSpy).toHaveBeenCalledWith(demoAnswerMap.gmapsRef.current, props.departure);
    expect(initAnswerPolyLineSpy).toHaveBeenCalledWith(props);
    expect(initMarkerSpy).toHaveBeenCalledWith(props);
  });
});
