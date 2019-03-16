import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import DemoQuestionOptions from '../DemoQuestionOptions';

describe('<DemoQuestionOptions />', () => {
  it('移動手段（ラジオボタン）の項目が変更された時に、handleFromChangeが呼び出されること', () => {
    const handleFormChangeSpy = sinon.spy();
    const event = {
      target: {
        name: 'transport',
        value: 'walk',
      },
    };
    const transport = 'car';
    const wrapper = shallow(
      <DemoQuestionOptions
        handleFormChange={handleFormChangeSpy}
        transport={transport}
        expressway="no"
        traffic="standard"
        choosingRouteStartFlag={false}
      />,
    );
    expect(wrapper.find('#transport-car').props().checked).toEqual(true);
    expect(handleFormChangeSpy.called).toEqual(false);

    wrapper.find('#transport-walk').simulate('change', event);
    expect(handleFormChangeSpy.called).toEqual(true);

    wrapper.find('#transport-car').simulate('change', event);
    expect(handleFormChangeSpy.called).toEqual(true);
  });

  it('有料道路、高速道路（チェックボックス）の項目が変更された時に、handleFromChangeが呼び出されること', () => {
    const handleFormChangeSpy = sinon.spy();
    const event = {
      target: {
        name: 'expressway',
        value: 'yes',
      },
    };
    const expressway = 'no';
    const wrapper = shallow(
      <DemoQuestionOptions
        handleFormChange={handleFormChangeSpy}
        transport="car"
        expressway={expressway}
        traffic="standard"
        choosingRouteStartFlag={false}
      />,
    );
    expect(wrapper.find('#expressway').props().checked).toEqual(false);
    expect(handleFormChangeSpy.called).toEqual(false);

    wrapper.find('#expressway').simulate('change', event);
    expect(handleFormChangeSpy.called).toEqual(true);
  });

  it('交通量の見積もりの項目が変更された時に、handleFormChangeが呼び出されること', () => {
    const handleFormChangeSpy = sinon.spy();
    const event = {
      target: {
        name: 'traffic',
        value: 'standard',
      },
    };
    const traffic = 'standard';
    const wrapper = shallow(
      <DemoQuestionOptions
        handleFormChange={handleFormChangeSpy}
        transport="car"
        expressway="no"
        traffic={traffic}
        choosingRouteStartFlag={false}
      />,
    );
    expect(wrapper.find('#traffic-standard').props().checked).toEqual(true);
    expect(handleFormChangeSpy.called).toEqual(false);

    wrapper.find('#traffic-bestguess').simulate('change', event);
    expect(handleFormChangeSpy.called).toEqual(true);

    wrapper.find('#traffic-optimistic').simulate('change', event);
    expect(handleFormChangeSpy.called).toEqual(true);

    wrapper.find('#traffic-pessimistic').simulate('change', event);
    expect(handleFormChangeSpy.called).toEqual(true);

    wrapper.find('#traffic-standard').simulate('change', event);
    expect(handleFormChangeSpy.called).toEqual(true);
  });

  it('choosingRouteStartFlagaがfalseかつtransportがcarの場合、全ての選択肢が選択可能であること', () => {
    const handleFormChangeSpy = sinon.spy();
    const choosingRouteStartFlag = false;
    const wrapper = shallow(
      <DemoQuestionOptions
        handleFormChange={handleFormChangeSpy}
        transport="car"
        expressway="no"
        traffic="standard"
        choosingRouteStartFlag={choosingRouteStartFlag}
      />,
    );
    expect(wrapper.find('#transport-car').props().disabled).toEqual(false);
    expect(wrapper.find('#transport-walk').props().disabled).toEqual(false);
    expect(wrapper.find('#expressway').props().disabled).toEqual(false);
    expect(wrapper.find('#traffic-standard').props().disabled).toEqual(false);
    expect(wrapper.find('#traffic-bestguess').props().disabled).toEqual(false);
    expect(wrapper.find('#traffic-optimistic').props().disabled).toEqual(false);
    expect(wrapper.find('#traffic-pessimistic').props().disabled).toEqual(false);
  });

  it('choosingRouteStartFlagaがfalseかつtransportがwalkの場合、expresswayとtrafficの選択肢がdisabledであること', () => {
    const handleFormChangeSpy = sinon.spy();
    const choosingRouteStartFlag = false;
    const wrapper = shallow(
      <DemoQuestionOptions
        handleFormChange={handleFormChangeSpy}
        transport="walk"
        expressway="no"
        traffic="standard"
        choosingRouteStartFlag={choosingRouteStartFlag}
      />,
    );
    expect(wrapper.find('#expressway').props().disabled).toEqual(true);
    expect(wrapper.find('#traffic-standard').props().disabled).toEqual(true);
    expect(wrapper.find('#traffic-bestguess').props().disabled).toEqual(true);
    expect(wrapper.find('#traffic-optimistic').props().disabled).toEqual(true);
    expect(wrapper.find('#traffic-pessimistic').props().disabled).toEqual(true);
  });

  it('choosingRouteStartFlagaがtrueの場合、全ての選択肢がdisabledであること', () => {
    const handleFormChangeSpy = sinon.spy();
    const choosingRouteStartFlag = true;
    const wrapper = shallow(
      <DemoQuestionOptions
        handleFormChange={handleFormChangeSpy}
        transport="car"
        expressway="no"
        traffic="standard"
        choosingRouteStartFlag={choosingRouteStartFlag}
      />,
    );
    expect(wrapper.find('#transport-car').props().disabled).toEqual(true);
    expect(wrapper.find('#transport-walk').props().disabled).toEqual(true);
    expect(wrapper.find('#expressway').props().disabled).toEqual(true);
    expect(wrapper.find('#traffic-standard').props().disabled).toEqual(true);
    expect(wrapper.find('#traffic-bestguess').props().disabled).toEqual(true);
    expect(wrapper.find('#traffic-optimistic').props().disabled).toEqual(true);
    expect(wrapper.find('#traffic-pessimistic').props().disabled).toEqual(true);
  });

  it('transportがwalkの場合、expresswayのチェックが外れていること', () => {
    const handleFormChangeSpy = sinon.spy();
    const choosingRouteStartFlag = false;
    const wrapper = shallow(
      <DemoQuestionOptions
        handleFormChange={handleFormChangeSpy}
        transport="walk"
        expressway="yes"
        traffic="standard"
        choosingRouteStartFlag={choosingRouteStartFlag}
      />,
    );
    expect(wrapper.find('#expressway').props().checked).toEqual(false);
  });

  it('transportがwalkの場合、trafficは「しない」を選択していること', () => {
    const handleFormChangeSpy = sinon.spy();
    const choosingRouteStartFlag = false;
    const wrapper = shallow(
      <DemoQuestionOptions
        handleFormChange={handleFormChangeSpy}
        transport="walk"
        expressway="yes"
        traffic="bestguess"
        choosingRouteStartFlag={choosingRouteStartFlag}
      />,
    );
    expect(wrapper.find('#traffic-standard').props().checked).toEqual(true);
  });
});
