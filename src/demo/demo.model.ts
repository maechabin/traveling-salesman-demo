import { Action } from 'redux';
import { Gross } from '../state.model';

export interface Dispatches {
  handleMarkerClick(
    routeId: number,
    isSelecting: boolean,
    currentSortId: number,
  ): Action[];
  handleUpdateGross(gross: Gross): Action;
  handleUpdateAnswerData(gross: Gross, waypointOrder: number[]): Action;
  handleFormChange(value: { name: string; value: string }): Action;
  handleResetClick(): Action;
  handleInit(): Action;
  handleAnswerButtonClick(): Action;
}
