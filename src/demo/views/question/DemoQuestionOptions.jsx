import React from 'react';

const DemoQuestionOptions = (props) => {
  const { transport, expressway, traffic, handleFormChange } = props;

  function handleChange(e) {
    handleFormChange({
      name: e.target.name,
      value: e.target.value,
    });
  }

  return (
    <dl>
      <dt>移動手段</dt>
      <dd>
        <inputLabel>
          車: <input type="radio" value="car" name="transport" checked={transport === 'car'} onChange={handleChange} />
        </inputLabel>
        <inputLabel>
          徒歩:<input type="radio" value="walk" name="transport" checked={transport === 'walk'} onChange={handleChange} />
        </inputLabel>
      </dd>
      <dt>有料道路、高速道路</dt>
      <dd>
        <inputLabel>
          <input type="checkbox" value="false" name="expressway" checked={expressway} onChange={handleChange} /> 利用する
        </inputLabel>
      </dd>
      <dt>交通量の見積もり</dt>
      <dd>
        <inputLabel>
          通常: <input type="radio" value="standard" name="traffic" checked={traffic === 'standard'} onChange={handleChange} />
        </inputLabel>
        <inputLabel>
          楽観的: <input type="radio" value="optimistic" name="traffic" checked={traffic === 'optimistic'} onChange={handleChange} />
        </inputLabel>
        <inputLabel>
          悲観的: <input type="radio" value="pessimistic" name="traffic" checked={traffic === 'pessimistic'} onChange={handleChange} />
        </inputLabel>
      </dd>
    </dl>
  );
};

export default DemoQuestionOptions;
