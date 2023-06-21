import { LOAD, SET_ERROR } from './faqTypes';
import { FAQ } from 'types';

type State = {
  faq: FAQ;
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
      const faq = action.payload.faq;
      return {
        ...state,
        faq
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