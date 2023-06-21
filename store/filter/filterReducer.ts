import { LOAD, SET_ERROR } from './filterTypes';
import { Filter } from 'types';

type State = {
  filter: Filter;
  isLoading: boolean;
  error: null | string;
}

type Action = {
  type: string;
  payload?: any;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case LOAD: {
      const filter = action.payload.filter;
      return { ...state, filter };
    };
    
    case SET_ERROR: {
      return ({ ...state, error: action.payload.error, isLoading: false });
    }
      
    default:
      return state;
  }
}

export default reducer;