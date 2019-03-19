import React from 'react';
import { Action } from 'redux';
import { Expressway, Traffic, Transport } from '../../../state.model';

type PropsType = {
  transport: Transport;
  expressway: Expressway;
  traffic: Traffic;
  isSelecting: boolean;
  handleFormChange: (value: { name: string; value: string }) => Action;
};

function DemoQuestionOptions({
  transport,
  expressway,
  traffic,
  isSelecting,
  handleFormChange,
}: PropsType): JSX.Element {
  function handleChange(event: React.FormEvent<HTMLInputElement>): void {
    handleFormChange({
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
          value="car"
          name="transport"
          checked={transport === Transport.Car}
          onChange={handleChange}
          id="transport-car"
          disabled={isSelecting}
        />
        <label htmlFor="transport-car">車</label>
        <input
          type="radio"
          value="walk"
          name="transport"
          checked={transport === Transport.Walk}
          onChange={handleChange}
          id="transport-walk"
          disabled={isSelecting}
        />
        <label htmlFor="transport-walk">徒歩</label>
      </dd>
      <dt>有料道路、高速道路</dt>
      <dd>
        <input
          type="checkbox"
          value={expressway === Expressway.No ? Expressway.Yes : Expressway.No}
          name="expressway"
          checked={expressway === Expressway.Yes && transport === Transport.Car}
          onChange={handleChange}
          id="expressway"
          disabled={isSelecting || transport === Transport.Walk}
        />
        <label htmlFor="expressway">利用する</label>
      </dd>
      <dt>3日後の交通量で見積もる（参考）</dt>
      <dd>
        <input
          type="radio"
          value="standard"
          name="traffic"
          checked={traffic === Traffic.Standard || transport === Transport.Walk}
          onChange={handleChange}
          id="traffic-standard"
          disabled={isSelecting || transport === Transport.Walk}
        />
        <label htmlFor="traffic-standard">見積もらない</label>
        <br />
        <input
          type="radio"
          value="bestguess"
          name="traffic"
          checked={traffic === Traffic.Bestguess && transport === Transport.Car}
          onChange={handleChange}
          id="traffic-bestguess"
          disabled={isSelecting || transport === Transport.Walk}
        />
        <label htmlFor="traffic-bestguess">正確に</label>
        <input
          type="radio"
          value="optimistic"
          name="traffic"
          checked={traffic === Traffic.Optimistic && transport === Transport.Car}
          onChange={handleChange}
          id="traffic-optimistic"
          disabled={isSelecting || transport === Transport.Walk}
        />
        <label htmlFor="traffic-optimistic">楽観的に</label>
        <input
          type="radio"
          value="pessimistic"
          name="traffic"
          checked={traffic === Traffic.Pessimistic && transport === Transport.Car}
          onChange={handleChange}
          id="traffic-pessimistic"
          disabled={isSelecting || transport === Transport.Walk}
        />
        <label htmlFor="traffic-pessimistic">悲観的に</label>
      </dd>
    </dl>
  );
}

export default DemoQuestionOptions;