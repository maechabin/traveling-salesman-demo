import { Action } from 'redux';
import { Gross, Position, Route, Step } from '../state.model';

export interface Dispatches {
  dispatchMarkerClickActions(routeId: number, qustionStep: Step, currentSortId: number): Action[];
  dispatchUpdateGross(gross: Gross): Action;
  dispatchUpdateAnswerData(gross: Gross, waypointOrder: number[]): Action;
  dispatchUpdateRoutes(departure: Position, arrival: Position, routes: Route[]): Action;
  dispatchUpdateQuestionOption(value: { name: string; value: string }): Action;
  dispatchUpdateQuestionStep(step: Step): Action;
  dispatchInitializeDemo(): Action;
}

export enum DisplaySide {
  Question,
  Answer,
}
