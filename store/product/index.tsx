import React, { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from './productReducer';
import { LOAD, SET_ERROR } from './productTypes';
import { Product } from 'types';
import { ProductService } from 'services';

interface InitialStateType {
  isLoading: boolean;
  error: null | string;
  products: Product[];
};

const initialState = {
  isLoading: true,
  error: null,
  products: []
};

const ProductContext = createContext<InitialStateType>(initialState);

export const ProductProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { products } = await ProductService.fetchProducts();
        dispatch({ type: LOAD, payload: { products: products['results'] } });
      }
      catch (error) {
        dispatch({ type: SET_ERROR, payload: { error: error.message } });
      }
    }

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = (): InitialStateType => useContext(ProductContext);