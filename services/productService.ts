import { Product } from 'types';
import { catchError } from 'utils/catchError';
import apiClient from 'api/apiClient';

interface ProductsData {
  products: Product[];
}

const fetchProducts = async (): Promise<ProductsData> => {
  try {
    const { data } = await apiClient.get('/public/products/stores');
    const productsData: ProductsData = {
      products: data
    }

    return productsData;
  }
  catch (error) {
    throw new Error(catchError(error));
  }
}

export const ProductService = {
  fetchProducts
}