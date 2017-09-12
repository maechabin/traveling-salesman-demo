import React from 'react';
import PropTypes from 'prop-types';

const DemoQuestionOptions = (props) => {
  const { transport, expressway, traffic, handleFormChange } = props;

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
        <input type="radio" value="car" name="transport" checked={transport === 'car'} onChange={handleChange} id="transport-car" />
        <label htmlFor="transport-car">車</label>
        <input type="radio" value="walk" name="transport" checked={transport === 'walk'} onChange={handleChange} id="transport-walk" />
        <label htmlFor="transport-walk">徒歩</label>
      </dd>
      <dt>有料道路、高速道路</dt>
      <dd>
        <input type="checkbox" value="false" name="expressway" checked={expressway} onChange={handleChange} id="expressway" />
        <label htmlFor="expressway">利用する</label>
      </dd>
      <dt>交通量の見積もり</dt>
      <dd>
        <input type="radio" value="standard" name="traffic" checked={traffic === 'standard'} onChange={handleChange} id="traffic-standard" />
        <label htmlFor="traffic-standard">通常</label>
        <input type="radio" value="optimistic" name="traffic" checked={traffic === 'optimistic'} onChange={handleChange} id="traffic-optimistic" />
        <label htmlFor="traffic-optimistic">楽観的</label>
        <input type="radio" value="pessimistic" name="traffic" checked={traffic === 'pessimistic'} onChange={handleChange} id="traffic-pessimistic" />
        <label htmlFor="traffic-pessimistic">悲観的</label>
      </dd>
    </dl>
  );
};

DemoQuestionOptions.propTypes = {
  transport: PropTypes.string.isRequired,
  expressway: PropTypes.bool.isRequired,
  traffic: PropTypes.string.isRequired,
  handleFormChange: PropTypes.func.isRequired,
};

export default DemoQuestionOptions;
