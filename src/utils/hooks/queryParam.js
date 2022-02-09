import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useQueryParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // We assume that searchParam is fresh only at init
  const [freshSearchParams, setFreshSearchParams] = useState(() => {
    console.log(`searchParams : ${searchParams}`);
    console.log(
      `searchParamsWithDecode : ${JSON.stringify(
        Object.fromEntries(searchParams)
      )}`
    );
    return Object.fromEntries(searchParams);
  });

  const get = (key) => {
    return freshSearchParams[key] || [];
  };

  const post = useCallback(
    (key) => (value) => {
      // const newSearchParams = new URLSearchParams(freshSearchParams);
      // newSearchParams.set(key, value);
      console.log(`freshPost ${JSON.stringify(freshSearchParams)}`);
      console.log(`searchParams ${searchParams.getAll(key)}`);
      console.log(`key : ${key} value : ${value}`);
      console.log(
        `things set ${JSON.stringify({ ...freshSearchParams, [key]: value })}`
      );
      setSearchParams({ ...freshSearchParams, [key]: value });
      setFreshSearchParams((t) => ({ ...t, [key]: value }));
    },
    [freshSearchParams, searchParams, setSearchParams, setFreshSearchParams]
  );

  return { get, post };
};
