import PortofolioApi from '../../../../lib/api/portofolio';
import auth0 from '../../../../utils/auth0';

export default async function (req, res) {
 try {
  const json = await new PortofolioApi().getById(req.query.id);
  return res.status(200).json(json.data);
 } catch (error) {
  return res.status(400).json(error.message);
 }
}
