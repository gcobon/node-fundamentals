import axios from 'axios';

export const httpClient = {
  get: async (url: string) => {
    const resp = await axios.get(url);
    return resp.data;
  },

  post: async (url: string, body: object) => {
    throw new Error('Not implemented');
  },
  put: async (url: string, body: object) => {
    throw new Error('Not implemented');
  },
  delete: async (url: string) => {
    throw new Error('Not implemented');
  },
};
