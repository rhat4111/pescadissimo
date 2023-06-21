import React, { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from './sellerReducer';
import { LOAD, SET_ERROR } from './sellerTypes';
import { SellerService } from 'services';

interface InitialStateType {
  isLoading: boolean;
  error: null | string;
  sellers: Array<object>;
};

const initialState = {
  isLoading: true,
  error: null,
  sellers: []
};

const SellerContext = createContext<InitialStateType>(initialState);

export const SellerProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const { sellers } = await SellerService.fetchSellers();
        dispatch({ type: LOAD, payload: { sellers } });
      }
      catch (error) {
        dispatch({ type: SET_ERROR, payload: { error: error.message } });
      }
    }

    fetchSellers();
  }, []);

  return (
    <SellerContext.Provider value={{ ...state }}>
      {children}
    </SellerContext.Provider>
  )
}

export const useSeller = (): InitialStateType => useContext(SellerContext);