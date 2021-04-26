import PortofolioApi from '../../../../lib/api/portofolio';
import auth0 from '../../../../utils/auth0';

export default async function (req, res) {
 if (req.method === 'GET') {
  try {
   const json = await new PortofolioApi().getById(req.query.id);
   return res.status(200).json(json.data);
  } catch (error) {
   return res.status(400).json(error.message);
  }
 }

 if (req.method === 'PATCH') {
  try {
   const { accessToken } = await auth0.getAccessToken(req, res);
   const json = await new PortofolioApi(accessToken).updatedPortofolio(req.query.id, req.body);
   return res.status(200).json(json.data);
  } catch (error) {
   return res.status(400).json(error);
  }
 }

 if (req.method === 'DELETE') {
  try {
   const { accessToken } = await auth0.getAccessToken(req, res);
   const json = await new PortofolioApi(accessToken).deletedPortofolio(req.query.id);
   return res.status(200).json(json.data);
  } catch (error) {
   return res.status(400).json(error);
  }
 }
}
