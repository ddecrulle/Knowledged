import { useMemo, useCallback } from "react";
import * as JSURL from "jsurl";
import { useSearchParams } from "react-router-dom";

export const useQueryParam = (key) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramValue = searchParams.get(key);

  const value = useMemo(() => JSURL.parse(paramValue) || [], [paramValue]);

  const setValue = useCallback(
    (newValue) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, JSURL.stringify(newValue));
      setSearchParams(newSearchParams);
    },
    [key, searchParams, setSearchParams]
  );

  return [value, setValue];
};
