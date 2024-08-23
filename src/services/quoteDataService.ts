import axios from 'axios';

const API_BASE_URL = 'https://api.jsonbin.io/v3/b/';

export async function fetchQuoteData(quoteId: string) {
  if (!quoteId) {
    throw new Error('Quote ID is required');
  }

  const apiUrl = `${API_BASE_URL}${quoteId}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.record;
  } catch (error) {
    throw error;
  }
}