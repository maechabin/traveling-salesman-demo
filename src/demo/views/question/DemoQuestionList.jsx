import React from 'react';

const DemoQuestionList = () => {
  return (
    <div className="DemoQuestionList">
      <ul className="DemoQuestionListDeparture">
        <li>出発地: 根津神社</li>
      </ul>
      <ul className="DemoQuestionListRoutes">
        <li>経路A: 秋葉原駅</li>
        <li>経路B: 文京区役所</li>
        <li>経路C: 明治大学</li>
        <li>経路D: 浜離宮</li>
        <li>経路E: 国会議事堂</li>
      </ul>
      <ul className="DemoQuestionListArival">
        <li>到着地: 勝どき駅</li>
      </ul>
    </div>
  );
};

export default DemoQuestionList;
