import React from 'react';
import { shallow } from 'enzyme';

import {
  State,
  Position,
  Route,
  Step,
  Transport,
  Traffic,
  Expressway,
} from '../../../../state.model';
import { DisplaySide } from '../../../demo.model';
import DemoRoutesList from '../DemoRoutesList';

describe('<DemoRoutesList />', () => {
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

  describe('DisplaySide.Question', () => {
    const displaySide = DisplaySide.Question;

    it('経路リストの要素が全て表示されること', () => {
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
        departure,
        arrival,
        answerWaypointOrder: [],
        displaySide,
      };

      // exercise
      const wrapper = shallow(<DemoRoutesList {...props} />);

      // verify
      expect(wrapper.find('.DemoQuestionListRoutes').children().length).toBe(8);
      expect(wrapper).toMatchSnapshot();
    });

    it('sortIdが0であればDemoQuestionListNotSorted、sortIdが0以上であればDemoQuestionListSortedがclass名として付与されること', () => {
      // setup
      const routes: Route[] = [
        { id: 1, title: '秋葉原駅', lat: 111, lng: 111, label: 'A', sortId: 5 },
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
        departure,
        arrival,
        answerWaypointOrder: [],
        displaySide,
      };

      // exercise
      const wrapper = shallow(<DemoRoutesList {...props} />);

      // verify
      expect(wrapper.find('.DemoQuestionListNotSorted').length).toBe(4);
      expect(wrapper.find('.DemoQuestionListSorted').length).toBe(4);
    });

    it('配列順に表示されること', () => {
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
        departure,
        arrival,
        answerWaypointOrder: [],
        displaySide,
      };

      // exercise
      const wrapper = shallow(<DemoRoutesList {...props} />);

      // verify
      expect(wrapper.find('.DemoQuestionListRoutes').text()).toBe(
        'A:秋葉原駅B:文京区役所C:明治大学D:浜離宮E:国会議事堂F:東京タワーG:上野動物園H:東京駅',
      );
    });

    it('answerWaypointOrderの要素数が0であれば、class名にDemoQuestionListMistakeを持ったリストはないこと', () => {
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
        departure,
        arrival,
        answerWaypointOrder: [],
        displaySide,
      };
      const wrapper = shallow(<DemoRoutesList {...props} />);
      const classNames = (wrapper.find('.DemoQuestionListRoutes').props().children as any).map(
        (li: any) => li.props.className,
      );

      // verify
      expect(classNames).not.toEqual('DemoQuestionListSorted DemoQuestionListMistake');
      expect(classNames).not.toEqual('DemoQuestionListNotSorted DemoQuestionListMistake');
      expect(classNames).not.toEqual('DemoQuestionListMistake');
    });

    it('正解の経路リストと一致しなかった場合は、class名にDemoQuestionListMistakeが付与されること', () => {
      // setup
      const routes: Route[] = [
        { id: 1, title: '秋葉原駅', lat: 111, lng: 111, label: 'A', sortId: 8 },
        { id: 2, title: '文京区役所', lat: 222, lng: 222, label: 'B', sortId: 4 },
        { id: 3, title: '明治大学', lat: 333, lng: 333, label: 'C', sortId: 7 },
        { id: 4, title: '浜離宮', lat: 444, lng: 444, label: 'D', sortId: 1 },
        { id: 5, title: '国会議事堂', lat: 555, lng: 555, label: 'E', sortId: 5 },
        { id: 6, title: '東京タワー', lat: 666, lng: 666, label: 'F', sortId: 2 },
        { id: 7, title: '上野動物園', lat: 777, lng: 777, label: 'G', sortId: 3 },
        { id: 8, title: '東京駅', lat: 888, lng: 888, label: 'H', sortId: 6 },
      ];
      const props = {
        routes,
        departure,
        arrival,
        answerWaypointOrder: [4, 5, 0, 1, 2, 3, 6, 7],
        displaySide,
      };
      const wrapper = shallow(<DemoRoutesList {...props} />);
      const mistakedList = (wrapper.find('.DemoQuestionListRoutes').props().children as any).filter(
        (_: any, i: number) => props.answerWaypointOrder[i] !== i,
      );

      // verify
      mistakedList.map((li: any) =>
        expect(li.props.className).toEqual('DemoQuestionListSorted DemoQuestionListMistake'),
      );
    });
  });

  describe('DisplaySide.Question', () => {
    const displaySide = DisplaySide.Answer;

    it('経路リストの要素が全て表示されること', () => {
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
        departure,
        arrival,
        answerWaypointOrder: [5, 3, 1, 6, 7, 2, 0, 4],
        displaySide,
      };

      // exercise
      const wrapper = shallow(<DemoRoutesList {...props} />);

      // verify
      expect(wrapper.find('.DemoQuestionListRoutes').children().length).toBe(8);
    });

    it('answerWaypointOrderの順番で経路リストがソートされること', () => {
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
        departure,
        arrival,
        answerWaypointOrder: [5, 3, 1, 6, 7, 2, 0, 4],
        displaySide,
      };

      // exercise
      const wrapper = shallow(<DemoRoutesList {...props} />);

      // verify
      expect(wrapper.find('.DemoQuestionListRoutes').text()).toBe(
        'F:東京タワーD:浜離宮B:文京区役所G:上野動物園H:東京駅C:明治大学A:秋葉原駅E:国会議事堂',
      );
    });
  });
});
