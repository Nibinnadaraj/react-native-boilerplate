import axios from 'axios';

export const apiCaller = async (
  url: string,
  method: string,
  params?: object,
  headerParams?: object,
) => {
  interface optionTypes {
    method?: string;
    headers?: object;
    url?: string;
    data?: object;
  }

  const options: optionTypes = {
    method,
    headers: headerParams,
    url,
    data: params,
  };

  return new Promise((resolve: any, reject: any) => {
    axios(options)
      .then(function (response) {
        resolve(response);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};
