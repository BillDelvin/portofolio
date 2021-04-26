import { useState } from 'react';

export const fetcher = (url) =>
 fetch(url).then(async (res) => {
  const result = await res.json();

  if (res.status !== 200) {
   return Promise.reject(result);
  } else {
   return result;
  }
 });

export function useApiHandler(apiCallback) {
 const [reqState, setReqState] = useState({
  error: null,
  data: null,
  loading: false,
 });
 const handler = async (...data) => {
  setReqState({
   error: null,
   data: null,
   loading: true,
  });

  try {
   const json = await apiCallback(...data);
   setReqState({
    error: null,
    data: json.data,
    loading: false,
   });
   return json.data;
  } catch (error) {
   const errorMessage =
    (error.response && error.response.data.message) || 'Oops something went wrong!';
   setReqState({
    error: errorMessage,
    data: null,
    loading: false,
   });

   return Promise.reject(errorMessage);
  }
 };
 return [handler, { ...reqState }];
}
