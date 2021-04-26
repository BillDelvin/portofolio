import PortofolioApi from '../../../../lib/api/portofolio';
import auth0 from '../../../../utils/auth0';

export default async function createPortofolio(req, res) {
 try {
  const { accessToken } = await auth0.getAccessToken(req, res);
  const createPortofolio = await new PortofolioApi(accessToken).createPortofolio(req.body);
  return res.status(200).json(createPortofolio.data);
 } catch (error) {
  return res.status(error.status || 422).json(error.response.data);
 }
}
