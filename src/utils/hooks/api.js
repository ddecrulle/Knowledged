import { useCallback } from "react";

import { API } from "utils/api";
import { getEnvVar } from "utils/env";

export const useAPI = () => {
  const apiUrl = getEnvVar("API_URL");

  const getProducts = useCallback(() => {
    return API.getProducts(apiUrl);
  }, [apiUrl]);

  const getFunctions = useCallback(() => {
    return API.getFunctions(apiUrl);
  }, [apiUrl]);

  return {
    getProducts,
    getFunctions,
  };
};
