import auth0 from '../../../utils/auth0';

export default async function callback(req, res) {
 try {
  await auth0.handleCallback(req, res, { redirectUri: process.env.AUTH0_BASE_URL });
 } catch (error) {
  console.log(error);
  res.status(error.status || 400).end(error.message);
 }
}
