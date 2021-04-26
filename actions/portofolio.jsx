import axios from 'axios';
import { useApiHandler } from './index';
import useSWR from 'swr';
import { fetcher } from './index';

export const useCreatePortofolio = () =>
 useApiHandler((data) => axios.post('/api/v1/portofolios', data));

export const useGetPortofolio = (id) => {
 const { data, error, ...rest } = useSWR(`/api/v1/portofolios/${id}`, fetcher);
 return { data, error, loading: !data && !error, ...rest };
};
