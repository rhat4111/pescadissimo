import React, { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from './faqReducer';
import {
  LOAD,
  SET_ERROR
} from './faqTypes';
import { FAQ } from 'types';
import { FAQService } from 'services';

interface InitialStateType {
  isLoading: boolean;
  error: null | string;
  faq: FAQ;
};

const initialState = {
  isLoading: true,
  error: null,
  faq: null
};

const FAQContext = createContext<InitialStateType>(initialState);

export const FAQProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        const { Faq } = await FAQService.fetchFAQ();
        dispatch({ type: LOAD, payload: { faq: Faq } });
      }
      catch (error) {
        dispatch({ type: SET_ERROR, payload: { error: error.message } });
      }
    }

    fetchFAQ();
  }, []);

  return (
    <FAQContext.Provider value={{ ...state, }}>
      {children}
    </FAQContext.Provider>
  )
};

export const useFAQ = (): InitialStateType => useContext(FAQContext);