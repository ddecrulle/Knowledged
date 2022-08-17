const { fetcher } = require('./fetcher');

export const getRequest = (url) => fetcher(url, 'GET', null);
