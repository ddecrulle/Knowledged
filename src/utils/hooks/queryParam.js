import { useMemo } from "react";
import { useConstCallback } from "powerhooks/useConstCallback";
import { useSearchParams } from "react-router-dom";

const groupParamsByKey = (params) =>
  [...params.entries()].reduce((acc, tuple) => {
    // getting the key and value from each tuple
    const [key, val] = tuple;
    if (acc.hasOwnProperty(key)) {
      // if the current key is already an array, we'll add the value to it
      if (Array.isArray(acc[key])) {
        acc[key] = [...acc[key], val];
      }
    } else {
      acc[key] = [val];
    }

    return acc;
  }, {});
export const useQueryParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const freshSearchParams = useMemo(
    () => groupParamsByKey(searchParams),
    [searchParams]
  );

  const get = useConstCallback((key) => freshSearchParams[key] ?? []);

  const post = useConstCallback((key, value) => {
    //debugger;
    console.log(JSON.stringify({ ...freshSearchParams, [key]: value }));
    return setSearchParams({ ...freshSearchParams, [key]: value });
  });

  return { get, post };
};
