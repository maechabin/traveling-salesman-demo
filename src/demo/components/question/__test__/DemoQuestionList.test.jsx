import React from 'react';
import { shallow } from 'enzyme';

import DemoQuestionList from '../DemoQuestionList';

describe('<DemoQuestionList />', () => {
  const departure = { title: '根津神社', lat: 35.7202332, lng: 139.76073810000003, label: '出発地' };
  const arrival = { title: '勝どき駅', lat: 35.6589788, lng: 139.77714949999995, label: '到着地' };

  it('経路リストの要素が全て表示されること', () => {
    const list = [
      { id: 1, title: '秋葉原駅', lat: 35.698353, lng: 139.77311429999997, label: '経路A', sortId: 0 },
      { id: 2, title: '文京区役所', lat: 35.7080677, lng: 139.752167, label: '経路B', sortId: 0 },
      { id: 3, title: '明治大学', lat: 35.6972422, lng: 139.7615346, label: '経路C', sortId: 0 },
      { id: 4, title: '浜離宮', lat: 35.6597374, lng: 139.76349249999998, label: '経路D', sortId: 0 },
      { id: 5, title: '国会議事堂', lat: 35.675888, lng: 139.74485800000002, label: '経路E', sortId: 0 },
      { id: 6, title: '東京タワー', lat: 35.6585805, lng: 139.745432899999977, label: '経路F', sortId: 0 },
      { id: 7, title: '上野動物園', lat: 35.7164535, lng: 139.77131770000005, label: '経路G', sortId: 0 },
      { id: 8, title: '東京駅', lat: 35.6811673, lng: 139.76705160000006, label: '経路H', sortId: 0 },
    ];
    const answerWaypointOrder = [];
    const wrapper = shallow(
      <DemoQuestionList
        routes={list}
        departure={departure}
        arrival={arrival}
        answerWaypointOrder={answerWaypointOrder}
      />,
    );
    expect(wrapper.find('.DemoQuestionListRoutes').children().length).toBe(8);
  });

  it('sortIdが0であればDemoQuestionListNotSorted、sortIdが0以上であればDemoQuestionListSortedがclass名として付与されること', () => {
    const list = [
      { id: 1, title: '秋葉原駅', lat: 35.698353, lng: 139.77311429999997, label: '経路A', sortId: 0 },
      { id: 2, title: '文京区役所', lat: 35.7080677, lng: 139.752167, label: '経路B', sortId: 0 },
      { id: 3, title: '明治大学', lat: 35.6972422, lng: 139.7615346, label: '経路C', sortId: 0 },
      { id: 4, title: '浜離宮', lat: 35.6597374, lng: 139.76349249999998, label: '経路D', sortId: 0 },
      { id: 5, title: '国会議事堂', lat: 35.675888, lng: 139.74485800000002, label: '経路E', sortId: 8 },
      { id: 6, title: '東京タワー', lat: 35.6585805, lng: 139.745432899999977, label: '経路F', sortId: 0 },
      { id: 7, title: '上野動物園', lat: 35.7164535, lng: 139.77131770000005, label: '経路G', sortId: 7 },
      { id: 8, title: '東京駅', lat: 35.6811673, lng: 139.76705160000006, label: '経路H', sortId: 6 },
    ];
    const answerWaypointOrder = [];
    const wrapper = shallow(
      <DemoQuestionList
        routes={list}
        departure={departure}
        arrival={arrival}
        answerWaypointOrder={answerWaypointOrder}
      />,
    );
    expect(wrapper.find('.DemoQuestionListNotSorted').length).toBe(5);
    expect(wrapper.find('.DemoQuestionListSorted').length).toBe(3);
  });

  it('経路リストにsortIdが付与されていない場合、Id順（昇順）に表示されること', () => {
    const list = [
      { id: 1, title: '秋葉原駅', lat: 35.698353, lng: 139.77311429999997, label: '経路A', sortId: 0 },
      { id: 2, title: '文京区役所', lat: 35.7080677, lng: 139.752167, label: '経路B', sortId: 0 },
      { id: 3, title: '明治大学', lat: 35.6972422, lng: 139.7615346, label: '経路C', sortId: 0 },
      { id: 4, title: '浜離宮', lat: 35.6597374, lng: 139.76349249999998, label: '経路D', sortId: 0 },
      { id: 5, title: '国会議事堂', lat: 35.675888, lng: 139.74485800000002, label: '経路E', sortId: 0 },
      { id: 6, title: '東京タワー', lat: 35.6585805, lng: 139.745432899999977, label: '経路F', sortId: 0 },
      { id: 7, title: '上野動物園', lat: 35.7164535, lng: 139.77131770000005, label: '経路G', sortId: 0 },
      { id: 8, title: '東京駅', lat: 35.6811673, lng: 139.76705160000006, label: '経路H', sortId: 0 },
    ];
    const answerWaypointOrder = [];
    const wrapper = shallow(
      <DemoQuestionList
        routes={list}
        departure={departure}
        arrival={arrival}
        answerWaypointOrder={answerWaypointOrder}
      />,
    );
    expect(wrapper.find('.DemoQuestionListRoutes').text()).toBe('経路A:秋葉原駅経路B:文京区役所経路C:明治大学経路D:浜離宮経路E:国会議事堂経路F:東京タワー経路G:上野動物園経路H:東京駅');
  });

  it('経路リストにsortIdが付与されていた場合、sortId順（降順）に表示されること', () => {
    const list = [
      { id: 1, title: '秋葉原駅', lat: 35.698353, lng: 139.77311429999997, label: '経路A', sortId: 5 },
      { id: 2, title: '文京区役所', lat: 35.7080677, lng: 139.752167, label: '経路B', sortId: 4 },
      { id: 3, title: '明治大学', lat: 35.6972422, lng: 139.7615346, label: '経路C', sortId: 1 },
      { id: 4, title: '浜離宮', lat: 35.6597374, lng: 139.76349249999998, label: '経路D', sortId: 2 },
      { id: 5, title: '国会議事堂', lat: 35.675888, lng: 139.74485800000002, label: '経路E', sortId: 8 },
      { id: 6, title: '東京タワー', lat: 35.6585805, lng: 139.745432899999977, label: '経路F', sortId: 3 },
      { id: 7, title: '上野動物園', lat: 35.7164535, lng: 139.77131770000005, label: '経路G', sortId: 7 },
      { id: 8, title: '東京駅', lat: 35.6811673, lng: 139.76705160000006, label: '経路H', sortId: 6 },
    ];
    const answerWaypointOrder = [];
    const wrapper = shallow(
      <DemoQuestionList
        routes={list}
        departure={departure}
        arrival={arrival}
        answerWaypointOrder={answerWaypointOrder}
      />,
    );
    expect(wrapper.find('.DemoQuestionListRoutes').text()).toBe('経路E:国会議事堂経路G:上野動物園経路H:東京駅経路A:秋葉原駅経路B:文京区役所経路F:東京タワー経路D:浜離宮経路C:明治大学');
  });

  it('sortIdが0以上であった場合、sortIdが優先してソートされること', () => {
    const list = [
      { id: 1, title: '秋葉原駅', lat: 35.698353, lng: 139.77311429999997, label: '経路A', sortId: 0 },
      { id: 2, title: '文京区役所', lat: 35.7080677, lng: 139.752167, label: '経路B', sortId: 0 },
      { id: 3, title: '明治大学', lat: 35.6972422, lng: 139.7615346, label: '経路C', sortId: 0 },
      { id: 4, title: '浜離宮', lat: 35.6597374, lng: 139.76349249999998, label: '経路D', sortId: 0 },
      { id: 5, title: '国会議事堂', lat: 35.675888, lng: 139.74485800000002, label: '経路E', sortId: 8 },
      { id: 6, title: '東京タワー', lat: 35.6585805, lng: 139.745432899999977, label: '経路F', sortId: 0 },
      { id: 7, title: '上野動物園', lat: 35.7164535, lng: 139.77131770000005, label: '経路G', sortId: 7 },
      { id: 8, title: '東京駅', lat: 35.6811673, lng: 139.76705160000006, label: '経路H', sortId: 6 },
    ];
    const answerWaypointOrder = [];
    const wrapper = shallow(
      <DemoQuestionList
        routes={list}
        departure={departure}
        arrival={arrival}
        answerWaypointOrder={answerWaypointOrder}
      />,
    );
    expect(wrapper.find('.DemoQuestionListRoutes').text()).toBe('経路E:国会議事堂経路G:上野動物園経路H:東京駅経路A:秋葉原駅経路B:文京区役所経路C:明治大学経路D:浜離宮経路F:東京タワー');
  });

  it('answerWaypointOrderの要素数が0であれば、class名にDemoQuestionListMistakeを持ったリストはないこと', () => {
    const list = [
      { id: 1, title: '秋葉原駅', lat: 35.698353, lng: 139.77311429999997, label: '経路A', sortId: 0 },
      { id: 2, title: '文京区役所', lat: 35.7080677, lng: 139.752167, label: '経路B', sortId: 0 },
      { id: 3, title: '明治大学', lat: 35.6972422, lng: 139.7615346, label: '経路C', sortId: 0 },
      { id: 4, title: '浜離宮', lat: 35.6597374, lng: 139.76349249999998, label: '経路D', sortId: 0 },
      { id: 5, title: '国会議事堂', lat: 35.675888, lng: 139.74485800000002, label: '経路E', sortId: 8 },
      { id: 6, title: '東京タワー', lat: 35.6585805, lng: 139.745432899999977, label: '経路F', sortId: 0 },
      { id: 7, title: '上野動物園', lat: 35.7164535, lng: 139.77131770000005, label: '経路G', sortId: 7 },
      { id: 8, title: '東京駅', lat: 35.6811673, lng: 139.76705160000006, label: '経路H', sortId: 6 },
    ];
    const answerWaypointOrder = [];
    const wrapper = shallow(
      <DemoQuestionList
        routes={list}
        departure={departure}
        arrival={arrival}
        answerWaypointOrder={answerWaypointOrder}
      />,
    );
    const classNames = wrapper.find('.DemoQuestionListRoutes').props().children.map(li => li.props.className);
    expect(classNames).not.toEqual('DemoQuestionListSorted DemoQuestionListMistake');
    expect(classNames).not.toEqual('DemoQuestionListNotSorted DemoQuestionListMistake');
    expect(classNames).not.toEqual('DemoQuestionListMistake');
  });

  it('正解の経路リストと一致しなかった場合は、class名にDemoQuestionListMistakeが付与されること', () => {
    const list = [
      { id: 1, title: '秋葉原駅', lat: 35.698353, lng: 139.77311429999997, label: '経路A', sortId: 8 },
      { id: 2, title: '文京区役所', lat: 35.7080677, lng: 139.752167, label: '経路B', sortId: 4 },
      { id: 3, title: '明治大学', lat: 35.6972422, lng: 139.7615346, label: '経路C', sortId: 7 },
      { id: 4, title: '浜離宮', lat: 35.6597374, lng: 139.76349249999998, label: '経路D', sortId: 1 },
      { id: 5, title: '国会議事堂', lat: 35.675888, lng: 139.74485800000002, label: '経路E', sortId: 5 },
      { id: 6, title: '東京タワー', lat: 35.6585805, lng: 139.745432899999977, label: '経路F', sortId: 2 },
      { id: 7, title: '上野動物園', lat: 35.7164535, lng: 139.77131770000005, label: '経路G', sortId: 3 },
      { id: 8, title: '東京駅', lat: 35.6811673, lng: 139.76705160000006, label: '経路H', sortId: 6 },
    ];
    const answerWaypointOrder = [4, 5, 0, 1, 2, 3, 6, 7];
    const wrapper = shallow(
      <DemoQuestionList
        routes={list}
        departure={departure}
        arrival={arrival}
        answerWaypointOrder={answerWaypointOrder}
      />,
    );
    const mistakedList = wrapper.find('.DemoQuestionListRoutes').props().children.filter(
      (li, i) => answerWaypointOrder[i] !== i,
    );
    mistakedList.map(li => expect(li.props.className).toEqual('DemoQuestionListSorted DemoQuestionListMistake'));
  });
});
