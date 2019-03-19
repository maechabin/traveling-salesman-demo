import { Action } from 'redux';
import { Gross, Position, Route } from '../state.model';

export interface Dispatches {
  handleMarkerClick(routeId: number, isSelecting: boolean, currentSortId: number): Action[];
  handleUpdateGross(gross: Gross): Action;
  handleUpdateAnswerData(gross: Gross, waypointOrder: number[]): Action;
  handleUpdateDeparture(data: Position): Action;
  handleUpdateArrival(data: Position): Action;
  handleUpdateRoutes(data: Route[]): Action;
  handleFormChange(value: { name: string; value: string }): Action;
  handleResetClick(): Action;
  handleInit(): Action;
  handleAnswerButtonClick(): Action;
}
