import Redirect from '@/components/shared/Redirect';
import { useGetUser } from '../actions/user';
import { isAuthorized } from '../utils/auth0';

const withAuth = (Component) => (role) => (props) => {
 const { data, loading } = useGetUser();

 if (loading) {
  return <p>Loading...</p>;
 }

 if (!data) {
  return <Redirect ssr to="/api/v1/login" />;
 } else {
  if (role && !isAuthorized(data, role)) {
   return <Redirect ssr to="/api/v1/login" />;
  }
  return <Component user={data} loading={loading} {...props} />;
 }
};

export default withAuth;
