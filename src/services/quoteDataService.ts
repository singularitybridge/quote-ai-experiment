import axios from 'axios';

const API_URL = 'https://api.jsonbin.io/v3/b/66c89747e41b4d34e4242f0c';

export async function fetchQuoteData() {
  try {
    const response = await axios.get(API_URL);
    return response.data.record;
  } catch (error) {
    console.error('Error fetching quote data:', error);
    throw error;
  }
}