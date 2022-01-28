import { fetcher } from "./fetcher";

// const postRequest = (url) => (body) => fetcher(url, "POST", body);
const getRequest = (url) => fetcher(url, "GET", null);

const getProducts = (apiUrl) => getRequest(`${apiUrl}/model/products`);

const getFunctions = (apiUrl) => getRequest(`${apiUrl}/model/functions`);

export const API = {
  getProducts,
  getFunctions,
};
