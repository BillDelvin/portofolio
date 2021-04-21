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

 createPortofolio(data) {
  return axios.post(this.apiUrl, data);
 }
}

export default PortofolioApi;
