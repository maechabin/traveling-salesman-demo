import React from 'react';
import { shallow } from 'enzyme';

import { Route } from '../../../../state.model';
import DemoQuestion from '../DemoQuestion';

describe('<DemoQuestion />', () => {
  it('子コンポーネントをレンダリングすること', () => {
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
    const props = {
      routes,
    } as any;

    // exercise
    const wrapper = shallow(<DemoQuestion {...props} />);

    // verify
    expect(wrapper.find('DemoQuestionMap').length).toBe(1);
    expect(wrapper.find('DemoGross').length).toBe(1);
    expect(wrapper.find('DemoQuestionOptions').length).toBe(1);
    expect(wrapper.find('DemoRoutesList').length).toBe(1);
    expect(wrapper.find('DemoButton').length).toBe(1);

    // snapshot
    expect(wrapper).toMatchSnapshot();
  });

  it('経路リストにsortIdが付与されていない場合、Id順（昇順）に表示されること', () => {
    // setup
    const routes: Route[] = [
      { id: 1, title: '秋葉原駅', lat: 111, lng: 111, label: 'A', sortId: 0 },
      { id: 2, title: '文京区役所', lat: 222, lng: 222, label: 'B', sortId: 0 },
      { id: 3, title: '明治大学', lat: 333, lng: 333, label: 'C', sortId: 0 },
      { id: 4, title: '浜離宮', lat: 444, lng: 444, label: 'D', sortId: 0 },
      { id: 5, title: '国会議事堂', lat: 555, lng: 555, label: 'E', sortId: 0 },
      { id: 6, title: '東京タワー', lat: 666, lng: 666, label: 'F', sortId: 0 },
      { id: 7, title: '上野動物園', lat: 777, lng: 777, label: 'G', sortId: 0 },
      { id: 8, title: '東京駅', lat: 888, lng: 888, label: 'H', sortId: 0 },
    ];
    const props = {
      routes,
    } as any;
    const wrapper = shallow(<DemoQuestion {...props} />);
    const recieved = (wrapper.find('DemoRoutesList').props() as any).routes.map((route: Route) => {
      return route.id;
    });
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];

    // verify
    expect(recieved).toEqual(expected);
  });

  it('経路リストにsortIdが付与されていた場合、sortId順（降順）に表示されること', () => {
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
    const props = {
      routes,
    } as any;
    const wrapper = shallow(<DemoQuestion {...props} />);
    const recieved = (wrapper.find('DemoRoutesList').props() as any).routes.map((route: Route) => {
      return route.id;
    });
    const expected = [5, 7, 8, 1, 2, 6, 4, 3];

    // verify
    expect(recieved).toEqual(expected);
  });

  it('sortIdが0以上であった場合、sortIdが優先してソートされること', () => {
    // setup
    const routes: Route[] = [
      { id: 1, title: '秋葉原駅', lat: 111, lng: 111, label: 'A', sortId: 0 },
      { id: 2, title: '文京区役所', lat: 222, lng: 222, label: 'B', sortId: 0 },
      { id: 3, title: '明治大学', lat: 333, lng: 333, label: 'C', sortId: 0 },
      { id: 4, title: '浜離宮', lat: 444, lng: 444, label: 'D', sortId: 0 },
      { id: 5, title: '国会議事堂', lat: 555, lng: 555, label: 'E', sortId: 8 },
      { id: 6, title: '東京タワー', lat: 666, lng: 666, label: 'F', sortId: 0 },
      { id: 7, title: '上野動物園', lat: 777, lng: 777, label: 'G', sortId: 7 },
      { id: 8, title: '東京駅', lat: 888, lng: 888, label: 'H', sortId: 6 },
    ];
    const props = {
      routes,
    } as any;
    const wrapper = shallow(<DemoQuestion {...props} />);
    const recieved = (wrapper.find('DemoRoutesList').props() as any).routes.map((route: Route) => {
      return route.id;
    });
    const expected = [5, 7, 8, 1, 2, 3, 4, 6];

    // verify
    expect(recieved).toEqual(expected);
  });
});
