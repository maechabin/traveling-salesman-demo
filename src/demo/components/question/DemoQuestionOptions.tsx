import React from 'react';

import { Action } from '../../demoAction.model';
import * as Option from '../../../constants/option';
import { Expressway, Traffic, Transport, Step } from '../../../state.model';

type PropsType = {
  transport: Transport;
  expressway: Expressway;
  traffic: Traffic;
  questionStep: Step;
  dispatchUpdateQuestionOption: (value: { name: string; value: string }) => Action;
};

function DemoQuestionOptions({
  transport,
  expressway,
  traffic,
  questionStep,
  dispatchUpdateQuestionOption,
}: PropsType): JSX.Element {
  const isDisabled = questionStep >= Step.Edit;
  function handleChange(event: React.FormEvent<HTMLInputElement>): void {
    dispatchUpdateQuestionOption({
      name: event.currentTarget.name,
      value: event.currentTarget.value,
    });
  }

  return (
    <dl className="DemoQuestionOptions">
      <dt>移動手段</dt>
      <dd>
        <input
          type="radio"
          value={Transport.Car}
          name={Option.TRANSPORT}
          checked={transport === Transport.Car}
          onChange={handleChange}
          id={`${Option.TRANSPORT}-${Transport.Car}`}
          disabled={isDisabled}
        />
        <label htmlFor={`${Option.TRANSPORT}-${Transport.Car}`}>車</label>
        <input
          type="radio"
          value={Transport.Walk}
          name={Option.TRANSPORT}
          checked={transport === Transport.Walk}
          onChange={handleChange}
          id={`${Option.TRANSPORT}-${Transport.Walk}`}
          disabled={isDisabled}
        />
        <label htmlFor={`${Option.TRANSPORT}-${Transport.Walk}`}>徒歩</label>
      </dd>
      <dt>有料道路、高速道路</dt>
      <dd>
        <input
          type="checkbox"
          value={expressway === Expressway.No ? Expressway.Yes : Expressway.No}
          name={Option.EXPRESSWAY}
          checked={expressway === Expressway.Yes && transport === Transport.Car}
          onChange={handleChange}
          id={Option.EXPRESSWAY}
          disabled={isDisabled || transport === Transport.Walk}
        />
        <label htmlFor={Option.EXPRESSWAY}>利用する</label>
      </dd>
      <dt>3日後の交通量で見積もる（参考）</dt>
      <dd>
        <input
          type="radio"
          value={Traffic.Standard}
          name={Option.TRAFFIC}
          checked={traffic === Traffic.Standard || transport === Transport.Walk}
          onChange={handleChange}
          id={`${Option.TRAFFIC}-${Traffic.Standard}`}
          disabled={isDisabled || transport === Transport.Walk}
        />
        <label htmlFor={`${Option.TRAFFIC}-${Traffic.Standard}`}>見積もらない</label>
        <br />
        <input
          type="radio"
          value={Traffic.Bestguess}
          name={Option.TRAFFIC}
          checked={traffic === Traffic.Bestguess && transport === Transport.Car}
          onChange={handleChange}
          id={`${Option.TRAFFIC}-${Traffic.Bestguess}`}
          disabled={isDisabled || transport === Transport.Walk}
        />
        <label htmlFor={`${Option.TRAFFIC}-${Traffic.Bestguess}`}>正確に</label>
        <input
          type="radio"
          value={Traffic.Optimistic}
          name={Option.TRAFFIC}
          checked={traffic === Traffic.Optimistic && transport === Transport.Car}
          onChange={handleChange}
          id={`${Option.TRAFFIC}-${Traffic.Optimistic}`}
          disabled={isDisabled || transport === Transport.Walk}
        />
        <label htmlFor={`${Option.TRAFFIC}-${Traffic.Optimistic}`}>楽観的に</label>
        <input
          type="radio"
          value={Traffic.Pessimistic}
          name={Option.TRAFFIC}
          checked={traffic === Traffic.Pessimistic && transport === Transport.Car}
          onChange={handleChange}
          id={`${Option.TRAFFIC}-${Traffic.Pessimistic}`}
          disabled={isDisabled || transport === Transport.Walk}
        />
        <label htmlFor={`${Option.TRAFFIC}-${Traffic.Pessimistic}`}>悲観的に</label>
      </dd>
    </dl>
  );
}

export default DemoQuestionOptions;
