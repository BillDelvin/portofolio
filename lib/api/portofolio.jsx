import axios from 'axios';

class PortofolioApi {
 constructor(accessToken) {
  this.config = {};

  if (accessToken) {
   this.config.headers = {
    Authorization: `Bearer ${accessToken}`,
   };
  }

  this.apiUrl = process.env.PORTOFOLIO_API_URL + '/portofolios';
 }
 getAll() {
  return axios.get(this.apiUrl);
 }

 getById(id) {
  return axios.get(`${this.apiUrl}/${id}`);
 }

 createPortofolio(data) {
  return axios.post(this.apiUrl, data, this.config);
 }

 updatedPortofolio(id, data) {
  return axios.patch(`${this.apiUrl}/${id}`, data, this.config);
 }
}

export default PortofolioApi;
