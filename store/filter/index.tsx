import React, { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from './filterReducer';
import { LOAD, SET_ERROR } from './filterTypes';
import { Filter } from 'types';
import { FilterService } from 'services';

interface InitialStateType {
  isLoading: boolean;
  error: null | string;
  filter: Filter;
};

const initialState = {
  isLoading: true,
  error: null,
  filter: {
    formOfBreeding: [],
    preparation: [],
    categories: []
  }
};

const FilterContext = createContext<InitialStateType>(initialState);

export const FilterProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { filter } = await FilterService.fetchFilter();
        dispatch({ type: LOAD, payload: { filter: filter } });
      }
      catch (error) {
        dispatch({ type: SET_ERROR, payload: { error: error.message } });
      }
    }

    fetchProducts();
  }, []);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = (): InitialStateType => useContext(FilterContext);