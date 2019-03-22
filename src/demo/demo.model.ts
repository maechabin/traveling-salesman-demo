import { Action } from 'redux';
import { Gross, Position, Route, Step } from '../state.model';

export interface Dispatches {
  handleMarkerClick(routeId: number, qustionStep: Step, currentSortId: number): Action[];
  handleUpdateGross(gross: Gross): Action;
  handleUpdateAnswerData(gross: Gross, waypointOrder: number[]): Action;
  handleUpdateDeparture(departure: Position): Action;
  handleUpdateArrival(arrival: Position): Action;
  handleUpdateRoutes(routes: Route[]): Action;
  handleFormChange(value: { name: string; value: string }): Action;
  handleChangeQuestionStep(step: Step): Action;
  handleResetClick(): Action;
}
