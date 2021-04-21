import PortofolioApi from '../../../lib/api/portofolio';

export default async function createPortofolio(req, res) {
 try {
  const data = req.body;
  await new PortofolioApi().createPortofolio(data);
  return res.status(200).json({ message: 'Portofolio was created!' });
 } catch (error) {
  return res.status(error.status || 400).end(error.message);
 }
}
