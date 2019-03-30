import React from 'react';
import { shallow } from 'enzyme';

import { Route } from '../../../../state.model';
import DemoEditRoutes from '../DemoEditRoutes';

describe('<DemoDescription />', () => {
  it('snapshot', () => {
    // setup
    const routes: Route[] = [
      { id: 1, title: '秋葉原駅', lat: 111, lng: 111, label: 'A', sortId: 5 },
      { id: 2, title: '文京区役所', lat: 222, lng: 222, label: 'B', sortId: 4 },
      { id: 3, title: '明治大学', lat: 333, lng: 333, label: 'C', sortId: 1 },
      { id: 4, title: '浜離宮', lat: 444, lng: 444, label: 'D', sortId: 2 },
      { id: 5, title: '国会議事堂', lat: 555, lng: 555, label: 'E', sortId: 8 },
      { id: 6, title: '東京タワー', lat: 666, lng: 666, label: 'F', sortId: 3 },
      { id: 7, title: '上野動物園', lat: 777, lng: 777, label: 'G', sortId: 7 },
      { id: 8, title: '東京駅', lat: 888, lng: 888, label: 'H', sortId: 6 },
    ];
    const callbackSpy = jest.fn();
    const props = {
      callback: callbackSpy,
      routes,
    };

    // exercise
    const wrapper = shallow(<DemoEditRoutes {...props} />);

    // verify
    expect(wrapper).toMatchSnapshot();
  });

  it('handleChange', () => {
    // setup
    const routes: Route[] = [
      { id: 1, title: '秋葉原駅', lat: 111, lng: 111, label: 'A', sortId: 5 },
      { id: 2, title: '文京区役所', lat: 222, lng: 222, label: 'B', sortId: 4 },
      { id: 3, title: '明治大学', lat: 333, lng: 333, label: 'C', sortId: 1 },
      { id: 4, title: '浜離宮', lat: 444, lng: 444, label: 'D', sortId: 2 },
      { id: 5, title: '国会議事堂', lat: 555, lng: 555, label: 'E', sortId: 8 },
      { id: 6, title: '東京タワー', lat: 666, lng: 666, label: 'F', sortId: 3 },
      { id: 7, title: '上野動物園', lat: 777, lng: 777, label: 'G', sortId: 7 },
      { id: 8, title: '東京駅', lat: 888, lng: 888, label: 'H', sortId: 6 },
    ];
    const callbackSpy = jest.fn();
    const props = {
      callback: callbackSpy,
      routes,
    };
    const event = 'event';
    const wrapper = shallow(<DemoEditRoutes {...props} />);

    // exercise
    wrapper.find('input').forEach((input, index) => {
      input.simulate('change', event);

      // verify
      expect(callbackSpy).toHaveBeenCalledWith(event, index + 1);
    });
  });
});
