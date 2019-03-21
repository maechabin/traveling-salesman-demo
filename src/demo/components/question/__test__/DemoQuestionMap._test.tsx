import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import DemoQuestionMap from '../DemoQuestionMap';
import { state } from '../../../../state';

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
  } as any;
  it('componentDidMountを呼び出すこと', () => {
    sinon.spy(DemoQuestionMap.prototype, 'componentDidMount');
    const wrapper = mount(<DemoQuestionMap {...state} {...restProps} />);
    expect(DemoQuestionMap.prototype.componentDidMount).toHaveBeenCalled();
  });
});
