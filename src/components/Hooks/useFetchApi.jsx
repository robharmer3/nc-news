import { useEffect, useState } from "react";

export default function useFetchApi(apiFunction, ...args) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();
  useEffect(() => {
    apiFunction(...args)
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
        setIsLoading(false);
      });
  }, [...args]);

  return { isLoading, isError, data };
}
