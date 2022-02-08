// import * as JSURL from "jsurl";
import { useCallback, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useQueryParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // We assume that searchParam is fresh only at init
  const [freshSearchParams, setFreshSearchParams] = useState(() => {
    return Object.entries([...searchParams]).reduce(
      (acc, [k, v]) => ({ ...acc, [k]: v }),
      {}
    );
  });

  const get = (key) => freshSearchParams[key] || [];

  const post = useCallback(
    (key) => (value) => {
      setSearchParams({ ...freshSearchParams, [key]: value });
      setFreshSearchParams((t) => ({ ...t, [key]: value }));
    },
    [freshSearchParams, setSearchParams]
  );

  return { get, post };
};
