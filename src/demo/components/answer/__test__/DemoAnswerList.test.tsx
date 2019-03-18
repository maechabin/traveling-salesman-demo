import React from 'react';
import { shallow } from 'enzyme';

import DemoAnswerList from '../DemoAnswerList';

describe('<DemoAnswerList />', () => {
  const departure = {
    title: '根津神社',
    lat: 35.7202332,
    lng: 139.76073810000003,
    label: '出発地',
  };
  const arrival = { title: '勝どき駅', lat: 35.6589788, lng: 139.77714949999995, label: '到着地' };

  it('経路リストの要素が全て表示されること', () => {
    const answerWaypointOrder = [5, 3, 1, 6, 7, 2, 0, 4];
    const list = [
      {
        id: 1,
        title: '秋葉原駅',
        lat: 35.698353,
        lng: 139.77311429999997,
        label: '経路A',
        sortId: 0,
      },
      { id: 2, title: '文京区役所', lat: 35.7080677, lng: 139.752167, label: '経路B', sortId: 0 },
      { id: 3, title: '明治大学', lat: 35.6972422, lng: 139.7615346, label: '経路C', sortId: 0 },
      {
        id: 4,
        title: '浜離宮',
        lat: 35.6597374,
        lng: 139.76349249999998,
        label: '経路D',
        sortId: 0,
      },
      {
        id: 5,
        title: '国会議事堂',
        lat: 35.675888,
        lng: 139.74485800000002,
        label: '経路E',
        sortId: 0,
      },
      {
        id: 6,
        title: '東京タワー',
        lat: 35.6585805,
        lng: 139.745432899999977,
        label: '経路F',
        sortId: 0,
      },
      {
        id: 7,
        title: '上野動物園',
        lat: 35.7164535,
        lng: 139.77131770000005,
        label: '経路G',
        sortId: 0,
      },
      {
        id: 8,
        title: '東京駅',
        lat: 35.6811673,
        lng: 139.76705160000006,
        label: '経路H',
        sortId: 0,
      },
    ];
    const wrapper = shallow(
      <DemoAnswerList
        routes={list}
        departure={departure}
        arrival={arrival}
        answerWaypointOrder={answerWaypointOrder}
      />,
    );
    expect(wrapper.find('.DemoAnswerListRoutes').children().length).toBe(8);
  });

  it('answerWaypointOrderの順番で経路リストがソートされること', () => {
    const answerWaypointOrder = [5, 3, 1, 6, 7, 2, 0, 4];
    const list = [
      {
        id: 1,
        title: '秋葉原駅',
        lat: 35.698353,
        lng: 139.77311429999997,
        label: '経路A',
        sortId: 0,
      },
      { id: 2, title: '文京区役所', lat: 35.7080677, lng: 139.752167, label: '経路B', sortId: 0 },
      { id: 3, title: '明治大学', lat: 35.6972422, lng: 139.7615346, label: '経路C', sortId: 0 },
      {
        id: 4,
        title: '浜離宮',
        lat: 35.6597374,
        lng: 139.76349249999998,
        label: '経路D',
        sortId: 0,
      },
      {
        id: 5,
        title: '国会議事堂',
        lat: 35.675888,
        lng: 139.74485800000002,
        label: '経路E',
        sortId: 0,
      },
      {
        id: 6,
        title: '東京タワー',
        lat: 35.6585805,
        lng: 139.745432899999977,
        label: '経路F',
        sortId: 0,
      },
      {
        id: 7,
        title: '上野動物園',
        lat: 35.7164535,
        lng: 139.77131770000005,
        label: '経路G',
        sortId: 0,
      },
      {
        id: 8,
        title: '東京駅',
        lat: 35.6811673,
        lng: 139.76705160000006,
        label: '経路H',
        sortId: 0,
      },
    ];
    const wrapper = shallow(
      <DemoAnswerList
        routes={list}
        departure={departure}
        arrival={arrival}
        answerWaypointOrder={answerWaypointOrder}
      />,
    );
    expect(wrapper.find('.DemoAnswerListRoutes').text()).toBe(
      '経路F:東京タワー経路D:浜離宮経路B:文京区役所経路G:上野動物園経路H:東京駅経路C:明治大学経路A:秋葉原駅経路E:国会議事堂',
    );
  });
});
