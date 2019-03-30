import { Gross, Position, Route, Traffic, Transport, Expressway, Step } from '../../state.model';
import { Action } from '../../demo/demoAction.model';

export interface MarkerProps {
  departure: Position;
  arrival: Position;
  routes: Route[];
  questionStep: Step;
  currentSortId: number;
  dispatchMarkerClickActions: (
    routeid: number,
    questionStep: Step,
    currentSortId: number,
  ) => Action[];
}

export interface PolilineProps {
  routes: Route[];
  traffic: Traffic;
  transport: Transport;
  departure: Position;
  arrival: Position;
  expressway: Expressway;
  departureTime: Date;
}

export interface UpdateGross {
  dispatchUpdateGross: (gross: Gross) => Action;
}

export interface UpdateAnswerData {
  dispatchUpdateAnswerData: (gross: Gross, waypointOrder: number[]) => Action;
}
