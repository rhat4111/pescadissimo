import { LOAD, SET_ERROR } from './sellerTypes';
import { Seller } from 'types';

type State = {
  sellers: Seller[];
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
      const sellers = action.payload.sellers;
      return { ...state, sellers };
    };
    
    case SET_ERROR: {
      return ({ ...state, error: action.payload.error, isLoading: false });
    }
      
    default:
      return state;
  }
}

export default reducer;