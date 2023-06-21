import { Abouts } from 'types';
import { catchError } from 'utils/catchError';
import jsonClient from 'api/jsonClient';

interface AboutsData {
  abouts: Abouts;
}

const fetchAbouts = async (): Promise<AboutsData> => {
  try {
    const { data } = await jsonClient.get('/static/mockup/get/web/block/about-us.json');
    const aboutsData: AboutsData = {
      abouts: data
    }

    return aboutsData;
  }
  catch (error) {
    throw new Error(catchError(error));
  }
}

export const AboutService = {
  fetchAbouts
}