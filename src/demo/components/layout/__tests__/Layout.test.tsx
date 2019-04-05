import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';
import Layout from '../Layout';

describe('<DemoDescription />', () => {
  it('snapshot', () => {
    // setup
    const wrapper = shallow(
      <Layout>
        <div>AAA</div>
      </Layout>,
    );

    // snapshot
    expect(wrapper).toMatchSnapshot();
  });

  it('children', () => {
    // setup
    const wrapper = shallow(
      <Layout>
        <div>AAA</div>
      </Layout>,
    );

    // verify
    expect(wrapper.props().children[0]).toEqual(<Header />);
    expect(wrapper.props().children[1]).toEqual(<div>AAA</div>);
  });
});
