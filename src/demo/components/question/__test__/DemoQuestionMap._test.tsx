import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import DemoQuestionMap from '../DemoQuestionMap';
import demoState from '../../../demoState';

describe('<DemoQuestionMap />', () => {
  const restProps = {
    google: {
      maps: {
        LatLngBounds: function() {
          return {
            extend: jest.fn(),
          };
        },
        LatLng: jest.fn(),
        MapTypeId: {
          ROADMAP: '',
        },
        Map: jest.fn(),
        Marker: {
          addListener: jest.fn(),
        },
      },
    },
    handleMarkerClick: jest.fn(),
    handleUpdateGross: jest.fn(),
    handleInit: jest.fn(),
  };
  it('componentDidMountを呼び出すこと', () => {
    sinon.spy(DemoQuestionMap.prototype, 'componentDidMount');
    const wrapper = mount(<DemoQuestionMap {...demoState} {...restProps} />);
    expect(DemoQuestionMap.prototype.componentDidMount.callOnce).toEqual(true);
  });
});
