import { StarActions, ActionTypes } from './actions';
import { adapter, initialState, StarState } from './state';

export function reducer(state: StarState = initialState, action: StarActions): StarState {
  switch (action.type) {

    case ActionTypes.LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case ActionTypes.LOAD_SUCCESS:
      return adapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null
      });


      case ActionTypes.LOAD_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload.error
        };

      default:
        return state;
  }
}
