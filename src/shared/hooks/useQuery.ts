import { useEffect, useState } from 'react';
import { http } from '../api/services';

type Options = {
  id?: string;
};

export const useQuery = <T>(url: string, options?: string) => {
  const [data, setData] = useState<T | undefined>(undefined);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  // http.get('http://www.omdbapi.com/?apikey=4287dec6&i=tt3896198')

  useEffect(() => {
    setIsLoading(true);
    setIsError(null);
    // const fullurl = options?.id ? url + options.id : url;
    http({
      method: 'get',
      params: {
        i: options?.id,
      },
    })
      .then(response => {
        setData(response.data);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setIsError(error);
      });
  }, []);

  // localStorage.setItem('data', JSON.stringify(data));
  return {
    isError,
    isLoading,
    data,
  };
};
