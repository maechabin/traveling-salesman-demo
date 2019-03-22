import { Route } from '../../state.model';

export function getRoutesCache(routes: Route[]): Route[] {
  return routes.map(route => JSON.parse(JSON.stringify(route)));
}
