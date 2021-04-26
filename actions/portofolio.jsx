import axios from 'axios';
import { useApiHandler, fetcher } from './index';
import useSWR from 'swr';

export const useCreatePortofolio = () =>
 useApiHandler((data) => axios.post('/api/v1/portofolios', data));

export const useUpdatedPortofolio = () =>
 useApiHandler((id, data) => axios.patch(`/api/v1/portofolios/${id}`, data));

export const useDeletePortofolio = () =>
 useApiHandler((id) => axios.delete(`/api/v1/portofolios/${id}`));

export const useGetPortofolio = (id) => {
 const { data, error, ...rest } = useSWR(`/api/v1/portofolios/${id}`, fetcher);
 return { data, error, loading: !data && !error, ...rest };
};
