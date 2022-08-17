import { fetcher } from './fetcher';

export const postRequest = (url) => (body) => fetcher(url, 'POST', body);
