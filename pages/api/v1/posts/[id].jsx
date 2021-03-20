import axios from 'axios';

export default async (req, res) => {
 try {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`);
  return res.status(200).json(data);
 } catch (error) {
  return res.status(error.status || 400).json({ message: 'API Error' });
 }
};
