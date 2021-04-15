import Layout from '@/components/Layout';
import BasePage from '@/components/BasePage';
import { withAuth } from '@/utils/auth0';

const SecretSSR = ({ user, title }) => {
 return (
  <Layout user={user} loading={false}>
   <BasePage>
    <h1>Im secret page - hello {user && user.name}</h1>
    <h2>{title}</h2>
   </BasePage>
  </Layout>
 );
};

// export const getServerSideProps = async ({ req, res }) => {
//  const user = await authorizeUser(req, res);

//  return { props: { user } };
// };

const getTitle = () => {
 return new Promise((resolve) => {
  setTimeout(() => {
   resolve({ title: 'my new title!' });
  }, 500);
 });
};

export const getServerSideProps = withAuth(async ({ req, res }, user) => {
 const title = await getTitle();
 return title;
})();

export default SecretSSR;
