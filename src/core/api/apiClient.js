import { fetcher } from 'core/fetch/fetcher';
import { getEnvVar } from 'core/env';

// const postRequest = (url) => (body) => fetcher(url, "POST", body);
const getRequest = (url) => fetcher(url, 'GET', null);

export const createApiClient = () => {
	const apiUrl = getEnvVar('API_URL');

	return {
		getFunctions: async () => getRequest(`${apiUrl}/function/all`),
		getFunctionById: async (id) => getRequest(`${apiUrl}/function/${id}`),
		getHierarchies: async () => getRequest(`${apiUrl}/hierarchy/all`),
		getHierarchyById: async (id) => getRequest(`${apiUrl}/hierarchy/${id}`),
	};
};
