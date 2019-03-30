import React from 'react';
import { shallow } from 'enzyme';

import { Route, Position } from '../../../../state.model';
import DemoEdit from '../DemoEdit';

describe('<DemoEdit />', () => {
  it('子コンポーネントをレンダリングすること', () => {
    // setup
    const departure: Position = {
      title: '山王パークタワー',
      lat: 35.6731652,
      lng: 139.7407961,
      label: '発',
    };
    const arrival: Position = {
      title: '六本木ヒルズ森タワー',
      lat: 35.6604638,
      lng: 139.72924869999997,
      label: '着',
    };
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
    const props = {
      departure,
      arrival,
      routesCache: routes,
    } as any;

    // exercise
    const wrapper = shallow(<DemoEdit {...props} />);

    // verify
    expect(wrapper.find('DemoEditText').length).toBe(1);
    expect(wrapper.find('DemoEditDepartureArrival').length).toBe(2);
    expect(wrapper.find('DemoEditRoutes').length).toBe(1);
    expect(wrapper.find('DemoButton').length).toBe(2);

    // snapshot
    expect(wrapper).toMatchSnapshot();
  });
});
