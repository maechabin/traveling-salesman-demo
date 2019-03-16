import React from 'react';
import PropTypes from 'prop-types';

import DemoQuestionMap from './DemoQuestionMap';
import DemoQuestionGross from './DemoQuestionGross';
import DemoQuestionList from './DemoQuestionList';
import DemoQuestionOption from './DemoQuestionOptions';
import DemoQuestionButton from './DemoQuestionButton';

import demoType from '../../demoType';
import '../../styles/DemoQuestion.css';

const DemoQuestion = (props) => {
  const { google, gross, handleResetClick, ...rest } = props;
  return (
    <div className="DemoQuestion">
      <h2>あなたが選んだ経路</h2>
      <div className="DemoQuestionMain">
        <div className="DemoQuestionMapArea">
          <DemoQuestionMap {...props} />
          <DemoQuestionGross gross={gross} />
        </div>
        <div className="DemoQuestionNavArea">
          <DemoQuestionOption {...rest} />
          <DemoQuestionList {...rest} />
          <DemoQuestionButton
            handleResetClick={handleResetClick}
            viewAnswerFlag={props.viewAnswerFlag}
          />
        </div>
      </div>
    </div>
  );
};

DemoQuestion.propTypes = {
  google: PropTypes.shape({
    maps: PropTypes.object,
  }).isRequired,
  handleResetClick: PropTypes.func.isRequired,
  gross: demoType.gross.isRequired,
  viewAnswerFlag: demoType.viewAnswerFlag.isRequired,
};

export default DemoQuestion;