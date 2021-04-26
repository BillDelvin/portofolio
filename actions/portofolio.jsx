import axios from 'axios';
import { useApiHandler } from './index';

export const useCreatePortofolio = () =>
 useApiHandler((data) => axios.post('/api/v1/portofolios', data));
