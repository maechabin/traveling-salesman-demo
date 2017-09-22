import React from 'react';
import PropTypes from 'prop-types';

import demoType from '../../demoType';

const DemoQuestionOptions = (props) => {
  const { transport, expressway, traffic, choosingRouteStartFlag, handleFormChange } = props;

  function handleChange(e) {
    handleFormChange({
      name: e.target.name,
      value: e.target.value,
    });
  }

  return (
    <dl className="DemoQuestionOptions">
      <dt>移動手段</dt>
      <dd>
        <input type="radio" value="car" name="transport" checked={transport === 'car'} onChange={handleChange} id="transport-car" disabled={choosingRouteStartFlag} />
        <label htmlFor="transport-car">車</label>
        <input type="radio" value="walk" name="transport" checked={transport === 'walk'} onChange={handleChange} id="transport-walk" disabled={choosingRouteStartFlag} />
        <label htmlFor="transport-walk">徒歩</label>
      </dd>
      <dt>有料道路、高速道路</dt>
      <dd>
        <input type="checkbox" value={expressway === 'no' ? 'yes' : 'no'} name="expressway" checked={expressway === 'yes' && transport === 'car'} onChange={handleChange} id="expressway" disabled={choosingRouteStartFlag || transport === 'walk'} />
        <label htmlFor="expressway">利用する</label>
      </dd>
      <dt>3日後の交通量で見積もる（参考）</dt>
      <dd>
        <input type="radio" value="standard" name="traffic" checked={traffic === 'standard' || transport === 'walk'} onChange={handleChange} id="traffic-standard" disabled={choosingRouteStartFlag || transport === 'walk'} />
        <label htmlFor="traffic-standard">見積もらない</label>
        <br />
        <input type="radio" value="bestguess" name="traffic" checked={traffic === 'bestguess' && transport === 'car'} onChange={handleChange} id="traffic-bestguess" disabled={choosingRouteStartFlag || transport === 'walk'} />
        <label htmlFor="traffic-bestguess">正確に</label>
        <input type="radio" value="optimistic" name="traffic" checked={traffic === 'optimistic' && transport === 'car'} onChange={handleChange} id="traffic-optimistic" disabled={choosingRouteStartFlag || transport === 'walk'} />
        <label htmlFor="traffic-optimistic">楽観的に</label>
        <input type="radio" value="pessimistic" name="traffic" checked={traffic === 'pessimistic' && transport === 'car'} onChange={handleChange} id="traffic-pessimistic" disabled={choosingRouteStartFlag || transport === 'walk'} />
        <label htmlFor="traffic-pessimistic">悲観的に</label>
      </dd>
    </dl>
  );
};

DemoQuestionOptions.propTypes = {
  transport: demoType.transport.isRequired,
  expressway: demoType.expressway.isRequired,
  traffic: demoType.traffic.isRequired,
  choosingRouteStartFlag: demoType.choosingRouteStartFlag.isRequired,
  handleFormChange: PropTypes.func.isRequired,
};

export default DemoQuestionOptions;
