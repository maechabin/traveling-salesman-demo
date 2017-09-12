import { SORT_LIST } from './demoAction';

const demoReducer = (state = {}, action) => {
  switch (action.type) {
    case SORT_LIST: {
      const routeList = state.routes.map((route) => {
        const newRoute = route;
        if (newRoute.id === action.payload) {
          newRoute.sortId = state.currentSortId;
        }
        return newRoute;
      });
      return Object.assign({}, state, {
        routes: routeList,
        currentSortId: state.currentSortId - 1,
      });
    }
    default:
      return state;
  }
};

export default demoReducer;

