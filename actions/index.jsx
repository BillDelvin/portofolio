import { useEffect, useState } from 'react';

export const useGetData = () => {
 const [data, setData] = useState([]);
 const [error, setError] = useState('');
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function getData() {
   const fetcData = await fetch('/api/v1/posts');
   const result = await fetcData.json();
   if (fetcData.status !== 200) {
    setError(result);
   } else {
    setData(result);
   }
   setLoading(false);
  }

  getData();
 }, []);

 return { data, error, loading };
};

export const useGetDataById = () => {};
