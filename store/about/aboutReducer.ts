import { LOAD, SET_ERROR } from './aboutTypes';
import { About } from 'types';

type State = {
  abouts: About[];
  isLoading: boolean;
  error: null | string;
};

type Action = {
  type: string;
  payload?: any;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case LOAD: {
      const abouts = action.payload.abouts;
      return {
        ...state,
        abouts
      };
    };
      
    case SET_ERROR: {
      return { ...state, error: action.payload.error, isLoading: false };
    }
    
    default:
      return state;
  }
}

export default reducer;