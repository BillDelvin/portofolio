import axios from 'axios';

export default async (req, res) => {
 try {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.status(200).json(data.slice(0, 10));
 } catch (error) {
  return res.status(error.status || 400).end('Api Error');
 }
};
