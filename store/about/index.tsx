import React, { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from './aboutReducer';
import {
  LOAD,
  SET_ERROR
} from './aboutTypes';
import { Abouts } from 'types';
import { AboutService } from 'services';

interface InitialStateType {
  isLoading: boolean;
  error: null | string;
  abouts: Abouts;
};

const initialState = {
  isLoading: true,
  error: null,
  abouts: []
};

const AboutContext = createContext<InitialStateType>(initialState);

export const AboutProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchAbouts = async () => {
      try {
        const { abouts } = await AboutService.fetchAbouts();
        dispatch({ type: LOAD, payload: { abouts } });
      }
      catch (error) {
        dispatch({ type: SET_ERROR, payload: { error: error.message } });
      }
    }

    fetchAbouts();
  }, []);

  return (
    <AboutContext.Provider value={{ ...state, }}>
      {children}
    </AboutContext.Provider>
  )
};

export const useAbout = (): InitialStateType => useContext(AboutContext);