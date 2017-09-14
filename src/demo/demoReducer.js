import { SORT_LIST, UPDATE_GROSS, DISABLED_CHOOSE_OPTIONS, CHANGE_FORM_VALUE } from './demoAction';

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
    case UPDATE_GROSS:
      return Object.assign({}, state, {
        gross: action.payload,
      });
    case DISABLED_CHOOSE_OPTIONS:
      return Object.assign({}, state, {
        choosingRouteFlag: true,
      });
    case CHANGE_FORM_VALUE:
      return Object.assign({}, state, {
        [action.payload.name]: action.payload.value,
      });
    default:
      return state;
  }
};

export default demoReducer;
