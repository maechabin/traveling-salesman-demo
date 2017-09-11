import React from 'react';

const DemoQuestionOptions = () => {
  return (
    <dl>
      <dt>移動手段</dt>
      <dd>
        <inputLabel>車: <input type="radio" value="car" /></inputLabel>
        <inputLabel>徒歩:<input type="radio" value="walk" /></inputLabel>
      </dd>
      <dt>有料道路、高速道路</dt>
      <dd>
        <inputLabel><input type="checkbox" value="heigway" /> 利用する</inputLabel>
      </dd>
      <dt>交通量の見積もり</dt>
      <dd>
        <inputLabel>通常: <input type="radio" value="car" /></inputLabel>
        <inputLabel>楽観的:<input type="radio" value="walk" /></inputLabel>
        <inputLabel>悲観的:<input type="radio" value="walk" /></inputLabel>
      </dd>
    </dl>
  );
};

export default DemoQuestionOptions;
