import { LOAD, SET_ERROR } from './productTypes';
import { Product } from 'types';

type State = {
  products: Product[];
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
      const products = action.payload.products;
      return { ...state, products };
    };
    
    case SET_ERROR: {
      return ({ ...state, error: action.payload.error, isLoading: false });
    }
      
    default:
      return state;
  }
}

export default reducer;