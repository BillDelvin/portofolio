import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import { authorizeUser } from '@/utils/auth0';

const SecretSsr = ({ user }) => {
 return (
  <Layout user={user} loading={false}>
   <BasePage>
    <h1>Im secret page - hello {user && user.name}</h1>
   </BasePage>
  </Layout>
 );
};

export const getServerSideProps = async ({ req, res }) => {
 const user = await authorizeUser(req, res);

 return { props: { user } };
};

export default SecretSsr;
