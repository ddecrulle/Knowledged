import { fetcher } from './fetcher';

export const getRequest = (url) => fetcher(url, 'GET', null);
