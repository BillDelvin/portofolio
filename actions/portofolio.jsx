import axios from 'axios';

export const createPortofolio = (data) => {
 return axios.post('/api/v1/portofolios', data);
};
