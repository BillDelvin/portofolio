import { initAuth0 } from '@auth0/nextjs-auth0';

const auth0 = initAuth0({
 secret: process.env.AUTH0_SECRET,
 issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
 baseURL: process.env.AUTH0_BASE_URL,
 clientID: process.env.AUTH0_CLIENT_ID,
 clientSecret: process.env.AUTH0_CLIENT_SECRET,
 authorizationParams: {
  audience: process.env.AUTH0_AUDIENCE,
  scope: 'openid profile',
 },
 routes: {
  callback: process.env.AUTH0_CALLBACK,
  postLogoutRedirect: process.env.AUTH0_POST_LOGOUT_REDIRECT,
 },
});

export default auth0;

export const isAuthorized = (user, role) => {
 return user && user[process.env.AUTH0_NAMEPSPACE].includes(role);
};

export const authorizeUser = async (req, res) => {
 const session = await auth0.getSession(req, res);
 if (!session || !session.user) {
  res.writeHead(302, {
   Location: '/api/v1/login',
  });
  res.end();
  return null;
 } else {
  return session.user;
 }
};

export const withAuth = (getData) => (role) => async ({ req, res }) => {
 const session = await auth0.getSession(req, res);
 if (!session || !session.user || (role && !isAuthorized(session.user, role))) {
  return {
   redirect: {
    destination: '/api/v1/login',
    statusCode: 302,
   },
  };
 }

 const data = getData ? await getData({ req, res }, session.user) : {};

 return { props: { user: session.user, ...data } };
};
