import { getRequest } from 'core/fetch';

export const createApiClient = (apiUrl) => {
	return {
		getFunctions: async () => getRequest(`${apiUrl}/function/all`),
		getFunctionById: async (id) => getRequest(`${apiUrl}/function/${id}`),
		getProducts: async () => getRequest(`${apiUrl}/hierarchy/products`),
	};
};
