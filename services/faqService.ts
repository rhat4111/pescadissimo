import { FAQ } from 'types';
import { catchError } from 'utils/catchError';
import jsonClient from 'api/jsonClient';

interface FAQData {
  Faq: FAQ;
};

const fetchFAQ = async (): Promise<FAQData> => {
  try {
    const { data } = await jsonClient.get('/static/mockup/get/web/block/faqs.json');
    const FAQData: FAQData = {
      Faq: data
    }

    return FAQData;
  }
  catch (error) {
    throw new Error(catchError(error));
  }
}

export const FAQService = {
  fetchFAQ
}