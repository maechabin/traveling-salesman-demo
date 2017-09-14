import React from 'react';
import PropTypes from 'prop-types';

import DemoQuestionMap from './DemoQuestionMap';
import DemoQuestionGross from './DemoQuestionGross';
import DemoQuestionList from './DemoQuestionList';
import DemoQuestionOption from './DemoQuestionOptions';
import DemoQuestionButton from './DemoQuestionButton';

const DemoQuestion = (props) => {
  const { google, gross, ...rest } = props;
  return (
    <div className="DemoQuestion">
      <h2>問題</h2>
      <div className="DemoQuestionMain">
        <div className="DemoQuestionMapArea">
          <DemoQuestionMap {...props} />
          <DemoQuestionGross gross={gross} />
        </div>
        <div className="DemoQuestionNavArea">
          <DemoQuestionOption {...rest} />
          <DemoQuestionList {...rest} />
          <DemoQuestionButton />
        </div>
      </div>
    </div>
  );
};

DemoQuestion.propTypes = {
  google: PropTypes.shape({
    maps: PropTypes.object,
  }).isRequired,
  gross: PropTypes.shape({
    distance: PropTypes.number,
    duration: PropTypes.number,
  }).isRequired,
};

export default DemoQuestion;
