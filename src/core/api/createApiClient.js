import { getRequest } from 'core/fetch';

export const createApiClient = (apiUrl) => {
	return {
		getFunctions: async () => getRequest(`${apiUrl}/function/all`),
		getFunctionById: async (id) => getRequest(`${apiUrl}/function/${id}`),
		getHierarchies: async () => getRequest(`${apiUrl}/hierarchy/all`),
		getHierarchyById: async (id) => getRequest(`${apiUrl}/hierarchy/${id}`),
	};
};
