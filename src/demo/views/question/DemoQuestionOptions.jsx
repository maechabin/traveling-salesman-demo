import React from 'react';
import PropTypes from 'prop-types';

const DemoQuestionOptions = (props) => {
  const { transport, expressway, traffic, choosingRouteFlag, handleFormChange } = props;

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
        <input type="radio" value="car" name="transport" checked={transport === 'car'} onChange={handleChange} id="transport-car" disabled={choosingRouteFlag} />
        <label htmlFor="transport-car">車</label>
        <input type="radio" value="walk" name="transport" checked={transport === 'walk'} onChange={handleChange} id="transport-walk" disabled={choosingRouteFlag} />
        <label htmlFor="transport-walk">徒歩</label>
      </dd>
      <dt>有料道路、高速道路</dt>
      <dd>
        <input type="checkbox" value={expressway === 'no' ? 'yes' : 'no'} name="expressway" checked={expressway === 'yes'} onChange={handleChange} id="expressway" disabled={choosingRouteFlag} />
        <label htmlFor="expressway">利用する</label>
      </dd>
      <dt>交通量の見積もり</dt>
      <dd>
        <input type="radio" value="standard" name="traffic" checked={traffic === 'standard'} onChange={handleChange} id="traffic-standard" disabled={choosingRouteFlag} />
        <label htmlFor="traffic-standard">通常</label>
        <input type="radio" value="optimistic" name="traffic" checked={traffic === 'optimistic'} onChange={handleChange} id="traffic-optimistic" disabled={choosingRouteFlag} />
        <label htmlFor="traffic-optimistic">楽観的</label>
        <input type="radio" value="pessimistic" name="traffic" checked={traffic === 'pessimistic'} onChange={handleChange} id="traffic-pessimistic" disabled={choosingRouteFlag} />
        <label htmlFor="traffic-pessimistic">悲観的</label>
      </dd>
    </dl>
  );
};

DemoQuestionOptions.propTypes = {
  transport: PropTypes.string.isRequired,
  expressway: PropTypes.string.isRequired,
  traffic: PropTypes.string.isRequired,
  choosingRouteFlag: PropTypes.bool.isRequired,
  handleFormChange: PropTypes.func.isRequired,
};

export default DemoQuestionOptions;
