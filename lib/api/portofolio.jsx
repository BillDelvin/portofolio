import axios from 'axios';

class PortofolioApi {
 constructor() {
  this.apiUrl = process.env.PORTOFOLIO_API_URL + '/portofolios';
 }
 getAll() {
  return axios.get(this.apiUrl);
 }

 getById(id) {
  return axios.get(`${this.apiUrl}/${id}`);
 }
}

export default PortofolioApi;
