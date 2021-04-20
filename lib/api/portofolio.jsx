import axios from 'axios';

class PortofolioApi {
 getAll() {
  return axios.get('http://localhost:3001/api/v1/portofolios');
 }
}

export default PortofolioApi;
