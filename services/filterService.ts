import { Filter } from 'types';
import { catchError } from 'utils/catchError';
import apiClient from 'api/apiClient';

interface filterData {
  filter: Filter;
}

const fetchFilter = async (): Promise<filterData> => {
  try {
    const { data } = await apiClient.get('/public/products/filters');
    const filterData: filterData = {
      filter: data
    }

    return filterData;
  }
  catch (error) {
    throw new Error(catchError(error));
  }
}

export const FilterService = {
  fetchFilter
}