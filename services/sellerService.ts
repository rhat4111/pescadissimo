import { catchError } from 'utils/catchError';
import apiClient from 'api/apiClient';

interface SellersData {
  sellers: object;
}

const fetchSellers = async (): Promise<SellersData> => {
  try {
    const { data } = await apiClient.get('/public/stores');
    const sellersData: SellersData = {
      sellers: data
    }

    return sellersData;
  }
  catch (error) {
    throw new Error(catchError(error));
  }
}

export const SellerService = {
  fetchSellers
}